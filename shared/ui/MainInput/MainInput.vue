<template>
    <input 
        class="input" 
        @input="($event:ChangeEvent<HTMLInputElement>) => onInput($event.target.value)" 
        :value="modelValue" 
        :placeholder="placeholder"
        :disabled="disable" />
</template>

<script setup lang="ts">
    interface IProps {
        placeholder: string,
        modelValue: any,
        disable?: boolean
    }

    const props = defineProps<IProps>()

    const emit = defineEmits(["update:modelValue"])

    function onInput(text:string) {
        emit("update:modelValue", text)
    }
</script>

<style scoped>
    input {
        background-color: #ffffff;
        color: #030319;
        border: 1px solid #04041A;
        border-radius: 31px;
        padding: 10px 15px;
        font-size: 20px;
        
        font-family: "OpenSans";
        font-weight: 700;
    }
</style>