<template>
  <div>
    <input
      type="text"
      :value="v"
      @input="changeValue($event)"
      placeholder="请输入用户名"
      class="username"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      v: this.value
    };
  },
  props: {
    value: {
      type: String,
      default: "xxxx"
    }
  },
  methods: {
    changeValue(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.username {
  width: 400px;
  height: 80px;
}
</style>
