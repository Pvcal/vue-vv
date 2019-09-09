<template>
  <swiper>
  <swiper-item v-for="(item,i) in rs" :key="i">
    <a href="">
      <img :src="item.image" alt="">
    </a>
  </swiper-item>
</swiper>
</template>

<script>
import {Swiper ,SwiperItem}from "@/components/common/swiper"
export default {
  name:"HomeSwiper",
  props: {
    rs:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>

</style>