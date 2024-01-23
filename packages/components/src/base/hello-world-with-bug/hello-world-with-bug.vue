<template>
    <h1>Hello World with bug</h1>
</template>

<script setup lang="ts">
import { HELLO_WORLD_CONTEXT, HELLO_WORLD_CONTEXT_DEFAULT } from '../../shared';

const context = inject(HELLO_WORLD_CONTEXT, HELLO_WORLD_CONTEXT_DEFAULT);
console.log('hello-world-with-bug:context', context);

onMounted(() => {
    const test = async () => {
        console.log('hello-world-with-bug:before');
        await new Promise((resolve) => setTimeout(resolve));
        console.log('hello-world-with-bug:after');
    };
    test();
});
</script>
