module.exports = {
  apps: [
    {
      name: 'smartpolice',
      script: 'server.js',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      log_file: './smartpolice.log',
      error_file: './smartpolice-error.log',
      out_file: './smartpolice-out.log',
      time: true
    }
  ]
}