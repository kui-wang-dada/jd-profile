module.exports = {
  apps: [
    {
      name: 'jd-profile',
      script: './node_modules/nuxt/bin/nuxt.js',

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      args: 'start',
      exec_mode: 'cluster',
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      ignore_watch: ['node_modules'],

      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: '47.105.223.108',
      ref: 'origin/master',
      repo: 'git@github.com:wangkui1991/jd-profile.git',
      path: '/home/nuxt/jd-profile/production',
      'post-deploy': 'yarn && npm run build &&  pm2 reload ecosystem.config.js --env production',
    },
  },
};

// pm2 deploy ecosystem.config.js production
