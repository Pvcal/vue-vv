<template>
   <div class="mtabbar-item" :class="{active:isActive}"  @click="mclick">
     
  <slot name="item-icon"></slot>
  <slot name="item-text"></slot>
 
  </div>
</template>

<script>
export default {
  name:'Tabbaritem',
 
  props:{
    path:String
  },
  data(){
    return{
      // isActive:false
    }
  },
  methods:{
    mclick(){
      if(this.isActive==false){
        this.isActive=!this.isActive,
        this.$router.replace(this.path),
        console.log(this.isActive)
      }
      
    }
  },
  computed:{
    isActive:{
      get(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      set(){
      }
    }
  }
}
</script>

<style>
  @import '../../../assets/css/base.css';
.mtabbar img{
   width: 24px;
   height: 24px;
}
.mtabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
   margin-top: 3px;
   vertical-align: middle;
}
.active{
  color: red;
}
</style>