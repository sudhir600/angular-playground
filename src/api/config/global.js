global.$sampleResponse = {error: true, code: 400, results: [], fields: '', info: 'something went wrong'}
global.$emailFrom = 'donotreply@weclapp.com'
global.$smtp = {
	host: '',
	port: 2525,
	secure: false, // true for 465, false for other ports
	user: '',
	pass: ''
}
// all functions from all files in api/genutils can access through $g.filename.functionName()
const requireDir = require('require-dir')
const each = requireDir(`${$root}/genutils/`)

let p = {}
for(let k in each){
	p[k] = []
	for(const i in each[k]){
		//p[i] = each[k][i]   // remove [k] if all functions from all file need access directly as $g.functionName()
		p[k][i] = each[k][i]  // more convenience and easy to debug
	}
}
global.$g = p
p = null




