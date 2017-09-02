<template>
    <div>
        <span>(Look at the "Console" tab)</span>
        <br><br>
        <div><button @click="clicks++">Clicks: {{ clicks }}</button></div> <br>
        <div><button @click="obj.clicks++">Obj.clicks: {{ obj.clicks }}</button></div>
        <home-link></home-link>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Watch } from 'vue-property-decorator'
    import HomeLink from '@/components/HomeLink.vue'

    @Component({
        components: {
            HomeLink
        }
    })
    export default class extends Vue {

        clicks: number = 0

        obj: any = {
            clicks: 0
        }

        // Watching the "clicks" property
        @Watch('clicks')
        watchCount(newValue, oldValue) {
            console.log('Clicks -> Old: ', oldValue, ', New: ', newValue);
        }

        // Watching an object deeply, which means it'll also watch its properties
        @Watch('obj', { deep: true})
        watchObj(newValue, oldValue) {
            console.log('Obj.clicks -> Old: ', oldValue.clicks, ', New: ', newValue.clicks);
        }
    }

</script>

