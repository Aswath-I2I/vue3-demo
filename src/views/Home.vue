<template>
    <div>
        <Heading heading="Hello!!!"/>
        <p v-if="show">hello how are you</p>
        <p v-else="show">Show if opposite</p>
        <p v-show="show">For v-show</p>
        <!-- <button @click>Click Me</button> -->

    </div>
</template>
<script setup>
import {ref} from 'vue'
import Heading from '../components/Heading.vue';
const show = ref(true);

</script>

<style>

p.para{
    color:red
}

    /* body{
        font-size: x-large;
    } */
</style>