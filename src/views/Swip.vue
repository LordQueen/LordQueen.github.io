<template>
  <div key="">
    <NavBar title="海绵宝宝" @click-back="backFn" />
    <h1>Swiper</h1>

    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
import "swiper/css/swiper.css";

export default {
  name: "carrousel",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);

    // fetch('http://kg.zhaodashen.cn/v2/cate/index.php')
    fetch('/api/v2/cate/index.php')
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })

    // fetch('http://kg.zhaodashen.cn/v2/cate/index.php')
    fetch('/v2/cate/index.php')
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
  },
  created() {},
  methods: {
    backFn() {
      alert("back");
    },
    addFn() {
      this.todos.push({
        id: this.todos.length + 1,
        title: this.title,
      });
    },
  },
};
</script>

<style lang='less' scoped>
.swiper {
  width: 600px;
  height: 300px;
}
</style>
