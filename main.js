import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

import db from './src/database'
import todos from './routers/todo'

let app = express()
app.disable('x-powered-by')
app.set('port', process.env.PORT || 3030)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', todos)

db.select('*').from('todos').asCallback(function (err, values) {
  if (err) {
    console.log(err)
  } else {
    console.log(values)
  }
})

app.listen(app.get('port'), function () {
  console.log('Press Ctrl+C to terminate...')
})
