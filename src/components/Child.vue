<template>
    <!-- <h3>{{ description }}</h3> -->
     <h3>{{ fullMessage }}</h3> 
</template>


<script lang="ts">
    import Vue from 'vue'
    // import Component from 'vue-class-component'
    import { Component, Prop } from 'vue-property-decorator'

    // This class is ONLY used to make TypeScript know the "description"
    // property inside the JS context. If it were used only in the template
    // this class WOULDN'T be necessary.
    // --> This approach is unnecessary when using "vue-property-decorator"
    // class ChildCmp extends Vue {
    //     description: String
    // }

    @Component({
        props: {
            description: String
        }
    })
    export default class extends Vue { // ChildCmp {
        msg: String = 'Description: '

        // Using the "Prop" decorator to declare the "prop" as a variable
        // (which is used ONLY because it's being used inside this class)       
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
