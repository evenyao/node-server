var http = require('http')

var server = http.createServer(function(request,response){
  setTimeout(function(){

  response.setHeader("Content-Type","text/html; charest=utf-8")  //设置text/html让其以html的方式渲染，这里设置的权限是最高的
  response.writeHead(200,'that right!')
  response.write('<html><head><meta charset="gbk" /></head>')
  response.write('<h1>No.1</h1>')
  response.write('hello world')
  response.write('</html>')
  response.end()
  },2000)
})
server.listen(9001)
