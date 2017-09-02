<template>
    <div class="home-link">
        <router-link to="/">Home</router-link>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class HomeLink extends Vue { }
</script>

<style scoped>
    .home-link {
        margin-top: 20px;
    }
</style>
