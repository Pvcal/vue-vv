<template>
  <div id="home">
  <div class="home-nav" >
    <navbar>
     <div  slot="center">购物街</div>
    </navbar>
  </div>
  <scroll class="scrollconent" ref="scroll" :probe-type="3" @scroll="contentScroll">
  <home-swiper :rs="rs"></home-swiper>
  <recommend-view :rs="rs"></recommend-view>
  <feature-view></feature-view>
  <tab-control class="tabcontrol" :titles="['流行','爆款','推荐']" @tabClick="tabClick"></tab-control>
  <goods-list :goods="showGoods"></goods-list>
  </scroll>
  <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
 </div>
</template>

<script>
// import Navbar from 'components/commom/navbar/Navbar'
import Navbar from '../../components/common/navbar/Navbar'
import GoodsList from "../../components/content/goods/GoodsList"
import HomeSwiper from "@/views/home/childComps/HomeSwiper"
import RecommendView from "./childComps/RecommendView"
import FeatureView from "./childComps/FeatureView"
import TabControl from "../../components/content/tabControl/TabControl"
//导入Scroll
import Scroll from "../../components/common/scroll/Scroll"

import BackTop from "../../components/content/backtop/BcakTop"
import {getHomeMultidata,getHomeGoods} from "@/network/home"
// import {Swiper ,SwiperItem}from "@/components/common/swiper"
export default {
  name:'Home',
  components:{
    Navbar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  /**
   * 数据
   */
  data() {
    return {
      rs:null,
      goods:{
        'pop' :{page :0,list:[]},
        'news' :{page :0,list:[]},
        'sell' :{page :0,list:[]}
      },
      currentType:'pop',
      isShowBackTop:false
    }
  },
  /**
   * 生命周期函数
   */
  created() {
    this.getHomeMultidata(),
    this.getHomeGoods('pop'),
    this.getHomeGoods('news'),
    this.getHomeGoods('sell')
  },
  
  /**
   * 计算属性
   */
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  /**
   * 方法
   */
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        console.log(res),
        this.rs=res.data
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1;
      getHomeGoods(type,page,10).then(res => {
        console.log(res.data),
        this.goods[type].list.push(...res.data.list),
        this.goods[type].page+=1
      })
    },
    /**
     * 事件监听
     */
    tabClick(index){
      // console.log(index)
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'news'
          break
        case 2:
          this.currentType = 'sell'
          break

      }
    },
    backClick(){
      // console.log( this.$refs.scroll.message),
       this.$refs.scroll.scrollTo(0,0)
     
    },
    contentScroll(position){
      // console.log(position)
      this.isShowBackTop=(-position.y)>200
    }



  }
}
</script>

<style scoped>
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
  /* padding-bottom: 80px; */
  height: 100vh;
  position: relative;
}
.tabcontrol{
  /* position: sticky; */
  top:44px;
  z-index: 9;
}
.scrollconent{
  position: absolute;
  top:44px;
  bottom: 49px;
  overflow: hidden;

}
</style>