<template>
    <AuthForm>
        <RegisterUser/>
    </AuthForm>
</template>

<script setup lang="ts">
    import AuthForm from "@/widgets/AuthForm/AuthForm.vue"
    import RegisterUser from "~/features/auth/components/RegisterUser.vue"
</script>