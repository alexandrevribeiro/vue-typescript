<template>
    <div>
        <h4>Requesting users using Vue Dependency Injection</h4>
        <users></users>
        <home-link></home-link>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Provide } from 'vue-property-decorator'
    import axios from 'axios'
    import HomeLink from '@/components/HomeLink.vue'
    import Users from './Users'

    @Component({
        components: {
            Users,
            HomeLink
        }
    })
    export default class DependencyInjection extends Vue {

        // Providing "axios" as "http" to be injected using "@Inject()"
        @Provide() http = axios
    }

</script>
