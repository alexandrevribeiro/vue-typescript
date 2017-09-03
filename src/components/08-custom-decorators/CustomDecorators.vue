<template>
    <div>
        Custom decorators! Look at the console.
        <home-link></home-link>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component, { createDecorator } from 'vue-class-component'
    import HomeLink from '@/components/HomeLink.vue'
    
    // Creating a decorator which expects parameter
    const Log = (msg?: string) => {
        return createDecorator((component: any, key) => {
            console.log('Log decorator:');
            console.log('   Key: ', key);
            console.log('   msg: ', msg);
            console.log('   Component: ', component);
        })
    }
    
    const NoCache = createDecorator((component: any, key) => {
        component.computed[key].cache = false;
        console.log('NoCache decorator:');
            console.log('   Key: ', key);
            console.log('   computed[', key, '].cache: ', component.computed[key].cache);        
            console.log('   Component: ', component);        
    })

    @Component({ components: { HomeLink }}) // -> It tells Vue this class is a component
    export default class CustomDecorator extends Vue {

        @Log('Any message')
        name = 'testing!'

        @Log()
        @NoCache
        get message() { 
            return 'Hi!'
        }
    }
</script>
