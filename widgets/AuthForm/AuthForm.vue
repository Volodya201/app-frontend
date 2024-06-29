<template>
    <div class="shell">
        <div class="form">
            <div class="logo">
                <!-- <img src="@/assets/logo.svg"> -->
            </div>

            <slot/>
        </div>
    </div> 
</template>

<script setup lang="ts">

</script>

<style scoped>

    .shell {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form {
        width: 40%;
        padding: 70px 70px;
        border: 5px solid #8aa0ed;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        flex-direction: column;
        text-align: center;
    }

    .logo {
        width: 100%;
    }
</style>