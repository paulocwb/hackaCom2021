module.exports = {
  apps: [
    {
      name: "linkedu",
      script: " lib/server.js",
      exec_mode: "cluster",
      instances: 0,
      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      watch: false,
      watch_delay: 30,
      ignore_watch:["node_modules",
        "*.log",
        "*.logs",
        ".git/"],
      watch_options:{
        "followSymlinks": false
      },
    }
  ],

  deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "yarn build and pm2 start ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};