const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayouts: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.use(express.static('public'))

app.listen(port, () => console.log(`Express is running on http://local:${port}`))
