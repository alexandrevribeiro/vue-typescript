<template>
    <div>
        <h4>Two-Way model binding with "@Model" decorator to change the default event and property.</h4>
        <span>(Look at the "Vue" tab)</span>
        <br><br>
        </span>
        <checkbox 
            :title="checkbox.title"
            :value="checkbox.value" 
            v-model="checkbox.enabled"></checkbox>

        <home-link></home-link>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import HomeLink from '@/components/HomeLink.vue'
    import Checkbox from './Checkbox.vue'
    
    @Component({
        components: {
            HomeLink,
            Checkbox
        }
    })
    export default class extends Vue {
        checkbox = {
            title: 'Fancy checkbox',
            value: 'checkbox-value',
            enabled: true
        }
    }
</script>
