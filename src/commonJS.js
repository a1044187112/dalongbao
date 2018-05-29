//export const getAjax =  url => {
//	var successCallback = function(data) {
//		console.log(data);
//		if(data.status == 200) {
//			return data;
//		}
//	}
//	var errorCallback = function() {
//		console.log("出错了");
//	}
//	this.$http.get('http://10.10.10.182:8081'+url).then(successCallback, errorCallback);
//}
//export const postAjax = (url,param) => {
//	var successCallback = function(data) {
//		console.log(data);
//		if(data.status == 200) {
//			return data;
//		}
//	}
//	var errorCallback = function() {
//		console.log("出错了");
//	}
//	this.$http.post('http://10.10.10.182:8081'+url,param).then(successCallback, errorCallback);
//}
// 