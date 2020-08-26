<template>
  <div>
    <h2>B组件---{{ $attrs.title }}----{{ $attrs.msg }}</h2>
    <button @click='modi'>B-click</button>
  </div>
</template>

<script>
export default {
  name: "bcom",
  inject: ["app"],
  methods: {
    modi() {
      //this.money = 0;
     // this.app.add()
    //this.app.add()
    this.$emit('go',666)
    }
  }
};
</script>

<style lang="scss" scoped></style>
