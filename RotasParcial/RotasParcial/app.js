const http = require('http')
const server = require('./config/server.js')

http.createServer(server).listen(server.get('porta'), function() {
    consoles.log('Servidor rodando na porta ' + server.get('porta'))
})



  