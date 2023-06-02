<template>
    <h1>{{capitalize}}</h1>
</template>
<script setup>
import { computed } from 'vue';
const props = defineProps(['heading'])
const heading = props.heading

const capitalize = computed(() => {
    return heading.toUpperCase();
})
</script>