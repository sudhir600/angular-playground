const mysql = require('mysql')
const credentials = {
  host:'localhost',
  user:'root',
  password:'',
  database:'test',
  connectionLimit: 400,
  insecureAuth: true,
  debug: false
}

module.exports = mysql.createPool(credentials)

  
/*
const connection = mysql.createConnection(credentials);
connection.connect(function(err) {
  if (err) {
    console.log('\x1b[41m', '\n\n\Mysql connection failed >>>> ', err.toString().substring(0,100))
    return false
  }
    console.log('\x1b[1m', '\x1b[7m', 'DB Connected ! ', '\x1b[0m');
});
module.exports = connection
*/

/*
createPool vs createConnection - http://bit.ly/32DRnj3
createPool either create new connection on demand or use provisioly created from pool.
createConnection start one connection and keep open all the time for all request but
NPM console color -  http://bit.ly/2KfunAp
*/

