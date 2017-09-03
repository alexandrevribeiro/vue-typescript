<template>
  <div>
    <span>Look at the "Console".</span>
    <br><br>
    <button @click="clicked">Click</button>
    <button @click="parentClicked">Parent click</button>
    <home-link></home-link>
  </div>
</template>

<script lang="ts">

  import Parent from './Parent'
  import Component from 'vue-class-component'
  import HomeLink from '@/components/HomeLink.vue'

  @Component({ components: { HomeLink }}) // -> It tells Vue this class is a component
  export default class extends Parent { // Vue {

    // Data properties are written as variables:
    message: string = 'Hello Vue';

    // Computed properties are written as standard getters:
    get fullMessage() {
        return `${this.message} from Typescript`;
    }

    // Hooks (created, mounted, etc.) are written as methods:
    created() {
      console.log('Hello -> "created" hook.')
    }

    // Methods are written as methods ;)
    clicked() {    
      console.log('Hello -> "clicked"');
    }
  }

/*

// ORIGINAL:

export default {
  name: 'hello',
  data () {
    return {
      message: 'Welcome to Your Vue.js App'
    }
  },

  computed: {
    fullMessage(){
      return `${this.message} from Typescript`;
    }
  },

  created() {
    console.log('created');
  },

  methods: {
    clicked(){
      console.log('clicked');
    }
  }
}
*/
</script>