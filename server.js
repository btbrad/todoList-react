const express = require('express')

const app = express()

// 指定html
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + req.path)
})

// Mock数据
const mock = require('./mock/mock.js')
const setOnline = mock.setOnline

setOnline.forEach((item) => {
  app[item.type](item.url, mock[item.name])
})

// 监听端口
app.listen('4000', () => {
  console.log(`server listening at localhost:4000`)
})
