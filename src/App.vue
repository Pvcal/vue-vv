<template>
  <div id="app">
    <router-view ></router-view>
   <meme></meme>
  </div>
</template>
<script>
  // import MainTabbar from "./components/content/MainTabbar/MainTabbar"
  // import Main from '@/components/content/mainTabbar/Main.vue'
  import meme from './components/content/mainTabbar/meme.vue'
  export default {
   name: 'app',
   components: {
     meme
  }
}
</script>

<style >
@import "assets/css/base.css";

</style>
