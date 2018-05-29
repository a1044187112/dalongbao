<template>
	<div id="u_h">
		<header-com header-show="none" title="用户消息" path=" "></header-com>
	</div>
</template>

<script>
	import headerCom from '../../header'
	import { REQUESTADDRESS } from '../../../../static/global.js'
	export default{
		data(){
			return{}
		},
		components : {headerCom},
		mounted(){
			this.getUserMsg();
		},
		methods : {
			getUserMsg(){
				this.ajax.get(REQUESTADDRESS+"/usermsg/getUserMsg?index=1&&size=10",true,this.getUserMsgSCB);
			},
			getUserMsgSCB(data){
    		if(data.code == "FAIL"){
    			this.errorHandling.getErrorMsg(data);
    		}
    	},
		},
		
	}
</script>

<style>
	body{
		background: #EFEFEF;
	}
	
</style>