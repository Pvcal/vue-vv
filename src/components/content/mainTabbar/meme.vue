<template>
<div>
   <tabbar>
     <tabbaritem path='/home'>
       <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
       <div slot="item-text">首页</div>
     </tabbaritem>
     <tabbaritem path='/category'>
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
       <div slot="item-text">分类</div>
     </tabbaritem>
     <tabbaritem path='/shop'>
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
       <div slot="item-text">shop</div>
     </tabbaritem>
     <tabbaritem path='/me'>
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
       <div slot="item-text">我的</div>
     </tabbaritem>
     <tabbaritem path='/my'>
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
       <div slot="item-text">我的测试</div>
     </tabbaritem>
     
   </tabbar>
   </div>
</template>

<script>
  import Tabbar from '../../common/tabbar/Tabbar.vue'
  import Tabbaritem from '../../common/tabbar/Tabbaritem.vue'
export default {
  name:'meme',
  components: {
      Tabbar,
      Tabbaritem
    }

}
</script>

<style>
.mtabbar{
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, .2)
}

</style>