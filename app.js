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

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})
// 設置靜態檔案路徑
app.use(express.static('public'))

app.listen(port, () => console.log(`Express is running on http://localhost:${port}`))
