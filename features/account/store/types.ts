export interface IAccountData {
    id: number,
    email: string | null | undefined,
    username: string,
    displayName: string,
    image: string,
    isActivated: boolean,
    createdAt: string
}