<template>
    <!-- <h3>{{ description }}</h3> -->
     <h3>{{ fullMessage }}</h3> 
</template>


<script lang="ts">
    import Vue from 'vue'
    import ClassComponent from 'vue-class-component'

    // This class is ONLY used to make TypeScript know the "description"
    // property inside the JS context. If it were used only in the template
    // this class WOULDN'T be necessary.
    class ChildCmp extends Vue {
        description: String
    }

    @ClassComponent({
        props: {
            description: String
        }
    })
    export default class extends ChildCmp { // Vue {
        msg: String = 'Description: '

        // Computed prop as method
        get fullMessage() {
            return `${this.msg} ${this.description}`;
        }
    }
</script>
