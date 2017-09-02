<!--> 
  It depends of the TS Directive defined in:
  "src/directives/color-directive"
</!-->

<template>
  <div class="hello">
    <!-- <h1 v-color-directive.background="'#bae4ca'">{{ message }}</h1> -->

    <h3 v-color-directive="{ color: '#3879bd', background: '#bae4ca'}">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </h3>

    <home-link></home-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import HomeLink from '@/components/HomeLink.vue'
  import colorDirective from '@/directives/color-directive'

  @Component({
    directives: {
      colorDirective
    },
    components: {
      HomeLink
    }
  })
  export default class extends Vue {
  }
</script>