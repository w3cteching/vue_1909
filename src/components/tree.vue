<template>
  <div>
    <div :style="indent" @click="toggleShow">
      <span> {{ isShow ? '-':'+'  }} </span> {{ label }} 
    </div>
    <template v-if="isShow">
        <tree-menu
            v-for="(item,index) in  nodes" 
            :key="index"
            :label="item.label"
            :nodes="item.children"
            :depth="depth+1"
        >
     </tree-menu>
    </template>
  </div>
</template>

<script>
export default {
  name: "TreeMenu", //递归组件标签名必须用name去指定
  data() {
    return {
        isShow:true
    }
  },
  props: {
    depth:{
        type:Number
    },
    label: {
      type: String,
      default: "默认值"
    },
    nodes: {
      type: Array
    }
  },
  computed:{
      indent() {
         return {transform:`translateX(${this.depth*30}px)`} 
      }
  },
  methods:{
      toggleShow() {
          this.isShow=!this.isShow
      }
  }
};
</script>

<style lang="scss" scoped></style>
