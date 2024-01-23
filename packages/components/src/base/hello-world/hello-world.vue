<template>
    <h1>Hello World</h1>
</template>

<script setup lang="ts">
onMounted(() => {
    const test = async () => {
        console.log('hello-world:before');
        await new Promise((resolve) => setTimeout(resolve));
        console.log('hello-world:after');
    };
    test();
});
</script>
