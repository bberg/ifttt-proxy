var bunyan = require('bunyan');
var log = bunyan.createLogger({
  name: 'myapp',
  streams: [
    {
        level: 'info',
        stream: process.stdout
    },
    {
        level: 'debug',
        path: './logs/myapp-debug.log'
    },
    {
        level: 'info',
        path: './logs/myapp-info.log'
    },
    {
        level: 'error',
        path: './logs/myapp-error.log'
    }
  ]
});

module.exports = log