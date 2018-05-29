<template>
	<div id="ano">
		<header-com header-show="none" title="提现通知" path=" "></header-com>
		
		<div class="info">
			<p  v-html="info"></p>
		</div>
		<p class="ano_dep" ><span v-text="ano_dep_text"></span></p>
		<p class="ano_time" ><span v-text="anp_time_text"></span></p>
	</div>
</template>

<script>
	import headerCom from '../header'
	export default{
		components : { headerCom },
		data(){
			return{
				title:"提现通知",
				info:"提现通知提现通知提现通知提现通知提现通知提现通知提现通知提现通知提现通知提现通知提现通知提现通知",
				ano_dep_text:"技术部门",
				anp_time_text:"2010.05.06"
				
			}
		},
		mounted(){
			var id = this.getParam("item");
			if(id == 1)
				this.info = localStorage.hotItemContent1;
			else
				this.info = localStorage.hotItemContent2;
		},
		methods:{
			getParam(paramName){
        		// 获取url中的参数
	        	var num = window.location.href.indexOf("?");
	        	var locationParam = window.location.href.substr(num+1)
	        	var paramArray = locationParam.split("=");
	        	var param;
	        	paramArray.forEach((item,i) => {
	        		if(item==paramName)
	        			param = paramArray[i+1]; 
	        	});
	        	return param;
        	},
		}
	}
</script>

<style>
	body{
		background: #EFEFEF;
	}
	.info{
		background: white;
		margin-top: 1px;
		line-height: 30px;
		letter-spacing: 1px;
		text-align: left;
		text-indent: 24px;
		padding: 10px 0;
	}
	.info p{
		width: 96%;
		margin: auto;
		font-size: 16px;
	}
	.ano_dep,.ano_time{
		width: 100%;
		text-align: right;
		background: white;
		height: 28px;
		line-height: 28px;
	}
	.ano_dep span,.ano_time span{
		margin-right: 20px;
		font-size: 16px;
	}
	.ano_time{
		padding-bottom: 20px;
	}
</style>