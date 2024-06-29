import { useAuthStore } from "@/features/auth/store/authStore"
import { IRequestConfig } from "./types"

class Instance {
    constructor(private readonly baseURL: string) {}

    async get(url: string, headers: object = {}) {
        try {

            //@ts-ignore
            headers.Authorization = "Bearer " + localStorage.getItem("accessToken")

            const requestConfig:IRequestConfig = {
                method: "GET",
                url: this.baseURL + url,
                async: true,
                headers: { ...headers },
                body: null
            }

            //@ts-ignore
            const requestResult:XMLHttpRequest = await this.sendRequest(requestConfig)

            console.log(requestResult)

            //if (requestResult.status > 399) return new Error(requestResult)
            return requestResult
            

        } catch (error) {
            console.log("Error successfully catched", error)
        }
    }


    async post(url: string, body:any , headers: object = {}) {
        try {

            //@ts-ignore
            headers.Authorization = "Bearer " + localStorage.getItem("accessToken")

            const requestConfig:IRequestConfig = {
                method: "POST",
                url: this.baseURL + url,
                async: true,
                headers: { ...headers },
                body: JSON.stringify(body)
            }

            //@ts-ignore
            const requestResult:XMLHttpRequest = await this.sendRequest(requestConfig)

            console.log(requestResult)

            //if (requestResult.status > 399) return new Error(requestResult)
            return requestResult
            

        } catch (error) {
            console.log("Error successfully catched", error)
        }
    }


    async patch(url: string, body: any,  headers: object = {}) {
        try {

            //@ts-ignore
            headers.Authorization = "Bearer " + localStorage.getItem("accessToken")

            const requestConfig:IRequestConfig = {
                method: "PATCH",
                url: this.baseURL + url,
                async: true,
                headers: { ...headers },
                body: JSON.stringify(body)
            }

            //@ts-ignore
            const requestResult:XMLHttpRequest = await this.sendRequest(requestConfig)

            console.log(requestResult)

            //if (requestResult.status > 399) return new Error(requestResult)
            return requestResult
            

        } catch (error) {
            console.log("Error successfully catched", error)
        }
    }


    async put(url: string, body: any, headers: object = {}) {
        try {

            //@ts-ignore
            headers.Authorization = "Bearer " + localStorage.getItem("accessToken")

            const requestConfig:IRequestConfig = {
                method: "PUT",
                url: this.baseURL + url,
                async: true,
                headers: { ...headers },
                body: JSON.stringify(body)
            }

            //@ts-ignore
            const requestResult:XMLHttpRequest = await this.sendRequest(requestConfig)

            console.log(requestResult)

            //if (requestResult.status > 399) return new Error(requestResult)
            return requestResult
            

        } catch (error) {
            console.log("Error successfully catched", error)
        }
    }



    async delete(url: string, headers: object = {}) {
        try {
            //@ts-ignore
            headers.Authorization = "Bearer " + localStorage.getItem("accessToken")
            const requestConfig:IRequestConfig = {
                method: "DELETE",
                url: this.baseURL + url,
                async: true,
                headers: { ...headers },
                body: null
            }
            //@ts-ignore
            const requestResult:XMLHttpRequest = await this.sendRequest(requestConfig)
            console.log(requestResult)
            return requestResult
        } catch (error) {
            console.log("Error successfully catched", error)
        }
    }



    async sendRequest(config: IRequestConfig) {
        return new Promise(function(resolve, reject) {
            const { url, method, async, headers, body } = config

            const xhrRequest:XMLHttpRequest = new XMLHttpRequest()

            xhrRequest.open(method, url, async)

            for (const header in headers) {
                //@ts-ignore
                const headerData = headers[header]
                
                xhrRequest.setRequestHeader(header, headerData)
            }

            xhrRequest.onreadystatechange = () => {
                if (xhrRequest.readyState === 4) {
                  resolve(xhrRequest)
                }
            }

            if (body) {
                xhrRequest.send([body])
            } else {}
                xhrRequest.send()
            }

        })
    }

}

const instance = new Instance("http://localhost:5000")

// instance.interceptors.request.use((config) => {
//     config.headers.Authorization = "Bearer " + localStorage.getItem("accessToken")

//     return config
// })

// instance.interceptors.response.use(config => {
//     return config
// }, async (error) => {
//     const originalRequest = error.config

//     if (error.response.status === 401) {  
//         const authStore = useAuthStore()
//         try {
//             const tokens = await instance.get("auth/refresh")

//             localStorage.setItem("accessToken", tokens.data.accessToken)

//             originalRequest.headers.Authorization = "Bearer " + tokens.data.accessToken

//             authStore.isAuth = true

//             return instance(originalRequest)
//         } catch (error) {
//             const router = useRouter()
//             router.push("/login")
//             authStore.isAuth = false
//         }
//     }

//     return error.response
// })


// instance.interceptors.request.use(config => {
//     return config
// })


export default instance