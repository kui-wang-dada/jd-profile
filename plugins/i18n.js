import Vue from 'vue'
import VueI18n from 'vue-i18n'

// import enUS from 'vant/es/locale/lang/en-US'
// import zhCN from 'vant/es/locale/lang/zh-CN'

// 加入Vue全局
Vue.use(VueI18n)

export default ({ app, store }) => {
  console.log(store.state, 'tt')
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.lang,

    messages: {
      en: { ...require('@/assets/lang/en.js') },
      zh: { ...require('@/assets/lang/zh.js') },
    },
  })

  // app.i18n.path = (link) => {
  //   if (app.i18n.locale === app.i18n.fallbackLocale) {
  //     return `/${link}`
  //   }
  //   return `/${app.i18n.locale}/${link}`
  // }
}
