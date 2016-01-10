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
        path: path.join(__dirname, './logs/myapp-debug.log')
    },
    {
        level: 'info',
        path: path.join(__dirname, './logs/myapp-info.log')
        // path: './logs/myapp-info.log'
    },
    {
        level: 'error',
        path: path.join(__dirname, './logs/myapp-error.log')
        // path: './logs/myapp-error.log'
    }
  ]
});

module.exports = log