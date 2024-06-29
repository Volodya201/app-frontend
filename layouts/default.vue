<template>
    <div class="view">
        <header>
            <Header />
        </header>

        <main>
            <div class="main-wrapper">
                <slot />
            </div>
            <p>{{ accountStore.account.username }}</p>
            <button @click="onClick"></button>
        </main>

        <FullscreenLoading />
    </div> 
</template>

<script lang="ts" setup>
    import Header from "@/widgets/Header/Header.vue"
    import FullscreenLoading from "@/widgets/FullscreenLoading/FullscreenLoading.vue"
    import { useAccountStore } from "~/features/account/store/accountStore"
    import { onMounted } from "vue"

    const accountStore = useAccountStore()

    // onMounted(async () => {
    //     console.log("mounted!")
    //     await accountStore.getAccountData()
    // })


    async function onClick() {
        await accountStore.getAccountData()
    }

</script>

<style>
    @font-face {
        font-family: "OpenSans";  
        src: url("@/fonts/OpenSans/OpenSans.ttf"); 
        font-style: normal; 
    } 

    html, body {
        margin: 0;
        padding: 0;
        font-family: OpenSans;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
    
    .view {
        min-height: 100svh;
        display: grid;
        grid-template-rows: 80px 1fr;
    }

    main {
        background-color: #f2f2f2;
    }

    .main-wrapper {
        width: 90%;
        padding: 0 5%;
        height: 100%;
    }
</style>