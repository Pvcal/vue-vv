<template>
  <div id="home">
  <div class="home-nav" >
    <navbar>
     <div  slot="center">购物街</div>
    </navbar>
  </div>
  <home-swiper :rs="rs"></home-swiper>
  <recommend-view :rs="rs"></recommend-view>
  <feature-view></feature-view>
  <tab-control class="tabcontrolitem" :titles="['流行','爆款','推荐']"></tab-control>
 </div>
</template>

<script>
// import Navbar from 'components/commom/navbar/Navbar'
import Navbar from '../../components/common/navbar/Navbar'
import HomeSwiper from "@/views/home/childComps/HomeSwiper"
import RecommendView from "./childComps/RecommendView"
import FeatureView from "./childComps/FeatureView"
import TabControl from "../../components/content/tabControl/TabControl"

import {getHomeMultidata} from "@/network/home"
// import {Swiper ,SwiperItem}from "@/components/common/swiper"
export default {
  name:'Home',
  components:{
    Navbar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
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
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;

}
#home{
  padding-top: 44px;
  padding-bottom: 80px;
}

</style>