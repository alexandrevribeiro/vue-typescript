<template>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Inject } from 'vue-property-decorator'

    @Component
    export default class Users extends Vue {

        users = []

        // Injects the provided "http" dependency
        @Inject() http

        created() {
            this.http.get('http://jsonplaceholder.typicode.com/users')
                .then(data => this.users = data.data);
        }
    }
</script>
