<template>
    <HelloWorld />
    <HelloWorldWithBug />
</template>

<script setup lang="ts">
const pageData = await usePageData();
console.log(pageData.result.value);
</script>
