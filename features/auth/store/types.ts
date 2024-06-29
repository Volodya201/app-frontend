export interface IRegisterData {
    username: string
    password: string
}

export interface ILoginData {
    username: string
    password: string
}


export interface ILoginResponse {
    accessToken: string
    user: {
        username: string
        email: string | undefined | null
        id: number
    }
}