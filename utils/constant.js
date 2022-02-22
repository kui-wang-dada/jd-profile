const tabList = [
  {
    name: 'rank',

    tab: {
      title: '厚仁教育',
      label: '前端负责人，app项目负责人，小程序集群负责人',
    },
    banner: {
      title: '厚仁教育',
      label: '前端负责人，app项目负责人，小程序集群负责人',
      link: 'https://school.wholeren.cn/',
    },
    intro: {
      title: '美国校园排名网简介',
      con: `查看2022USNEWS 最新美国大学排名，Top300美国大学介绍，以及美国大学申请/转学数据`,
    },
  },
];
const projectList = [
  {
    name: '体育类App',
    stack: ['react-native'],
    type: ['app'],
    label: '利用RN独立开发体育类App，并上线ios和安卓平台',
  },
  {
    name: 'RN厚仁教育app',
    stack: ['react-native'],
    type: ['app'],
    label: '利用RN独立开发厚仁教育商用APP,用于企业用户的信息对接，课程管理。上线ios和安卓平台',
  },
  {
    name: 'RN开发圈乎App',
    stack: ['react-native'],
    type: ['app'],
    label: '主要负责首页，文章详情页页面逻辑',
  },
  {
    name: 'RN开发悠然一指App',
    stack: ['react-native'],
    type: ['app'],
    label: '主要负责首页，评论点赞等功能模块',
  },
  {
    name: '厚仁服务小程序',
    stack: ['taro'],
    type: ['小程序'],
    label: '针对所有C端用户开发的公司业务介绍小程序，同时发布微信和头条',
  },
  {
    name: '厚仁留学微信小程序',
    stack: ['taro'],
    type: ['小程序'],
    label: '针对所有C端用户，提供美国大学疫情数据',
  },
  {
    name: '厚仁学生中心微信小程序',
    stack: ['taro'],
    type: ['小程序'],
    label: '针对所有付费用户，提供日常管理，服务跟踪，申请反馈等功能',
  },
  {
    name: '厚仁导师中心微信小程序',
    stack: ['taro'],
    type: ['小程序'],
    label: '针对公司服务导师，提供学生管理，服务跟踪等功能',
  },
  {
    name: '留美导师专栏',
    stack: ['taro'],
    type: ['小程序'],
    label: '针对C端用户，提供留学资讯',
  },
  {
    name: 'fits-erp企业后台管理平台',
    stack: ['react', 'golang'],
    type: ['网站'],
    label: '针对公司业务，定制企业后台管理平台',
  },
  {
    name: '美国校园疫情网',
    stack: ['vue', 'nuxt'],
    type: ['网站'],
    label: '利用RN独立开发厚仁教育商用APP,用于企业用户的信息对接，课程管理。',
  },
  {
    name: '美国高校排名网',
    stack: ['vue', 'nuxt'],
    type: ['网站'],
    label: '利用RN独立开发厚仁教育商用APP,用于企业用户的信息对接，课程管理。',
  },
  {
    name: '订单支付',
    stack: ['vue', 'nuxt'],
    type: ['网站'],
    label: '利用RN独立开发厚仁教育商用APP,用于企业用户的信息对接，课程管理。',
  },
  {
    name: 'Nw实现桌面程序',
    stack: ['vue', 'nuxt'],
    type: ['电脑桌面程序'],
    label: '利用RN独立开发厚仁教育商用APP,用于企业用户的信息对接，课程管理。',
  },
  {
    name: 'Egret白鹭引擎练手小鸟飞飞',
    stack: ['Egret'],
    type: ['小游戏'],
    label: '利用RN独立开发厚仁教育商用APP,用于企业用户的信息对接，课程管理。',
  },
  {
    name: 'Node实现微信公众号后台',
    stack: ['node'],
    type: ['后端'],
    label: '利用RN独立开发厚仁教育商用APP,用于企业用户的信息对接，课程管理。',
  },
  {
    name: '微信企业办公小程序',
    stack: ['uniapp', 'java'],
    type: ['后端', '小程序'],
    label: '利用RN独立开发厚仁教育商用APP,用于企业用户的信息对接，课程管理。',
  },
];
const regex = {
  tel: /^1[3-9]\d{9}$/, // 手机号
  china: /^(\+?0?86-?)?1[345789]\d{9}$/, // 中国手机号
  americal: /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/, // 美国手机号
  email: /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/i, // 邮箱
};

export { tabList, regex, projectList };
