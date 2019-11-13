const fs = require('fs')
const pathExists = require('path-exists')

module.exports = {
  async init(req, res){
    const endPoint = req.url.replace(/(^\/|\/$|(\?).*)|(\/\?).*/g, '')
    const url = req.route.path.replace(/(^\/|\/$)|(:|\/:|\?).*|(\/\?).*/g, '').split('/') //remove 1st,last slash, queryParam
    const targetFile =  url.length > 1 ? url.pop() : 'index'
    const targetFolder =url.join('/')
    const module = `${$root}/modules/${targetFolder}/${targetFile}.js`
    console.log('Target Module = ', module)
    const isFileExits  = pathExists.sync(module)
    if(isFileExits){
    	const targetModule = require(module)    //E.g modules/user.js
    	targetModule.call(req, res, targetFile) // call function must exits in each module
    }else{
    	return $g.common.failureResponse(res)
    }
  },
  failureResponse(res, msg ='', code = 400){
  	return res.status(code).json({'error':true, 'msg': (msg !== '') ? msg : 'Something went wrong while calling API'})
  },
  emptySuccessResponse(res, msg =''){
  	return res.status(200).json({'error':false, results: null, 'msg': (msg !== '') ? msg : 'No Data Found'})
  },
  dbFailureResponse(res){
    return this.failureResponse(res, 'server was able to make a connection', 503)
  },
  validResponce(res, responseArr, statusCode){
    const response = {
      'code': '200',
      'error': '',
      'results': '',
      'info': '',
      'token': ''
    }
    let errorInfo = 'something went wrong while fetching data from DB'
    let successInfo   = 'data fetched successfully from permission table'
    if(responseArr && responseArr.info !== undefined && responseArr.info !== ''){
      successInfo = responseArr.info
      errorInfo = responseArr.info
    }
    if(responseArr.code && responseArr.code !== ''){
      statusCode = responseArr.code
    }
    if (responseArr.error !== false && responseArr.error != null) {
      statusCode = (!statusCode || statusCode === '') ? 400: statusCode
      response.code = statusCode
      response.error = true
      response.results = null
      response.info = errorInfo
      return res.status(statusCode).send(response)
    }
    response.code = 200
    response.error = false
    response.results = responseArr.results != null ? responseArr.results : responseArr
    response.token = (responseArr.token !== '') ? responseArr.token : ''
    response.info = successInfo
    return res.status(200).send(response)
  }
}
    
