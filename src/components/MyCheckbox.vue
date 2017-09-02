<template>
    <div class="hello">
        <input type="checkbox"
            :value="value"
            :checked="checked" 
            @change="changed">
        {{ title }}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop, Model } from 'vue-property-decorator'

    @Component
    export default class MyCheckbox extends Vue {
        @Prop() title: string
        @Prop() value: string

        // Decorator to tell Vue which property and event to use
        // In this case it's saying to use the "change" event and 
        // the "checked" property (which is a Boolean)
        @Prop() // -> Using "Prop" decorator since "checked" is a property
        @Model('change') checked: boolean

        changed(event) {
            // this.$emit('input', event.target.checked)
            this.$emit('change', event.target.checked)
        }
    }
</script>
