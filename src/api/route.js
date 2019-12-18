global.$root	=	__dirname // api root
require('./config/global.js')
const express = require('express')
const app = express()
const $db =  require('./config/db.js')

app.get('/test', function (req, res) {
  $db.getConnection(function(err, connection) {
    if(err) {
      console.log('error me', err)
      return
    }
    const sql = 'select * from users'
    connection.query(sql, (error, results) => {
      connection.release()
      if(error){
        console.log('errro found while sql run', error)
      }
      res.send({'error': false, 'info': 'Congrats! Your API is working', 'data': results})
    })
  })
})

app.get('/sales', function (req, res) {
  $g.common.init(req, res)
})

app.post('/json', function (req, res) {
  console.log('in post')
})

app.get('*', function (req, res) {
  res.redirect('/api/test') //unmatched route will redirect to home  page.
})
module.exports = app
