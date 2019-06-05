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
      <Search />
    </ion-content>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'home',
  components: {
    Search
  }
}
</script>
