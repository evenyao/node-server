var http = require('http')
var fs = require('fs')
var path = require('path')
var url =  require('url')

http.createServer(function(req,res){
  var pathObj = url.parse(req.url,true)

  switch (pathObj.pathname) {
    case '/getNews':
      var news = [
        "保罗乔治钓鱼竞标赛圆满结束：感谢你们所有人的参赛",
        "威斯布鲁克妻子透露将自己与丈夫的第二个孩子",
        "[翻译团]防守将会使雷霆在2018-19赛季更上一层楼"
      ]
      res.setHeader('content-Type','text/json; charset=utf-8')
      if(pathObj.query.callback){
        res.end(pathObj.query.callback + '(' + JSON.stringify(news) + ')')
      }else{
        res.end(JSON.stringify(news))
      }

      break;

    default:
      fs.readFile(path.join(__dirname,pathObj.pathname),function(e,data){
        if(e){
          res.writeHead(404,'not found')
          res.end('<h1>404 Nof Found</h1>')
        }else{
          res.end(data)
        }
      })
  }
}).listen(9004)
console.log('visit http://localhost:9004/index.html')
