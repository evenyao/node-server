alert('welcome!');

var xhr = new XMLHttpRequest()
xhr.open('GET', 'http://127.0.0.1:9003/getWeather?city=beijing',true)
xhr.send()
xhr.onload = function(){
  console.log(JSON.parse(xhr.responseText))
}
