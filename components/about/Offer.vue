<template>
  <div class="offer-wrap">
    <div class="top-wrap">
      <h3>名校录取信</h3>
      <h5>美国名校梦，我们帮你一起实现！</h5>
      <img class="icon-list" src="@img/home/icon-list.png" alt="" />
    </div>
    <div class="con-main-wrap">
      <swiper :options="swiperOption" :class="['swiper']">
        <swiper-slide v-for="(item, index) in list" :key="index">
          <a-card hoverable>
            <img slot="cover" alt="example" src="@img/about/offer.jpg" />
            <a-card-meta title="GPA 3.8 约翰霍普金斯大学">
              <template slot="description"> USENEWS排名 9 </template>
            </a-card-meta>
          </a-card>
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
        spaceBetween: 30,
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
  .con-main-wrap {
    margin-top: 40px;
    width: 1400px;
    .swiper {
      width: 100%;
      height: 800px;
      margin-left: auto;
      margin-right: auto;

      .swiper-slide {
        height: 350px;
      }
    }

    /deep/ .ant-card {
      width: 250px;
      img {
        width: 250px;
        height: 250px;
      }
      margin-right: 40px;
      margin-bottom: 40px;
    }
  }
}
</style>
