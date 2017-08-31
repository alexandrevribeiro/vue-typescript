<template>
    <div>
        <h1>Hello TS</h1>
        <router-link to="/">Hello</router-link>        
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import ClassComponent from 'vue-class-component'
    
    @ClassComponent({})
    export default class HelloTS extends Vue {
        created() {
            console.log('HelloTS -> "created" hook.')
        }
    }
</script>
