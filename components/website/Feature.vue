<template>
  <div class="wrap">
    <div class="top-wrap">
      <h3>{{ conObj.title }}</h3>
      <h5>
        {{ conObj.label }}
      </h5>
      <img class="icon-list" src="@img/home/icon-list.png" alt="" />
    </div>
    <div class="con-main-wrap">
      <!-- <img :src="conObj.con" alt="" /> -->
      <!-- <swiper :options="swiperOption" :class="['swiper']">
        <swiper-slide v-for="swiperItem in swiperList" :key="swiperItem" @click="handlePreview">
          <img :src="conObj.con" alt="" />
        </swiper-slide>
      </swiper> -->
      <swiper ref="swiperTop" class="swiper gallery-top" :options="swiperOptionTop">
        <swiper-slide v-for="swiperItem in swiperList" :key="swiperItem">
          <img class="img-bg" :src="conObj.con" alt="" />
        </swiper-slide>
        <div slot="button-next" class="swiper-button-next swiper-button-white"></div>
        <div slot="button-prev" class="swiper-button-prev swiper-button-white"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper ref="swiperThumbs" class="swiper gallery-thumbs" :options="swiperOptionThumbs">
        <swiper-slide v-for="swiperItem in swiperList" :key="swiperItem">
          <img class="img-bg" :src="conObj.con" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    conObj: {
      default: () => ({}),
      type: Object
    }
  },
  data() {
    return {
      swiperList: [1, 2, 3, 4, 5],
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    handlePreview() {}
  }
};
</script>

<style scoped lang="less">
.wrap {
  padding: 60px 0 90px;
  background: #f3f8fd;
  .con-main-wrap {
    margin-top: 50px;
    width: 1000px;
    height: 480px;
    background-color: #000;

    .swiper {
      .swiper-slide {
        background-size: cover;
        background-position: center;
        .img-bg {
          width: 100%;
          height: 100%;
        }
      }

      &.gallery-top {
        height: 80%;
        width: 100%;
      }
      &.gallery-thumbs {
        height: 20%;
        box-sizing: border-box;
        padding: 20px 0;
      }
      &.gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
      }
      &.gallery-thumbs .swiper-slide-active {
        opacity: 1;
      }
    }
  }
}
</style>
