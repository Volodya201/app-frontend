export interface IRequestConfig {
    url: string,
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
    headers: object,
    async: boolean,
    body: any | undefined
}