# nodejs 服务器demo

## 关于使用 nodejs 搭建的静态服务器demo
### 使用方法
1. 先将文件 `clone` 到桌面Desktop
2. 在 git bash 或者 终端 中输入
```
cd Desktop
cd "nodejs"
cd "demo2"
node server.js
```

看到返回的具体地址和 `visit http://localhost:9002` 即可通过
http://localhost:9002 访问该页面
使用 ctrl + c 退出

### 其他
有 server-simple.js 和 server.js 两个版本
server.js 功能更加健壮


## 关于使用 nodejs 搭建能处理路由的服务器demo
### 使用方法
1. 先将文件 `clone` 到桌面Desktop
2. 在 git bash 或者 终端 中输入
```
cd Desktop
cd "nodejs"
cd "demo3"
node server-simple.js
```

在b.js文件中添加mock
```
var xhr = new XMLHttpRequest()
xhr.open('GET', '/getWeather?city=beijing',true)
xhr.send()
xhr.onload = function(){
  console.log(JSON.parse(xhr.responseText))
}
```

通过 http://localhost:9003/index.hmtl 访问该页面，在控制台查询到mock数据
使用 ctrl + c 退出


# 跨域相关 -- 新增 9004 9005 端口的跨域 demo
## 9004 - JSONP 跨域demo案例
```JavaScript
script.src = 'http://127.0.0.1:9004/getNews?callback=appendHtml'
```

通过 http://localhost:9004/index.hmtl 与 http://127.0.0.1:9004/index.hmtl 访问页面，点击 `show news` 按钮查看数据

## 9005 - CORS 跨域demo案例
```JavaScript
res.setHeader('Access-Control-Allow-Origin','http://localhost:9005')  //CORS跨域
```

通过 http://localhost:9005/index.hmtl 与 http://127.0.0.1:9005/index.hmtl 访问页面，点击 `show news` 按钮查看数据

### CORS 其他
```JavaScript
res.setHeader('Access-Control-Allow-Origin','*')  //CORS跨域 全局
```
