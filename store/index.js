/** @format */

import createLogger from 'vuex/dist/logger';
import { tabList, projectList, tabListEn, projectListEn } from '@/utils';
const debug = process.env.NODE_ENV !== 'production';
export default {
  state: () => ({
    lang: 'zh',
    tabList,
    projectList,
  }),
  mutations: {
    // 此处为设置locale
    SET_LANG(state, lang) {
      const stragetyTab = {
        zh: tabList,
        en: tabListEn,
      };
      const stragetyProject = {
        zh: projectList,
        en: projectListEn,
      };
      state.tabList = stragetyTab[lang] || tabList;
      state.projectList = stragetyProject[lang] || tabList;
      state.lang = lang;
    },
    // 设置用户信息
    SET_TAB_LIST: (state, data) => {
      state.tabList = data;
    },
    SET_PROJECT_LIST: (state, data) => {
      state.projectList = data;
    },
  },
  getters: {
    token: state => state.user.token,
  },

  actions: {
    nuxtServerInit({ commit, dispatch }, { req, store, app }) {
      // console.log(req, 'qqq')
      // const { cookie } = req.headers
      // let cookieArr = []
      // if (cookie) {
      //   cookieArr = cookie.split(';')
      // }
      // const tk = 'maccms='
      // // 需要持久化的值
      // let token = ''
      // // 遍历Cookie，取得需要的值
      // cookieArr.forEach((e) => {
      //   if (e.includes(tk)) {
      //     token = e.split(tk)[1]
      //   }
      // })
      // if (token) {
      //   // 加载数据到状态树
      //   commit('user/SET_TOKEN', token)
      //   dispatch('user/GetUserInfo')
      // }
    },
  },

  plugins: debug ? [createLogger()] : [createLogger()],
};
