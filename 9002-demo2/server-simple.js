var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
  console.log(__dirname + '/static' + req.url)
  try{
    var fileContent = fs.readFileSync(__dirname + '/static' + req.url)
    res.write(fileContent)
  }catch(e){
    res.writeHead(404, 'not found')
  }
  res.end()
})

server.listen(9002)
console.log('visit http://localhost:9002')
