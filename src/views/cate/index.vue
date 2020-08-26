<template>
  <div>
    <button @click="getData">分类中混入测试---{{ msg }}</button>
    <Tree-menu :label="treeData.label" :nodes="treeData.children" :depth="0"></Tree-menu>
  </div>
</template>

<script>
import TreeMenu from '@/components/tree'
import treeData from '@/components/data'
import GetUserDataMixIn from '@/mixins/getData'

console.log('tree:',treeData.root)
export default {
  name: "cate",
  mixins:[GetUserDataMixIn],
  data() {
    return {
      treeData:treeData.root
    };
  },
  components:{TreeMenu},
  methods: {}
};
</script>

<style lang="scss" scoped>
.list > li {
  border-bottom: 1px solid #ccc;
  width: 100vw;
  padding: 30px 0;
}

.selected {
  background: #f00;
}

.sortable-ghost {
  background: #0f0;
}
</style>
