<template>
	<div id="order">
		<header-com header-show="none" title="我的订单" path=" "></header-com>
		<ul class="o_t">
			<li class="o_t_i active" data-id='' @click="menuClick($event)">全部</li>
			<li class="o_t_i" data-id='0'  @click="menuClick($event)">待付款</li>
			<li class="o_t_i" data-id='1'  @click="menuClick($event)">待发货</li>
			<li class="o_t_i" data-id='2'  @click="menuClick($event)">待收货</li>
			<li class="o_t_i" data-id='3'  @click="menuClick($event)">待评价</li>
		</ul>
		<ul class="o_l">
			<li v-for="info in infos">
				<div class="o_l_i"><span>{{info.num}}</span></div>
				<div class="o_l_i">
					<img v-bind:src="info.comSrc" />
					<div class="o_l_com_info">
						<p>{{ info.details }}</p>
						<p>￥{{ info.price }}</p>
						<p>7天退换</p>
					</div>
					<span class="buy_num">x{{ info.buyNum }}</span>
				</div>
				<div class="o_l_i">
					<span>共{{info.buyNum}}件商品 合计：
					<span>￥{{ info.price }}</span>(含运费￥{{ info.freight }})</span>
				</div>
				<div class="o_l_i">
					<span class="o_l_i_btn" @click="cancelOrder">取消订单</span>
					<router-link class="o_l_i_btn" to="/detOrder">去付款</router-link>
				</div>
			</li>
		</ul>
		
		<ul class="o_l">
			<li v-for="info in infos">
				<div class="o_l_i"><span>{{info.num}}</span></div>
				<div class="o_l_i">
					<img v-bind:src="info.comSrc" />
					<div class="o_l_com_info">
						<p>{{ info.details }}</p>
						<p>￥{{ info.price }}</p>
						<p>7天退换</p>
					</div>
					<span class="buy_num">x{{ info.buyNum }}</span>
				</div>
				<div class="o_l_i">
					<span>共{{info.buyNum}}件商品 合计：
					<span>￥{{ info.price }}</span>(含运费￥{{ info.freight }})</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import headerCom from '../../header'
	import { REQUESTADDRESS } from '../../../../static/global.js'
	export default {
		components : { headerCom },
		data(){
			return {
				infos : [
					{ comSrc:"../../../../static/img/comShow1.jpg",num:"4sdkajfhksakkashdfk", details:"旅行包", price:"88", buyNum:"1",freight:"15.00"},
					{ comSrc:"../../../../static/img/comShow1.jpg",num:"4sdkajfhksakkashdfk", details:"旅行包", price:"88", buyNum:"1",freight:"15.00"},
					{ comSrc:"../../../../static/img/comShow1.jpg",num:"4sdkajfhksakkashdfk", details:"旅行包", price:"88", buyNum:"1",freight:"15.00"},
				]
			}
		},
		mounted(){
			this.setTitleActive();			
		},
		methods : {
			setTitleActive(){  // 进入页面时初始化样式并请求数据
				var num = this.getParam("selected")-0;
				var objArr = document.getElementsByClassName("o_t_i");
				for(var i = 0;i < objArr.length; i++){
        			objArr[i].classList.remove("active");
        		}
				objArr[num].classList.add("active");// 添加类名
				this.getOrder(num);
			},
			getOrder(num){ 
				this.ajax.post(REQUESTADDRESS+"/orderlist/getOrders",{"status":num},true,this.sucCallback);
			},
			getParam(paramName){  // 获取url中的参数
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
        	menuClick(event){
        		var objArr = event.currentTarget.parentNode.children;
        		for(var i = 0;i < objArr.length; i++){
        			objArr[i].classList.remove("active");
        		}
        		var num = event.currentTarget.getAttribute("data-id");
        		this.getOrder(num);
        		event.currentTarget.classList.add("active");// 添加类名
        	},
        	cancelOrder(){ //  取消订单
        		this.ajax.post(REQUESTADDRESS+"/orderlist/cancelOrder",{"oid":"4812B468"},true,this.cancelOrderSCB);
        	},
        	
        	
        	sucCallback(data){
        		if(data.code == "FAIL"){
        			this.errorHandling.getErrorMsg(data);
        		}
        	},
        	cancelOrderSCB(data){
        		if(data.code == "FAIL"){
					this.errorHandling.getErrorMsg(data);
				}
        	}
		}
	}
</script>

<style>
	#order{
		background: white;
	}
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
	.o_t{
		font-size: 0;
		border-top: 1px solid #EFEFEF;
	}
	.o_t .o_t_i{
		display: inline-block;
		height: 48px;
		line-height: 50px;
		border-bottom: 2px solid rgba(0,0,0,0);
		width: 20%;
		font-size: 16px;
	}
	.o_t .o_t_i.active{
		border-bottom: 2px solid #FF7417;
	}
	.o_l li .o_l_i{
		border-top: 1px solid #EFEFEF;
	}
	.o_l li .o_l_i {
		padding: 15px 0;
		text-align: left;
	}
	.o_l li .o_l_i>span{
		margin-left: 15px;
		font-size: 16px;
	}
	.o_l li .o_l_i>img{
		width: 120px;
		vertical-align: top;
		margin-left: 15px;
	}
	.o_l li .o_l_i .o_l_com_info{
		display: inline-block;
	}
	.o_l li .o_l_i .o_l_com_info>p{
		font-size: 14px;
		margin-left: 10px;
	}
	.o_l li .o_l_i .o_l_com_info>p:first-child{
		height: 60px;
	}
	.o_l li .o_l_i .o_l_com_info>p:nth-child(2){
		font-size: 16px;
		font-weight: 600;
		color: #FF7417;
	}
	.o_l li .o_l_i .o_l_com_info>p:last-child{
		margin-top: 6px;
		width: 60px;
		color: #FF7417;
		height: 24px;
		line-height: 24px;
		border: 1px solid #FF7417;
		border-radius: 4px;
		text-align: center;
	}
	.o_l li .o_l_i .buy_num{
		vertical-align: middle;
		color: #696969;
		float: right;
		margin-right: 15px;
		margin-top: 40px;
	}
	.o_l li .o_l_i:nth-child(3){
		padding: 20px 0;
		text-align: right;
	}
	.o_l li .o_l_i:nth-child(3)>span{
		font-size: 14px;
		margin-right: 15px;
		
	}
	.o_l li .o_l_i:nth-child(3)>span>span{
		color: #FF7417;
		font-size: 16px;
		font-weight: 600;
	}
	.o_l li .o_l_i:nth-child(4){
		text-align: right;
	}
	.o_l li .o_l_i:nth-child(4) .o_l_i_btn{
		font-size: 14px;
		display: inline-block;
		width: 80px;
		text-align: center;		
		color: #FF7417;
		border:1px solid #FF7417;
		border-radius: 6px;
		height: 28px;
		line-height: 28px;
		margin-right: 6px;
	}
	.o_l li .o_l_i:nth-child(4) .o_l_i_btn:last-child{
		margin-right: 15px;
	}
</style>