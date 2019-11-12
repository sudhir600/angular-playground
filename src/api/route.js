const express = require('express')
const app = express()
const $db =  require('./config/db.js')

app.get('/test', function (req, res) {
			$db.getConnection(function(err, connection) {
        // do whatever you want with your connection here
        if(err) {
          console.log('error me')
        }else{
          console.log('success me')
        }
        connection.release();
    });
	
	res.send({'error': false, 'info': 'Congrats! Your API is working', 'data': ''})
})

app.post('/json', function (req, res) {
	//json.create(req, res)
  console.log('in post')
})

app.get('*', function (req, res) {
	res.redirect('/api/test') //unmatched route will redirect to home  page.
})
module.exports = app
