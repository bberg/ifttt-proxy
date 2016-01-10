var path = require('path');
var log = require(path.join(__dirname, 'log'));

log.debug(process.env)
if(process.env['HOME']=='/home/benashbe'){
    var port = 19537
    var env = 'prod'
    var secrets = require('/home/benashbe/secrets.js')
    log.error('RUNNING ON SERVER... PORT: '+port.toString())
}
if(process.env['HOME']=='/Users/benberg'){
    var port = 3000
    var env = 'dev'
    var secrets = require(path.join(__dirname,'secrets'))
    log.error('RUNNING ON DEV... PORT: '+port.toString())
}


wmata_api_key = secrets.wmata_api_key

module.exports = {"wmata_api_key":wmata_api_key, "port":port, "env":env}
// module.exports = port