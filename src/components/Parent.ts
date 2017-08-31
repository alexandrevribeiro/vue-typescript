import Vue from 'vue'
import ClassComponent from 'vue-class-component'

// Parent component.
// Variables and methods may be overridden in the child component,
// and Hooks (created, mounted, ...) are called both in parent and child.
@ClassComponent({})
export default class extends Vue {
    
    parentClicked() {
        console.log('Parent -> "parentClicked"')
    }

    // This method is being overridden in the child component,
    // which means it won't be called and the child can't call
    // the parent component since under the hood both parent and child
    // components will be merged into the same object
    clicked() {
        console.log('Parent -> "clicked"')
    }

    // It won't be called either since the child overrides it
    message: string = 'Hello from parent'

    // Hooks, on the other hands, are called both in the parent and child components
    created() {
        console.log('Parent -> "created" hook.')
    }
}