import { defineStore } from "pinia"
import { ref } from "vue"

export const useLoadingStore = defineStore("loading", () => {
    const isVisisble = ref(false)

    function show() {
        isVisisble.value = true
    }

    function hide() {
        isVisisble.value = false
    }


    return {
        isVisisble,
        show,
        hide
    }
})