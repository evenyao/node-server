var http = require('http')
var fs = require('fs')
var url= require('url')

http.createServer(function(request,response){
  var pathObj = url.parse(request.url,true)
  console.log(pathObj)

  switch(pathObj.pathname){
    case '/getWeather':
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
      response.end(JSON.stringify(ret))
      break;
    case '/user/123':
      response.end( fs.readFileSync(__dirname + '/static/user') )
      break;
    default:
      response.end( fs.readFileSync(__dirname + '/static' + pathObj.pathname) )
  }
}).listen(9003)
