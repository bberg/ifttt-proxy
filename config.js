var path = require('path');
var log = require(path.join(__dirname, 'log'));
log.debug(process.env)
if(process.env['HOME']=='/home/benashbe'){
    var port = 19537
    var env = 'prod'
    log.error('RUNNING ON SERVER... PORT: '+port.toString())
}
if(process.env['HOME']=='/Users/benberg'){
    var port = 3000
    var env = 'dev'
    log.error('RUNNING ON DEV... PORT: '+port.toString())
}

var wmata_api_key = '4e7c50268806494dbb109d8ee4495169'

module.exports = {"wmata_api_key":wmata_api_key, "port":port, "env":env}
// module.exports = port