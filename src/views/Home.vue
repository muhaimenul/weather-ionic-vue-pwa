<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>ZipInfo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <Search v-on:get-zip="getZipInfo"/>
      <Info v-bind:info="info" />
      <ClearInfo :info="info" v-on:clear-info="clearInfo" />
    </ion-content>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Search from '@/components/Search.vue'
import Info from '@/components/Info.vue'
import ClearInfo from '@/components/ClearInfo.vue'

export default {
  name: 'home',
  components: {
    Search, Info, ClearInfo
  },
  data () {
    return {
      info: null
    }
  },
  methods: {
    async getZipInfo(zip) {
      const res = await fetch(`https://api.zippopotam.us/us/${zip}`)
      if(res.status == 404) {
        console.log(res)
      }
      this.info = await res.json()
      console.log(this.info)
    },
    
    clearInfo () {
      this.info = null
    }
  }
}
</script>
