// 封装ajax
//url 请求地址  async  true(异步)/false / 同步  fn 回掉方法  

let ajaxObject =  {
	get: function(url, async, fn) {
		this.createAjax("GET", url, async, fn);
	},
	post: function(url, data, async, fn) {
		this.createAjax("POST", url, async, fn,data);
	},
	createAjax: function(method, url, async, fn, data) {
		var xhr = null;
		//var xhr; // 创建XMLHttpRequest对象  ie5 和ie6需要使用ActiveX创建对象
		if(window.XMLHttpRequest)
			xhr = new XMLHttpRequest();
		else
			xhr = new ActiveXObject("Microsoft.XMLHTTP");


		xhr.open(method, url, async); // 规定请求的类型，URL  open(method,url,async)   method:  GET/POST  async : true(异步)/false / 同步
		if(data){
			xhr.send(data); // 如果是POST  send中需要传请求的参数
		}else
			xhr.send(null)
	
		this.ajaxTimeout(xhr,fn);  // 请求超时处理
	
	},
	ajaxTimeout:function(xhr,fn){  // 请求超时处理
		var self = this;
		var timeout = false; 
		var timer = setTimeout(function(){  // 如果还没有返回结果 则请求超时
//			alert("请求超时,请检查你的网络情况是否良好！");
			console.log("请求超时！")
			timeout = true;
			//xhr.abort(); // 取消当前响应  关闭连接并且结束任何未完成的网络活动
			console.log(xhr);
		},5000);
		xhr.onreadystatechange = function() { // 交互状态发生改变时执行的函数
			if(xhr.readyState == 4 && !timeout){  // 请求完成
				clearTimeout(timer);
				self.requestComplete(xhr,fn);  // 请求完成之后调用回调函数返回数据
			}
			if(xhr.readyState != 4 && timeout){  // 请求超时
				clearTimeout(timer);
				return;
			}
		}
	},
	requestComplete : function(xhr,fn){  //请求完成之后调用回调函数返回数据
		//			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	//			readyState有五种可能的值：
	//			0 (未初始化)： (XMLHttpRequest)对象已经创建，但还没有调用open()方法。
	//			1 (载入)：已经调用open() 方法，但尚未发送请求。
	//			2 (载入完成)： 请求已经发送完成。
	//			3 (交互)：可以接收到部分响应数据。
	//			4 (完成)：已经接收到了全部数据，并且连接已经关闭。
		if(xhr.readyState == 4) {
				if(xhr.status == 200) { // 请求成功
					fn(JSON.parse(xhr.responseText));
				} else {
					console.log(xhr.statusText); // 请求失败
				}
			}
	},
}

let errorHandling = { // 页面请求返回数据中提示错误信息得处理方法
	
	getErrorMsg : function(data){
		console.log(data+"错误处理");
//		this.$router.push({path:"/login"});
	}
}

// 监听页面滚动 当页面滚动到底部时是否加载新数据

let pageScroll = {
	// 监听滚动 如果有传入Eelement  就监听元素的滚动 如果没有 就监听屏幕的滚动
	getScroll : function(element,callback){
		if(element){
			element.addEventListener("scroll",function(){ pageScroll.scrollCalculation(element,callback); });
		}else{
			window.addEventListener("scroll",function(){ pageScroll.scrollCalculation(document.body,callback); });
		}
	},
	scrollCalculation : function(element,callback){
		
		var bodyHeight = document.body.offsetHeight; // 获取页面内容高度
		
		var scrollTop = window.pageYOffset||element.scrollTop; // 滚动了多少px
		
		var windowHeight = window.innerHeight; // 屏幕高度
		
		if(windowHeight+scrollTop+10>=bodyHeight){ // 滚动到底部执行的方法
			callback();
		}
	},
	
}


export { ajaxObject , errorHandling ,pageScroll}
