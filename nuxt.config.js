import path from 'path';
import pxtorem from 'postcss-pxtorem';
import autoprefixer from 'autoprefixer';
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: process.env.PORT || 5001, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  head: {
    title: 'JD PROFILE - wang kui的个人简历',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '个人简历,个人网站',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: '/js/rem.js', type: 'text/javascript', charset: 'utf-8' },
      { src: '/js/init.js', type: 'text/javascript', charset: 'utf-8' },
    ],
  },

  loading: { color: '#1064fb' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.css', 'swiper/css/swiper.css', 'assets/css/index.less'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    { src: '@/plugins/i18n.js', ssr: true },
    { src: '@/plugins/vue-persist.js', ssr: false },
    { src: '@/plugins/swiper.js', ssr: false },
    { src: '@/plugins/wow.js', ssr: false },
    '@/plugins/utils',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  styleResources: {
    less: ['@/assets/css/var.less', '@/assets/css/mixin.less'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  router: {
    base: '/',
  },
  render: {
    resourceHints: false,
  },
  generate: {
    dir: 'jd-profile',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.resolve.alias['@'] = path.resolve(__dirname, './');
      config.resolve.alias['@img'] = path.resolve(__dirname, './assets/img');

      if (ctx.isClient && !ctx.isDev) {
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
        config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
        config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
      }
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#2880ff',
            'link-color': '#2880ff',
          },
        },
      },
    },
    postcss: {
      plugins: [
        autoprefixer(),
        pxtorem({
          rootValue: 192,
          propList: ['*'],
          replace: true,
          // 该项仅在使用 Circle 组件时需要
          // 原因参见 https://github.com/youzan/vant/issues/1948
          selectorBlackList: ['ant-tag'],
        }),
      ],
    },
  },
};
