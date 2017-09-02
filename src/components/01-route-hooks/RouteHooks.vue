<template>
    <div>
        <span>Look at the "Console".</span>
        <home-link></home-link>
    </div>
</template>

<script lang="ts">

    import Vue from 'vue'
    import Component from 'vue-class-component'
    import HomeLink from '@/components/HomeLink.vue'

    @Component({ // -> It tells Vue this class is a component
        components: {
            HomeLink
        }
    })
    export default class extends Vue {

    // --> Route hooks MUST be registered using "Component.registerHooks".
    // They're currently being register in the "src/hooks.ts"

    beforeRouteEnter(to, from, next) {
        console.log('"RouteHooks.vue" -> "beforeRouteEnter" hook.');
        console.log(`  -> from: '${from.path}'. to: '${to.path}'.`)
        next();
    }

    beforeRouteLeave(to, from, next) {
        console.log('"RouteHooks.vue" -> "beforeRouteLeave" hook.');
        console.log(`  -> from: '${from.path}'. to: '${to.path}'.`)
        next();
    }
}
</script>