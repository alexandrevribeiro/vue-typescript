<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="clicked">Click</button>
    <button @click="parentClicked">Parent click</button>
  </div>
</template>

<script lang="ts">

// import Vue from 'vue'
import Parent from './Parent'
import ClassComponent from 'vue-class-component'

@ClassComponent({}) // -> It tells Vue this class is a component
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>