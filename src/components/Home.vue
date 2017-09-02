<template>
    <div>
        <div><router-link to="/route-hooks">Route hooks using TS (open the Console)</router-link></div>
        <div><router-link to="/hierarchy">TS component with hierarchy (parent class)</router-link></div>
        <div><router-link to="/directive">TS Directive</router-link></div> 
        <div><router-link to="/using-prop">Passing Prop to child component using TS</router-link></div>
        <div><router-link to="/two-way">Two-Way model binding with "@Model" decorator</router-link></div>
        <div><router-link to="/watch">Watching data properties using TS</router-link></div>
        <div><router-link to="/di">Vue Dependency Injection using TS</router-link></div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Home extends Vue { }
</script>
