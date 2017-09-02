<template>
    <div>
        <div><b>Original:</b> {{ description }}</div>
        <div><b>Computed prop:</b> {{ fullMessage }}</div>
    </div>
</template>


<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'

    @Component({
        props: {
            description: String
        }
    })
    export default class extends Vue {
        msg: String = 'Any message +'

        // -> Using the "Prop" decorator to declare the "prop" as a variable
        // is used ONLY to used inside this class. To use it just in the "template"
        // doing this is unnecessary.

        // @Prop() description: String 

        // By default "@Prop" takes the variable type as the type of the Property.
        // But we can explicitly define its Type and a "Default value":
        @Prop({ type: String, default: 'Default value!!!'}) description: String

        // Computed prop as method
        get fullMessage() {
            return `${this.msg} ${this.description}`;
        }
    }
</script>
