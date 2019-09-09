<template>
 <div class="recommend">
   
   <div v-for="(item,index) in rs" :key="index"  class="recommenditem">
     <a :href="item.image">
     <img :src="item.image" alt="">
     </a>
   </div>
 </div>
</template>

<script>
export default {
  name:"RecommendView",
  props:{
    rs:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      rsdata: ''
    }
  },
  computed:{
   
  }
}
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  background-color: #fff;
  text-align: center;
  padding-top: 10px;
  border-bottom: 8px solid #eee;
}
.recommenditem{
  flex: 1;
}
.recommenditem img {
  width: 64px;
  height: 64px;
  border-radius:5px
}
</style>