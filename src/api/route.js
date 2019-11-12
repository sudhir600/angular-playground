const express = require('express')
const app = express()

app.get('/test', function (req, res) {
	res.send({'error': false, 'info': 'Congrats! Your API is working'})
})

app.post('/json', function (req, res) {
	//json.create(req, res)
  console.log('in post')
})

app.get('*', function (req, res) {
	res.redirect('/api/test') //unmatched route will redirect to home  page.
})
module.exports = app
