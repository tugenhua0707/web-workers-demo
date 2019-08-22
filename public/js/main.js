// 加载css样式
require('../styles/main.styl');

import Worker from './test1.worker.js';

// 创建worker实列
var worker = new Worker();

var calDOM = document.getElementById('calculate');
calDOM.addEventListener('click', calculate);

function calculate() {
  var num = parseInt(document.getElementById("num").value, 10);
  // 将我们的数据传递给 worker线程，让我们的worker线程去帮我们做这件事
  worker.postMessage(num);
}

// 监听worker线程的结果
worker.onmessage = function(e) {
  alert('总和值为:' + e.data);
};