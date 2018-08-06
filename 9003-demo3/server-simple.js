var http = require('http')
var fs = require('fs')
var url= require('url')

http.createServer(function(req,res){
  var pathObj = url.parse(req.url,true)
  console.log(pathObj)

  switch(pathObj.pathname){
    case '/getWeather':
    res.setHeader('Access-Control-Allow-Origin','http://a.com:9003')  //CORS跨域
    res.setHeader('content-Type','text/json; charset=utf-8')
      if(pathObj.query.city === 'beijing'){
        ret = {
          city:'beijing',
          weather: '晴天'
        }
      }else{
        ret = {
          city: pathObj.query.city,
          weather: '不知道'
        }
      }
      res.end(JSON.stringify(ret))
      break;
    case '/user/123':
      res.end( fs.readFileSync(__dirname + '/static/user') )
      break;
    default:
      res.end( fs.readFileSync(__dirname + '/static' + pathObj.pathname) )
  }
}).listen(9003)
console.log('visit http://127.0.0.1:9003/index.html')
