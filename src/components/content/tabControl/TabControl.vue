<template>
  <div class="tabcontrol">
    <div class="tabcontrolitem" v-for="(item,index) in titles" :key="index"><span>{{item}}</span></div>
    
  </div>
</template>

<script>
export default {
  name:"TabconControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.tabcontrol{
  display: flex;
}
.tabcontrolitem{
  flex: 1;
  text-align: center;
}
</style>