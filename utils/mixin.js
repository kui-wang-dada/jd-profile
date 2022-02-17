/** @format */

/** @format */

export const backInitMixin = {
  components: {},

  props: {},

  computed: {},

  data() {
    return { canBack: true };
  },

  created() {},

  mounted() {},

  activated() {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (from.matched.length) {
        vm.canBack = true;
      } else {
        vm.canBack = false;
      }

      console.log('fromvm stae', to, from, vm);
    });
  },

  methods: {
    onClickLeft() {
      // console.log(this, 'fromvm');
      if (this.canBack) {
        this.$router.back();
      } else {
        console.log(this, 'fromttvm');
        this.$router.push('/');
      }
    }
  }
};

export const scrollListener = {
  components: {},

  props: {},

  computed: {},

  data() {
    return { scrollTop: 0 };
  },

  created() {},

  mounted() {},

  activated() {
    // this.$nextTick(() => {
    document.body.scrollTop = this.scrollTop;
    document.documentElement.scrollTop = this.scrollTop;
    // });
    console.log(this.scrollTop, 'scrollTopactivated');
  },
  deactivated() {
    this.scrollTop = document.documentElement.scrollTop;
    console.log(this.scrollTop, 'scrollTop');
  },

  methods: {}
};
