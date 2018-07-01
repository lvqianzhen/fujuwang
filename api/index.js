const express = require('express')
const proxy = require('http-proxy-middleware')

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')

// Import API Routes
app.use(users)

//代理跨域开始
app.use('/fjw', proxy({
    target: 'http://www.fooju.cn/',
    pathRewrite:{
    "^/api/fjw":"/fjw"
    },
    changeOrigin: true
}));
// app.listen(3000);

//代理跨域结束

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}


