/** @format */
import { typeList, teamList, newsType, serviceList } from '@/assets/mock/common';
import { tabList, projectList } from '@/utils';
export default {
  state: () => ({
    tabList,
    projectList,
    typeList,
    teamList,
    newsType,
    serviceList,
  }),
  mutations: {
    // 设置用户信息
    SET_TAB_LIST: (state, data) => {
      state.tabList = data;
    },
    SET_PROJECT_LIST: (state, data) => {
      state.projectList = data;
    },
    SET_TYPE_LIST: (state, data) => {
      state.typeList = data;
    },
    SET_TEAM_LIST: (state, data) => {
      state.teamList = data;
    },
    SET_NEWS_TYPE: (state, data) => {
      state.newsType = data;
    },
    SET_SERVICE_LIST: (state, data) => {
      state.serviceList = data;
    },
  },
  actions: {},
};
