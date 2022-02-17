<template>
  <div>
    <TopBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { TopBar, Footer } from '@/components/common';
export default {
  components: {
    TopBar,
    Footer,
  },
  data() {
    return {
      loadingShow: true,
    };
  },
  mounted() {
    const vuex = JSON.parse(localStorage.getItem('vuex'));
    console.log(vuex, 'vuex');
    if (vuex && vuex.lang) {
      this.setLang(vuex.lang);
      this.$i18n.locale = vuex.lang;
    }
    if (vuex && vuex.token) {
      this.setToken(vuex.token);
    }
  },
  methods: {
    ...mapMutations({
      setLang: 'SET_LANG',
    }),
  },
};
</script>

<style>
html,
body {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
