var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request,response){
  console.log(__dirname + '/static' + request.url)
  try{
    var fileContent = fs.readFileSync(__dirname + '/static' + request.url)
    response.write(fileContent)
  }catch(e){
    response.writeHead(404, 'not found')
  }
  response.end()
})

server.listen(9002)
console.log('visit http://localhost:9002')
