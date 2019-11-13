const sqlConErrorResp = 'Mysql failed To connect'
const sqlGenericErrorResp = 'something went wrong.  Rethrow non-MySQL errors'
const $db =  require('../config/db.js')

module.exports = {
  query(sql, res, noStrip = false){
    return new Promise((resolve, reject) => {
      $db.getConnection((conErr, connection) => {
        this.manageSqlFailure(res, conErr)
        connection.query(sql, (err, results) => {
          this.manageSqlFailure(res, null, err)
          connection.release()
          results = (results.length == 1 && !noStrip) ? results[0]: results
          console.log(results)
          resolve(results)
        })
      })
    })
  },
  insert(sql, res){
    return new Promise((resolve, reject) => {
      if(!sql){ 
        resolve('false')
        return
      }
      $db.getConnection((conErr, connection) => {
        manageSqlFailure(res, conErr)
        connection.query(sql, (sqlError, results) => {
          manageSqlFailure(res, null, conErr)
          connection.release()
          resolve(results)
        })
      })
    })
	},
  manageSqlFailure(res, connectionErr, sqlErr){
    return new Promise((resolve, reject) => {
      if(!res){
        console.log('in reject')
        reject(connectionErr ? connectionErr : sqlErr)
      }
        if(connectionErr){ 
          console.log('in conn ERR')
          $g.failureResponse(res, sqlConErrorResp)
          return
        }
        if(sqlErr){
          console.log('in sql ERR')
          $g.failureResponse(res, sqlGenericErrorResp)
          return
        }
    })
  }
}
