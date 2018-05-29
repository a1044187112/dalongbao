// 封装ajax
var xhr;
var succCallBack;
createAjax: function(method, url, async, data, fn) {
	xhr = null;
	succCallBack = fn;
	//var xhr; // 创建XMLHttpRequest对象  ie5 和ie6需要使用ActiveX创建对象
	if(window.XMLHttpRequest)
		xhr = new XMLHttpRequest();
	else
		xhr = new ActiveXObject("Microsoft.XMLHTTP");

	//			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	//			readyState有五种可能的值：
	//			0 (未初始化)： (XMLHttpRequest)对象已经创建，但还没有调用open()方法。
	//			1 (载入)：已经调用open() 方法，但尚未发送请求。
	//			2 (载入完成)： 请求已经发送完成。
	//			3 (交互)：可以接收到部分响应数据。
	//			4 (完成)：已经接收到了全部数据，并且连接已经关闭。
	xhr.onreadystatechange = this.successCallback; // 交互状态发生改变时执行的函数
	xhr.open(method, url, async); // 规定请求的类型，URL  open(method,url,async)   method:  GET/POST  async : true(异步)/false / 同步

	if(data)
		xhr.send(data); // 如果是POST  send中需要传请求的参数
	else
		xhr.send(null)

},

export get: function(url, async, fn) {
	createAjax("GET", url, async, fn);
},
export post: function(url, data, async, fn) {
	createAjax("POST", url, data, async, fn);
},

export successCallback: function() {
	xhr;
	if(xhr.readyState == 4) {
		if(xhr.status == 200) { // 请求成功
			succCallBack(JSON.parse(xhr.responseText));
		} else {
			console.log(xhr.statusText); // 请求失败
		}
	}
}