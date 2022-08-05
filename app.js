const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
// 設定express-handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// 設定路由
app.get('/', (req, res) => {
  res.render('index')
})
// 更改為動態路由
app.get('/:content', (req, res) => {
  res.render('index',{content: req.params.content})
})

// 設置靜態檔案路徑
app.use(express.static('public'))

app.listen(port, () => console.log(`Express is running on http://localhost:${port}`))
