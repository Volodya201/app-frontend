import { instance } from "~/shared/fetch/index"
import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import { type IAccountData } from "./types"
//import router from "@/router"

export const useAccountStore = defineStore("account", () => {

    const account = reactive<IAccountData>({
        id: 0,
        displayName: "",
        username: "",
        email: "",
        image: "",
        isActivated: false,
        createdAt: ""
    })
    
    async function getAccountData() {
        try {
            
            const accountData = await instance.get<IAccountData>("/users/me")

            for (const key in account) {
                console.log(key)
                account[key] = accountData[key]
            }
        } catch (error) {
            console.log("Why", error)
        }
    }

    return {
        account,
        getAccountData
    }
})