//const pJson = require('./package.json');
const express = require('express')
const bodyParser = require('body-parser')
const route = require('./route.js')
const port = process.env.PORT || 3200
const host = process.env.HOST || '127.0.0.1'
const app = express()
app.set('port', port)

app.use(express.static('dist'))
app.use(bodyParser.json())
app.use('/api', route) // all router after api will treat as endpoint

app.listen(port, host, () => console.log(`Server listening on http://${host}:${port}`))
