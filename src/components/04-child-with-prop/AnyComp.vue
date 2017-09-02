<template>
    <div>
        <child description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <home-link></home-link>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import HomeLink from '@/components/HomeLink.vue'
    import ChildComp from './ChildComp.vue'

    @Component({ // -> It tells Vue this class is a component
        components: {
            HomeLink,
            'child': ChildComp
        }
    })
    export default class extends Vue { }
</script>
