log.error(process.env)
if(process.env['HOME']=='/home/benashbe'){
    var port = 19537
    log.error('RUNNING ON SERVER... PORT: '+port.toString())
}
if(process.env['HOME']=='/Users/benberg'){
    var port = 3000
    log.error('RUNNING ON DEV... PORT: '+port.toString())
}

var wamata_api_key = '4e7c50268806494dbb109d8ee4495169'

module.exports = wamata_api_key
module.exports = port