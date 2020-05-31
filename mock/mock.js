const fs = require('fs')
const setOnline = [
  {
    name: 'todolist',
    type: 'get',
    url: '/todolist',
  },
]

// 输出配置项
exports.setOnline = setOnline

// 遍历输出json数据
for (let i = 0, len = setOnline.length; i < len; i++) {
  let name = setOnline[i].name

  exports[name] = function (req, res) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Credentials', 'true')
    fs.readFile('./mock/' + name + '.json', (err, data) => {
      if (err) throw err
      res.json(JSON.parse(data))
    })
  }
}
