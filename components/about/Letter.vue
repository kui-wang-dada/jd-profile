<template>
  <div class="offer-wrap">
    <div class="top-wrap">
      <h3>用户感言</h3>
      <h5>美国名校梦，我们帮你一起实现！</h5>
      <img class="icon-list" src="@img/home/icon-list.png" alt="" />
    </div>
    <div class="con-main-wrap">
      <swiper :options="swiperOption" :class="['swiper']">
        <swiper-slide v-for="(item, index) in list" :key="index">
          <img src="@img/about/letter.jpeg" />
        </swiper-slide>

        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11],
      swiperOption: {
        slidesPerView: 5,
        slidesPerColumn: 2,

        // centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        speed: 500,
        // loop: true,
        autoplay: { delay: 3000 }
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.offer-wrap {
  padding: 60px 0 90px;
  background: #f3f8fd;
  .con-main-wrap {
    margin-top: 40px;
    width: 1200px;
    .swiper {
      width: 100%;
      height: 680px;
      margin-left: auto;
      margin-right: auto;

      .swiper-slide {
        width: 240px;
        height: 300px;
        img {
          width: 240px;
          height: 330px;
        }
      }
    }
  }
}
</style>
