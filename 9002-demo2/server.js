var http = require('http')  //创建服务器
var path = require('path')  //处理url，根据系统自动识别url类型
var fs = require('fs')  //读写模块
var url = require('url')  //解析url得到信息

//构建staticRoot函数 req:request请求  res:response应答
function staticRoot(staticPath, req, res){
  console.log(staticPath)
  console.log(req.url)
  var pathObj = url.parse(req.url,true)
  console.log(pathObj)

  if(pathObj.pathname === '/'){
    pathObj.pathname += 'index.html'
  }

  var filePath = path.join(staticPath, pathObj.pathname)

  fs.readFile(filePath, 'binary', function(err, fileContent){
    if(err){
      console.log('404')
      res.writeHead(404, 'not found')
      res.end('<h1>404 Not Found</h1>')
    }else{
      console.log('ok')
      res.writeHead(200, 'OK')
      res.write(fileContent, 'binary')
      res.end()
    }
  })

}

console.log(path.join(__dirname, 'static'))

var server = http.createServer(function(req,res){
  //__dirname是nodejs里面的内置变量，代表当前文件server.js；static代表所在文件夹；
  //即自动生成一个绝对路径
  staticRoot(path.join(__dirname, 'static'),req,res)
})

server.listen(9002)
console.log('visit http://localhost:9002')
