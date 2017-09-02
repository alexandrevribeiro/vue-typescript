<template>
    <div>
        <span>
            Aspect Oriented Programming (AOP), allows to reuse logic across an 
            entire app in a very neat way, decoupling it from the business logic. 
            Kaop-ts bring us decorators in order to apply AOP.</span>
        <br><br>
        <hr>
        <br>
        <button @click="getUserName" >Get user name</button>
        <span> => {{ userName }}</span>
        <home-link></home-link>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import HomeLink from '@/components/HomeLink.vue'

    import {
        AdvicePool,
        beforeMethod,
        afterMethod,
        adviceMetadata,
        adviceParam,
        onException,
        IMetadata
    } from 'kaop-ts'

    class Advices extends AdvicePool {
        
        static getCached(@adviceMetadata metadata: IMetadata, @adviceParam(0) propName) {
            console.log('beforeMethod -> "getCached".')
            const cacheKey = `${metadata.scope.$options.name}_${metadata.propertyKey}`
            const cachedName = localStorage.getItem(cacheKey)

            if (cachedName) {
                // metadata.scope.userName = cachedName
                metadata.scope[propName] = cachedName
                this.stop();
            }
        }

        static setCache(@adviceMetadata metadata: IMetadata, @adviceParam(0) propName) {
            console.log('afterMethod -> "getCached".')
            if (metadata.result) {
                metadata.result.then(() => {
                    const cacheKey = `${metadata.scope.$options.name}_${metadata.propertyKey}`
                    // localStorage.setItem(cacheKey, metadata.scope.userName)
                    localStorage.setItem(cacheKey, metadata.scope[propName])
                })
            }
        }

        static notify() {
            console.log('Notifying to server...');
        }

        static errorHandler(@adviceMetadata metadata: IMetadata) {
            console.error('Error...', metadata.exception)
        }
    }

    @Component({ components: { HomeLink }})
    export default class User extends Vue { 
        userName = ''

        // @beforeMethod(Advices.getCached)
        // @afterMethod(Advices.setCache)
        @beforeMethod(Advices.getCached, 'userName') // -> Passing parameters
        @afterMethod(Advices.setCache, 'userName') // -> Passing parameters
        @afterMethod(Advices.notify)
        @onException(Advices.errorHandler)
        getUserName() {
            // throw Error('Terrible error!');
            console.log('Inside method -> "getUserName".')

            return fetch('http://jsonplaceholder.typicode.com/users/1')
                .then(res => res.json())
                .then(user => {
                    this.userName = user.name
                });
        }

        /**
         * ORIGINAL CODE:
         * 
         getUserName() {

            const cachedName = localStorage.getItem('User_UserName')
            if (cachedName) {
                this.userName = cachedName;
            } else {
                fetch('http://jsonplaceholder.typicode.com/users/1')
                    .then(res => res.json())
                    .then(user => {
                        this.userName = user.name

                        // Set cache
                        localStorage.setItem('User_UserName', this.userName)

                        // Notifying
                        console.log('Notifying to server...');
                    })
            }
        }
         */
    }
</script>
