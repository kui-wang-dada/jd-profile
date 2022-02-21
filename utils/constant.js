const tabList = [
  {
    name: 'rank',

    tab: {
      icon: require('@img/home/icon-tab2.png'),
      logo: require('@img/home/product/2.png'),
      con: require('@img/home/product/2.png'),
      title: '厚仁教育',
      label: '前端负责人，app项目负责人，小程序集群负责人',
    },
    banner: {
      title: '厚仁教育',
      label: '前端负责人，app项目负责人，小程序集群负责人',
      con: require('@img/home/product/1.png'),
      link: 'https://school.wholeren.cn/',
    },
    intro: {
      imgCon: require('@img/product/rank/intro.png'),
      imgTip: require('@img/product/rank/intro-tip.png'),
      title: '美国校园排名网简介',
      con: `查看2022USNEWS 最新美国大学排名，Top300美国大学介绍，以及美国大学申请/转学数据`,
    },
  },
  {
    name: 'covid',

    tab: {
      icon: require('@img/home/icon-tab1.png'),
      logo: require('@img/home/product/1.png'),
      con: require('@img/home/product/1.png'),
      title: '校园资讯网',
      label: '美国学校周边信息大全，申请攻略，转学攻略，申诉指南，留美学业好帮手',
    },
    banner: {
      title: '美国校园资讯网',
      label: '美国学校周边信息大全，申请攻略，转学攻略，申诉指南，留美学业好帮手',
      con: require('@img/home/product/1.png'),
      link: 'https://c.wholeren.com/',
    },
    intro: {
      imgCon: require('@img/product/covid/intro.png'),
      imgTip: require('@img/product/covid/intro-tip.png'),
      title: '美国校园资讯网简介',
      con: `新冠肺炎（Coronavirus/COVID-19）在全世界蔓延，美国各州也陆续出现确诊案例，为了让留学生和家长对全美校园疫情有更全面及时的了解，我们为大家整理出以下信息，每小时更新。全美疫情实时动态，美国校园疫情实况视频，校园疫情播报，学校防疫措施，辟谣与防护，防疫问答，复工复课信息。`,
    },
  },

  {
    name: 'jobupper',

    tab: {
      icon: require('@img/home/icon-tab3.png'),
      logo: require('@img/home/product/3.png'),
      con: require('@img/home/product/3.png'),
      title: '职尚行',
      label:
        'Jobupper职尚行依托来自中美顶尖咨询公司、华尔街投资银行、金融服务公司、人工智能公司、尖端科技企业和世界500强企业等各行业的实习和培训生项目资源，致力于帮助在美留学生拓展职场实习经历，在进行课外实习活动的同时，收获宝贵推荐信，丰富申请个人陈述/文书，职场简历，最终帮助学生实现学业和职场并行发展。',
    },
    banner: {
      title: 'Jobupper职尚行',
      label:
        'Jobupper职尚行依托来自中美顶尖咨询公司、华尔街投资银行、金融服务公司、人工智能公司、尖端科技企业和世界500强企业等各行业的实习和培训生项目资源，致力于帮助在美留学生拓展职场实习经历，在进行课外实习活动的同时，收获宝贵推荐信，丰富申请个人陈述/文书，职场简历，最终帮助学生实现学业和职场并行发展。',
      con: require('@img/home/product/1.png'),
      link: 'https://www.jobupper.com/',
    },
    intro: {
      imgCon: require('@img/product/jobupper/intro.png'),
      imgTip: require('@img/product/jobupper/intro-tip.png'),
      title: 'Jobupper职尚行简介',
      con: `Jobupper职尚行依托来自中美顶尖咨询公司、华尔街投资银行、金融服务公司、人工智能公司、尖端科技企业和世界500强企业等各行业的实习和培训生项目资源，致力于帮助在美留学生拓展职场实习经历，在进行课外实习活动的同时，收获宝贵推荐信，丰富申请个人陈述/文书，职场简历，最终帮助学生实现学业和职场并行发展。`,
    },
  },
  {
    name: 'transfer',

    tab: {
      icon: require('@img/home/icon-tab4.png'),
      logo: require('@img/home/product/4.png'),
      con: require('@img/home/product/4.png'),
      title: '转学录取中心',
      label:
        '基于美国，多年转学服务和申请经验。2000+成功转学案例，转入TOP名校就是如此简单。专业申请团队为您保驾护航。24*7中美两地无间断服务。',
    },
    banner: {
      title: '美国转学录取中心',
      label:
        '基于美国，多年转学服务和申请经验。2000+成功转学案例，转入TOP名校就是如此简单。专业申请团队为您保驾护航。24*7中美两地无间断服务。',
      con: require('@img/home/product/1.png'),
      link: 'https://www.transferadm.com/',
    },
    intro: {
      imgCon: require('@img/product/transfer/intro.png'),
      imgTip: require('@img/product/transfer/intro-tip.png'),
      title: '美国转学录取中心简介',
      con: `基于美国，多年转学服务和申请经验。2000+成功转学案例，转入TOP名校就是如此简单。专业申请团队为您保驾护航。24*7中美两地无间断服务。`,
    },
  },
];
const regex = {
  tel: /^1[3-9]\d{9}$/, // 手机号
  china: /^(\+?0?86-?)?1[345789]\d{9}$/, // 中国手机号
  americal: /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/, // 美国手机号
  email: /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/i, // 邮箱
};

export { tabList, regex };
