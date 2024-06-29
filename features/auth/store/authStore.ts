import { instance } from "~/shared/fetch/index"
import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import { type IRegisterData, type ILoginData, type ILoginResponse } from "./types"
import { useLoadingStore } from "~/features/loading/store/index"
//import router from "@/router"

export const useAuthStore = defineStore("auth", () => {
    const isAuth = ref<boolean>(false)
    const isChecked = ref<boolean>(false)

    const message = ref("")
    const status = ref(true)

    const registerData = reactive<IRegisterData>({
        username: "",
        password: ""
    })

    const loginData = reactive<ILoginData>({
        username: "",
        password: ""
    })

    const resetPasswordData = reactive({
        email: "",
        newPassword: ""
    })


    async function isLogin() {        
        // try {
        //     const data = await instance.get("auth/check-login")

        //     if (data.status >= 400) throw new Error(" ")

        //     isAuth.value = true
        // } catch (error) {
        //     isAuth.value = false
        // }
    }

    async function register() {
        const loadingStore = useLoadingStore()
        loadingStore.show()
        try {
            const data = await instance.post<ILoginResponse>("/auth/register", registerData)

            localStorage.setItem("accessToken", data?.accessToken)

            isAuth.value = true
            status.value = true
            message.value = "Вы успешно зарегистрированы"

            registerData.username = ""
            registerData.password = ""

            await navigateTo("/")
        } catch (error) {
            message.value = "Пользователь с таким именем уже существует"
            status.value = false
        }
        loadingStore.hide()
    }

    async function login() {
        const loadingStore = useLoadingStore()
        loadingStore.show()
        try {
            const data = await instance.post<ILoginResponse>("/auth/login", {...loginData})

            localStorage.setItem("accessToken", data?.accessToken)

            isAuth.value = true
            status.value = true
            loginData.username = ""
            loginData.password = ""

            await navigateTo("/")

        } catch (error:{status?:number, message?:string} | any) {
            message.value = error.message//"Логин или пароль неверен"
            status.value = false
        }
        loadingStore.hide()
    }

    async function activateAccount(key:any) {
        // try {
        //     const { data } = await instance.patch("auth/activate/" + key)
        //     console.log(data)
        //     status.value = true
        // } catch (error) {
        //     status.value = false
        // }
    }

    async function resetPassword() {
        // const loadingStore = useLoadingStore()
        // loadingStore.show()
        // try {
        //     await instance.post("auth/reset-password", resetPasswordData)
        //     status.value = true
        //     message.value = "Зайдите на электронную почту для подтверждения"
        // } catch (error) {
        //     message.value = "Пользователь с таким имейлом не найден"
        //     status.value = false  
        // }
        // loadingStore.hide()
    }

    async function confirmPassword(key:any) {
        // try {
        //     await instance.patch("auth/confirm-password/" + key)
        //     status.value = true
        // } catch (error) {
        //     status.value = false
        // }
    }

    async function logout() {
        // localStorage.setItem("accessToken", "")
        // await instance.get("auth/logout")
        // isAuth.value = false
        // router.push("/login")
    }


    return {
        isAuth,
        isChecked,
        message,
        status,
        registerData,
        loginData,
        resetPasswordData,
        isLogin,
        register,
        activateAccount,
        login,
        resetPassword,
        confirmPassword,
        logout
    }
})