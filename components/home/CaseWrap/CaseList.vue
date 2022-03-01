<template>
  <div class="case-list-wrap">
    <a-list :grid="{ gutter: 24, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }" :data-source="list">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-card hoverable class="card" @click="clickItem(item)">
          <div class="card-wrap">
            <img slot="cover" class="card-thumb" alt="example" :src="item.thumb" />
            <div class="card-con">
              <h3>{{ item.name }}</h3>
              <p>{{ item.label }}</p>
              <div class="type-wrap">
                <span>项目分类：</span>
                <a-tag v-for="tag in item.type" :key="tag" color="red">{{ tag }}</a-tag>
              </div>
              <div class="stack-wrap">
                <span>技术栈分类：</span>
                <a-tag v-for="tag in item.stack" :key="tag" color="green">{{ tag }}</a-tag>
              </div>
            </div>
          </div>
        </a-card>
      </a-list-item>
    </a-list>
    <a-modal v-model="visible" width="70%" :title="activeItem.name" ok-text="确认" cancel-text="取消" @ok="hideModal">
      <div>
        <a-descriptions title="项目介绍">
          <a-descriptions-item label="开发周期"> Zhou Maomao </a-descriptions-item>
          <a-descriptions-item label="我负责"> 1810000000 </a-descriptions-item>
          <a-descriptions-item label="线上链接"> Hangzhou, Zhejiang </a-descriptions-item>
          <a-descriptions-item label="相关难点"> empty </a-descriptions-item>
        </a-descriptions>
      </div>
      <div class="thumb-example">
        <h3>项目截图</h3>
        <client-only>
          <!-- swiper1 -->
          <swiper ref="swiperTop" class="swiper gallery-top" :options="swiperOptionTop">
            <swiper-slide
              v-for="(img, index) in activeItem.img"
              :key="index"
              :style="{ backgroundImage: `url(${img})` }"
            >
            </swiper-slide>

            <div slot="button-next" class="swiper-button-next swiper-button-white"></div>
            <div slot="button-prev" class="swiper-button-prev swiper-button-white"></div>
          </swiper>
          <!-- swiper2 Thumbs -->
          <swiper ref="swiperThumbs" class="swiper gallery-thumbs" :options="swiperOptionThumbs">
            <swiper-slide
              v-for="(img, index) in activeItem.img"
              :key="index"
              :style="{ backgroundImage: `url(${img})` }"
            >
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
    </a-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {},
  props: {
    filter: {
      type: Object,
      default: () => ({ stackCheck: [], typeCheck: [] }),
    },
  },
  data() {
    return {
      visible: false,
      activeItem: {},
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  computed: {
    ...mapState('common', ['projectList']),
    list() {
      if (!this.filter.stackCheck.length && !this.filter.typeCheck.length) {
        return this.projectList;
      }

      let list = [];
      const stackArr = this.projectList.filter(item => {
        return this.filter.stackCheck.some(item_ => {
          return item.stack.includes(item_);
        });
      });
      const typeArr = this.projectList.filter(item => {
        return (
          this.filter.typeCheck.some(item_ => {
            return item.type.includes(item_);
          }) &&
          !this.filter.stackCheck.some(item__ => {
            return item.stack.includes(item__);
          })
        );
      });
      list = [...stackArr, ...typeArr];

      return list;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    hideModal() {
      this.visible = false;
    },
    clickItem(item) {
      this.activeItem = item;
      this.visible = true;
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper;
        const swiperThumbs = this.$refs.swiperThumbs.$swiper;
        swiperTop.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperTop;
      });
    },
  },
};
</script>

<style scoped lang="less">
.case-list-wrap {
  .card {
    /deep/ .ant-card-body {
      padding: 0;
    }
    .card-wrap {
      .flex-row;
      .card-thumb {
        width: 200px;
        height: 200px;
        object-fit: contain;
      }
      .card-con {
        .type-wrap {
          margin-top: 10px;
        }
        .stack-wrap {
          margin-top: 10px;
        }
      }
    }
  }
}
.thumb-example {
  height: 780px;
  background-color: #000;
}

.swiper {
  .swiper-slide {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    &.slide-1 {
      background-image: url('@/assets/img/project/app/quanhu/3.png');
    }
    &.slide-2 {
      background-image: url('~@/assets/img/project/app/quanhu/3.png');
    }
    &.slide-3 {
      background-image: url('~@/assets/img/project/app/quanhu/3.png');
    }
    &.slide-4 {
      background-image: url('~@/assets/img/project/app/quanhu/3.png');
    }
    &.slide-5 {
      background-image: url('~@/assets/img/project/app/quanhu/3.png');
    }
  }

  &.gallery-top {
    height: 80%;
    width: 100%;
  }
  &.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }
  &.gallery-thumbs .swiper-slide {
    width: 20%;
    height: 100%;
    opacity: 0.4;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>
