<template>
    <div>
        <h1>Hello TS</h1>
        <router-link to="/">Hello</router-link>        
        
        <hr>
        <my-checkbox 
            :title="checkbox.title"
            :value="checkbox.value" 
            v-model="checkbox.enabled"></my-checkbox>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import MyCheckbox from './MyCheckbox.vue'
    
    @Component({
        components: {
            MyCheckbox
        }
    })
    export default class HelloTS extends Vue {
        checkbox = {
            title: 'Fancy checkbox',
            value: 'checkbox-value',
            enabled: true
        }

        created() {
            console.log('HelloTS -> "created" hook.')
        }
    }
</script>
