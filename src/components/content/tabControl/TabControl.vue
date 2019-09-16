<template>
  <div class="tabcontrol">
    <div class="tabcontrolitem" 
    v-for="(item,index) in titles" 
    :key="index"
    :class="{'active':currenntindex===index}"
    @click="itemclick(index)"
    >
    <span>{{item}}</span>
    </div>
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
  },
  data() {
    return {
      currenntindex:0
    }
  },
  methods:{
    itemclick(index){
      this.currenntindex=index,
      this.$emit('tabClick',index)
     
    }
  }
}
</script>

<style>
.tabcontrol{
  display: flex;
  background-color: #fff;
}
.tabcontrolitem{
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.active{
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);

}
</style>