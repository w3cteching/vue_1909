<template>
  <div class="home">
    <ul class="list">
      <li v-for="item in list" :key="item.id">
        <p>{{ item.title }}</p>
        <p>{{ item.start_play_date | dateTime}}~~{{ item.end_play_date |dateTime }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { lessonList } from "../http/api";
export default {
  name: "Home",
  data() {
    return {
      tel: "",
      page: 1,
      limit: 10,
      list: []
    };
  },
  created() {
    this.getKeCheng();
  },
  methods: {
    //获取课程列表
    getKeCheng() {
      lessonList({
        page: this.page,
        limit: this.limit
      }).then(res => {
        //console.log("课程列表", res);
        let {
          code,
          data: { list }
        } = res.data;
        if (code === 200) {
          console.log("list:", list);
          this.list = list;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.list {
  li {
    padding: 20px 10px;
  }
}
</style>
