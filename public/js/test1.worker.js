// 监听消息
onmessage = function(e) {
  var num = e.data;
  var result = 0;
  for (var i = 0; i <= num; i++) {
    result += i;
  } 
  // 把结果发送给主线程
  postMessage(result);
}