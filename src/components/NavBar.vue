<template>
    <div class="qf-navbar">
          <span>Logo</span>
          <span>{{title}}</span>
          <span @click="backFn">返回</span>
    </div>
</template>
<script>
export default {
  methods: {
    backFn() {
      // 通知父
      this.$emit('click-back')
    }
  },
  // props: ['title']
  props: {
    // title: String,
    title: {
      type: String,
      required: true,
    },
  }
}
</script>
<style scoped>
.qf-navbar {
  border: solid 5px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>