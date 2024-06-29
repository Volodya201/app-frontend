<template>
    <form class="form" @submit.prevent="onSubmit">
        <MainInput v-model="authStore.registerData.username" placeholder="Имя пользователя" />
        <MainInput v-model="authStore.registerData.password" placeholder="Пароль" />
        <PrimaryButton text="Зарегистрироваться" />
        <p>Уже есть аккаунт? <router-link to="/login">Войдите в него</router-link></p>
        <p id="authMessage">{{ authStore.message }}</p>
    </form>
</template>

<script lang="ts" setup>
    import MainInput from "@/shared/ui/MainInput/MainInput.vue"
    import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
    import { useAuthStore } from "@/features/auth/store/authStore"
    import { ref, onMounted } from "vue"

    const authStore = useAuthStore()

    async function onSubmit() {
        authStore.message = ""
        await authStore.register()
    }
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }
    p {
        font-size: 20px;
        margin: 0 0;
    }
    
    a {
        text-decoration: none;
        color: #030319;
        font-weight: bold;
    }
</style>