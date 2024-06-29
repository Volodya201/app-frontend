<template>
    <header>
        <div class="wrapper">
            <div class="logo">
                <Logo />
            </div>
            <div>
                something stuff too
            </div>
            <div class="pages">
                <div class="page account"></div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
    import Logo from "@/shared/ui/Logo/Logo.vue"
</script>

<style scoped>
    header {
        width: 100%;
        height: 80px;
        background-color: rgb(138, 160, 237);
        display: flex;
    }

    .wrapper {
        width: 90%;
        padding: 0 5%;
    }

    .account {
        background-color: blueviolet;
        width: 60px;
        height: 60px;
    }
</style>