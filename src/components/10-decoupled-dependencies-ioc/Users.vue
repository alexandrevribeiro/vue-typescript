<template>
    <div>
        Using Inversion of Control (IoC) container (with InversifyJS) to decouple Dependencies
        <ul>
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
        <home-link></home-link>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import HomeLink from '@/components/HomeLink.vue'
    import { TYPES } from './types'
    import { lazyInject } from './container'
    
    

    // It's not possible to use "constructor injection" inside a Vue
    // component because Vue is the one who takes care of the object creation.
    // Due to this, we use "lazyInject" instead (which uses the "inversify-inject-decorators")

    @Component({ components: { HomeLink }})
    export default class Users extends Vue {

        users = []

        @lazyInject(TYPES.UsersService)
        usersServices

        created() {
            this.usersServices.getUsers()
                .then(users => { this.users = users });
        }
    }
</script>
