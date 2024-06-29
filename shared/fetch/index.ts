import { useFetch } from "nuxt/app"

class Fetch {
    constructor(public baseUrl: string) {}

    private interceptors = {
        isRetried: false,

        onRequest({ request, response, options }: any) {
            options.headers = options.headers || {}
            options.headers.cookie = true
            options.headers.authorization = "Bearer " + localStorage.getItem("accessToken")
        },

        onResponse({ request, response, options }: any) {
            console.log("not retrying")
            return response
        },

        onResponseError: async ({ request, response, options }: any) => {
            if (response.status === 401) {
                if (this.interceptors.isRetried) return response

                this.interceptors.isRetried = true

                const data:{accessToken:string} = await $fetch(this.baseUrl + "/auth/refresh", {
                    credentials: "include" 
                })

                localStorage.setItem("accessToken", data.accessToken)

                const retry = await $fetch(request, options)

                this.interceptors.isRetried = false

                console.log("retry: ", retry)

                return retry
            }

            return response
        }
    }


    private async customFetch<ResponseType>(url: string, body?: any | undefined, method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = 'GET'): Promise<ResponseType> {

        console.log("empty words cry kiddo")

        const { data, error, status } = await useFetch(this.baseUrl + url, {
            method,
            body,
            ...this.interceptors,
            watch: false,
            credentials: "include" 
        })

        console.log("empty words cry kiddo")
        console.log(data.value, error.value, status.value)

        if (status.value === "error") {
            throw {
                status: error.value?.statusCode,
                message: error.value?.data
            }
        }

        return data.value
    }


    async get<Response>(url: string): Response {
        console.log("getting")
        return this.customFetch(url)
    }

    async post<Response>(url: string, body: any): Response {
        return await this.customFetch<Response>(url, body, 'POST')
    }

    async patch<Response>(url: string, body: any): Response {
        return this.customFetch(url, body, 'PATCH')
    }

    async delete<Response>(url: string, body: any): Response {
        return this.customFetch(url, {}, 'DELETE')
    }
}

export const instance = new Fetch('http://localhost:5000')