<template>
 <div class="home-nav" id="home">
<navbar>
  <div  slot="center">购物街</div>
</navbar>
<home-swiper :rs="rs"></home-swiper>
<recommend-view :rs="rs"></recommend-view>
 </div>
</template>

<script>
// import Navbar from 'components/commom/navbar/Navbar'
import Navbar from '../../components/common/navbar/Navbar'
import HomeSwiper from "@/views/home/childComps/HomeSwiper"
import RecommendView from "./childComps/RecommendView"


import {getHomeMultidata} from "@/network/home"
// import {Swiper ,SwiperItem}from "@/components/common/swiper"
export default {
  name:'Home',
  components:{
    Navbar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      rs:null
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res),
      this.rs=res.data
    })
  }
}
</script>

<style>
.home-nav{
  background-color:var(--color-tint);
}
</style>