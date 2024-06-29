<template>
    <button class="button">{{ text }}</button>
</template>

<script setup lang="ts">
    const props = defineProps(["text"])
</script>

<style scoped>
    .button {
        background-color: #fff;
        color: #000000;
        border: 2px solid #000;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 24px;
        padding: 10px 49px;
        font-size: 20px;
        font-weight: 700;
        font-family: "OpenSans";
    }
</style>