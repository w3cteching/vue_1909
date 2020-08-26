<template>
  <div>
    <h2>分类页面</h2>
    <ul class="list" ref="list">
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
/**
 * sortablejs多重拖拽总结：
 * 第一步：先安装
 *   npm install sortablejs -S;
 * 第二步：在要使用的组件中添加,下在两行代码
 *  import { Sortable, MultiDrag } from 'sortablejs';
 *  Sortable.mount(new MultiDrag()); //关键
 * 第三步：给要拖拽的ul或div（父级）注意是父级元素添加ref,例如：<ul ref="list">
 * 第四步：在mounted生命周期中配置拖拽选项即可
 * 
 * mounted() {
    let el = this.$refs.list;
    Sortable.create(el, {
      multiDrag: true, //开启多重拖拽，关键
      selectedClass: "selected", //设置拖拽的样式类
      animation: 150,
    });
  }
 * 
 */
import { Sortable, MultiDrag } from 'sortablejs';
Sortable.mount(new MultiDrag());
export default {
  name: "cate",
  data() {
    return {
      list: ["项目1", "项目2", "项目3", "项目4", "项目5"]
    };
  },
  mounted() {
    this.drag()
  },
  methods: {
    drag() {
      let el = this.$refs.list;
    Sortable.create(el, {
    //  multiDrag: true,
      selectedClass: "selected",
      animation: 150,
     ghostClass: "sortable-ghost",
     // chosenClass: "sortable-chosen",
     // dragClass: "sortable-drag",
    });
    }
  }
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
