var http = require('http')
var path = require('path')  //根据系统自动识别url类型
var fs = require('fs')  //读写模块
var url = require('url')

//构建staticRoot函数
function staticRoot(staticPath, request, response){
  console.log(staticPath)
  console.log(request.url)
  var pathObj = url.parse(request.url,true)
  console.log(pathObj)

  if(pathObj.pathname === '/'){
    pathObj.pathname += 'index.html'
  }

  var filePath = path.join(staticPath, pathObj.pathname)

  fs.readFile(filePath, 'binary', function(err, fileContent){
    if(err){
      console.log('404')
      response.writeHead(404, 'not found')
      response.end('<h1>404 Not Found</h1>')
    }else{
      console.log('ok')
      response.writeHead(200, 'OK')
      response.write(fileContent, 'binary')
      response.end()
    }
  })

}

console.log(path.join(__dirname, 'static'))

//__dirname为nodejs内置对象，为这个文件本身；static为该文件夹，一起生成了一个绝对地址
var server = http.createServer(function(request,response){
  staticRoot(path.join(__dirname, 'static'),request,response)
})

server.listen(9002)
console.log('visit http://localhost:9002')
