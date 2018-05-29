<template>
	<div id="d_o">
		
		<header-com header-show="none" title="收货地址" path=" "></header-com>
		<div class="d_o_i">
			<div class="d_i">
				<p>{{ orderAddress }}</p>
				<p>{{orderName}} {{orderPhone}}</p>
				<span class="del_address" @click="delAddress()">x</span>
				<div class="set_def" @click="setAddressSelected"><span class="active"></span>设为默认</div>
			</div>
		</div>
		<router-link class="add_address" to="/addressMan/addAddress">
			添加地址
		</router-link>
	</div>
</template>

<script>
	import { REQUESTADDRESS } from '../../../static/global.js'
	import headerCom from '../header'
	export default{
		components : { headerCom },
		data(){
			return{
				orderAddress:"中天未来方舟",
				orderName:"唐浩",
				orderPhone:"15512354567",
			}
		},
		methods : {
			delAddress(){
				if(!confirm("是否删除该地址？")) 
					return;
				var data = {"rid":"ajlkjsdf5"};
				this.ajax.post(REQUESTADDRESS+"/recaddress/deleteReceiverAddress",data,true,this.delAddressSCB);
				
			},
			delAddressSCB(data){
        		if(data.code == "FAIL"){
        			this.errorHandling.getErrorMsg(data);
        		}
        	},
        	
			setAddressSelected($event){
				var domArr = document.getElementsByClassName("set_def");
				for (var i = 0;i < domArr.length ; i++ ) { // 将其他的地址的设为默认改为不选中
					domArr[i].classList.remove("active");
				}
				if(!event.currentTarget.classList.contains("active")) // 将当前点击的设为选中状态
					event.currentTarget.classList.add("active");
				var data = {"rid":"ajlkjsdf5"};
				this.ajax.post(REQUESTADDRESS+"/recaddress/setDefault",data,true,this.setAddressSelectedSCB);	
			},
			setAddressSelectedSCB(data){
        		if(data.code == "FAIL"){
        			this.errorHandling.getErrorMsg(data);
        		}
        	},
			
		},
	}
	
</script>

<style>
	.title .return{
		display: block;
		width: 14px;
		height: 14px;
		border-top:1px solid #696969;
		border-left: 1px solid #696969;
		position: absolute;
		font-size: 24px;
		top: 14px;
		left: 14px;
		/* 旋转  */
		transform: rotate(-45deg);
		-ms-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
	}
	.title .title_text{
		font-size: 16px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		background: white;
		padding-top: 5px;
	}
	.d_o_i{
		background: white;
		border-bottom: 10px solid #EFEFEF;
	}
	.d_o_i .d_i{
		border-top: 1px solid #EFEFEF;
		padding: 15px 0;
		position: relative;
	}
	.d_o_i .d_i>p{
		height: 28px;
		line-height: 28px;
		text-align: left;
		width: 94%;
		margin: auto;
		font-size: 16px;
	}
	.d_o_i .d_i>p:nth-child(2){
		font-size: 14px;
		color: #696969;
	}
	.d_o_i .d_i .del_address{
		position: absolute;
		top: 0;
		right: 15px;
		font-size: 16px;
		top: 20px;
	}
	.d_o_i .d_i .set_def{
		position: absolute;
		bottom: 4px;
		right: 10px;
		color: #969696;
	}
	.d_o_i .d_i .set_def.active{
		color: #FF7417;
	}
	.d_o_i .d_i .set_def>span{
		width: 12px;
		height: 12px;
		border: 1px solid #AEAEAE;
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
		margin-right: 4px;
	}
	.d_o_i .d_i .set_def.active>span:first-child{
		border: 1px solid #FF7417;
		background: #FF7417;
	}
	
	
	.add_address{
		display: block;
		width: 90%;
		height: 48px;
		line-height: 48px;
		color: white;
		font-size: 18px;
		text-align: center;
		background: #FF7417;
		border-radius: 24px;
		margin: auto;
		margin-top: 20px;
	}
</style>