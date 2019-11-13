module.exports = {
  async call(req, res) {
  this.getSalesOverview(req, res)
  },
  async getSalesOverview(req, res){
    //basic code goes here
    try{
      let dataResponse = {'name': 'sudhir'}
      let newResp	= $sampleResponse
      newResp.error = false
      newResp.results = dataResponse
      newResp.info = 'success'
      newResp.code = 200
      return $g.common.validResponce(res, newResp)
    } catch(e){
      return $g.common.failureResponse(res)
    }
  }
}
