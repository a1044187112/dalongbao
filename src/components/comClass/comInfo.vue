<template>
	<div id="com_info">
		<header-com header-show="none" title="确认订单" path=" "></header-com>
		<div class="com">
			<img class="com_img" v-bind:src="comSrc" />
			<div class="com_name com_item">
				<div class="com_name_val"><span>{{com_name_val}}</span></div>
				<div class="com_coll" @click="addCollection">{{ isCollection?"已收藏":"收藏" }}</div>
			</div>
			<div class="com_price com_item">
				<div class="com_p_v">￥{{cpm_p_v}}</div>
				<div class="com_b_n">销量：{{com_b_n}}</div>
			</div>
			<div class="com_b com_item">
				<div class="com_b_info" v-on:click="show=!show">购买参数：<span>{{ com_buy }}{{ com_buy_num }}</span></div>
				<transition name="bounce">
					<div class="set_b_i" v-if="show" >
						购买数量：
						<span class="sub">-</span><span class="num">1</span>
						<span class="add">+</span>
					</div>
				</transition>
			</div>
			<div class="mall_i com_item">
				<p>官方商城</p>
				<p class="mall_addredd">地址：{{mall_address}}</p>
			</div>
			<div class="com_more com_item">
				<router-link class="com_m_i" to="/mall/omall">进入店铺</router-link>
				<div class="com_m_i">在线客服</div>
			</div>
			<div class="com_info com_item">
				<p>商品详情</p>
			</div>
			<div class="com_info_val com_item">
				<p v-text="">{{ com_info_val }}</p>
			</div>
		</div>
		
		<div class="com_f com_f_show">
			<router-link class="com_f_i" to="/mall/omall">进店</router-link>
			<router-link class="com_f_i" to="/buy/shoppingCart">购物车</router-link>
			<div @click="addShopCar" class="com_f_i" >加入购物车</div>
			<router-link class="com_f_i" to="/detOrder">立即购买</router-link>
		</div>
		<div class="com_f com_f_hidden">
			<router-link class="com_f_i" to="/omall">进店</router-link>
			<router-link class="com_f_i" to="/omall">购物车</router-link>
			<router-link class="com_f_i" to="/buy/omall">加入购物车</router-link>
			<router-link class="com_f_i" to="/omall">立即购买</router-link>
		</div>
	</div>
</template>

<script>
	import headerCom from '../header'
	import { REQUESTADDRESS } from '../../../static/global.js'
	export default{
		components : { headerCom },
		data(){
			return{
				comSrc:"../../static/img/comShow1.jpg",
				com_name_val:"双肩包",
				cpm_p_v:"198.00",
				com_b_n:"0",
				com_buy:"数量：",
				com_buy_num:"8",
				mall_address:"sdf",
				com_info_val:"sdf",
				show:false,
				isCollection:false,
			}
		},
		 mounted(){
        	this.getAjax(); // 获取商品信息
        	this.getProductSpecification();// 获取商品规格
        	this.getProductSpecificationInfo();// 获取规格商品信息
        },
        methods:{
        	getAjax(){
        		var param = this.getParam("id");
        		this.ajax.get(REQUESTADDRESS + "/productlist/getProductDetail/"+param, true, this.getAjaxSCB);
        	
        	},
        	getAjaxSCB(data){
        		if(data.code == "FAIL"){
        			this.errorHandling.getErrorMsg(data);
        		}
        	},
        	addShopCar(){ //  加入购物车
        		var param = this.getParam("id");
        		this.ajax.post(REQUESTADDRESS + "/productlist/getProduct", {"pid":param,quantity:1,spid:"5",}, true, this.addShopCarSCB);
        	},
        	addShopCarSCB(data){
        		if(data.code == "FAIL"){
        			this.errorHandling.getErrorMsg(data);
        		}else
        			alert("添加成功");
        	},
        	
        	
        	addCollection(){  // 添加收藏
        		var param = this.getParam("id");
        		if(this.isCollection) //  默认为false   取消收藏
        			this.ajax.post(REQUESTADDRESS + "/favoritesproduct/cancelCollection", {"pid":param}, true, this.addCollectionSCB);
        		else  // 添加到收藏
        			this.ajax.post(REQUESTADDRESS + "/favoritesproduct/addCollection", {"pid":param}, true, this.addCollectionSCB);
        	},
        	addCollectionSCB(data){
        		if(data.code == "FAIL"){
        			this.errorHandling.getErrorMsg(data);
        		}else
        			this.isCollection = !this.isCollection;
        	},
        	
        	
        	getProductSpecification(){ //获取商品规格
        		var param = this.getParam("id");
        		this.ajax.post(REQUESTADDRESS + "/trueproduct/getProductSpecification", {"pid":param}, true, this.getProductSpecificationSCB);
        	},
        	getProductSpecificationSCB(data){
        		if(data.code == "FAIL"){
        			this.errorHandling.getErrorMsg(data);
        		}
        	},
        	
        	getProductSpecificationInfo(){ // 获取规格商品信息
        		var param = this.getParam("id");
        		this.ajax.post(REQUESTADDRESS + "/trueproduct/getInfo", {"spDesc":"5d4f"}, true, this.getProductSpecificationInfoSCB);
        	},
        	getProductSpecificationInfoSCB(data){
        		if(data.code == "FAIL"){
        			this.errorHandling.getErrorMsg(data);
        		}
        	},
        	getParam(paramName){
        		// 获取url中的参数
	        	var num = window.location.href.indexOf("?");
	        	var locationParam = window.location.href.substr(num+1)
	        	var paramArray = locationParam.split("=");
	        	var param;
	        	paramArray.forEach((item,i) => {
	        		if(item==paramName)
	        			param = paramArray[i+1].substring(1,paramArray[i+1].length-3); // 去除大括号
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
	.com .com_item{
		padding: 15px 0;
		width: 100%;
		background: white;
		font-size: 0;
		margin-top: 1px;
	}
	.com .com_img{
		width: 100%;
	}
	.com .com_name_val ,.com .com_coll{
		display: inline-block;
		height: 48px;
		width: 66%;
		font-size: 14px;
		vertical-align: top;
		text-align: left;
	}
	.com .com_name_val span{
		display: block;
		width: 94%;
		margin: auto;
	}
	.com .com_coll{
		line-height: 48px;
		color: #FF7417;
		text-align: center;
		width: 30%;
		font-size: 16px;
		border-left: 1px solid #aeaeae;
		margin-left: -1px;
	}
	.com .com_p_v,.com .com_b_n{
		width: 92%;
		text-align: left;
		margin: auto;font-size: 14px;
		line-height: 24px;
	}
	.com .com_p_v {
		color: red;
		font-weight: 600;
		font-size: 16px;
	}
	.com .com_b{
		padding-bottom: 0;
	}
	.com .com_b .com_b_info{
		color: #696969;
		text-align: left;
		font-size: 16px;
		width: 92%;
		margin: auto;
		padding-bottom: 15px;
		height: 36px;
		line-height: 36px;
	}
	.com .com_b .com_b_info span{
		color: black;
		font-size: 16px;
	}
	.com .com_b .set_b_i{
		height: 68px;
		line-height: 68px;
		border-top: 1px solid #EFEFEF;
		font-size: 16px;
		background: #E6E6E6;
		padding: 0;
		font-size: 16px;
		font-weight: 600;
		overflow: hidden;
	}
	.com .com_b .set_b_i .sub,
	.com .com_b .set_b_i .num,
	.com .com_b .set_b_i .add{
		display: inline-block;
		width: 36px;
		height: 36px;
		background: #2C3E50;
		line-height: 36px;
		color: white;
		font-size: 25px;
		vertical-align: middle;
		border-radius: 4px;
		
		
	}
	.com .com_b .set_b_i .num{
		font-size: 16px;
		margin-left: 10px;
	}
	/*  动画   */
	@keyframes isshow{
		from{height: 0;}
		to{height: 69px;}
	}
	@keyframes ishidden{
		to{height: 0;}
	}
	
	
	.bounce-enter-active, .bounce-leave-active {
		animation: isshow 1s;
		-moz-animation: isshow 1s;
		-webkit-animation: isshow 1s;
		-moz-animation:  isshow 1s;
	}
	.bounce-enter, .bounce-leave-to /* .fade-leave-active below version 2.1.8 */ {
		animation: ishidden 1s;
		-moz-animation: ishidden 1s;
		-webkit-animation: ishidden 1s;
		-moz-animation:  ishidden 1s;
	}
	
	
	.com .mall_i p,.com .mall_i .mall_addredd{
		font-size: 16px;
		text-align: left;
		width: 92%;
		margin: auto;
		height: 28px;
		line-height: 28px;
	}
	.com .mall_i .mall_addredd{
		font-size: 12px;
		height: 18px;
		line-height: 18px;
	}
	.com .com_more .com_m_i{
		display: inline-block;
		width: 40%;
		font-size: 16px;
		border:1px solid #AEAEAE;
		height: 36px;
		line-height: 36px;
		color: #696969;
	}
	.com .com_more .com_m_i:first-child{
		margin-right: 10%;
	}
	.com .com_info p,.com .com_info_val p{
		width: 92%;
		font-size: 16px;
		text-align: left;
		margin: auto;
	}
	
	.com_f{
		font-size: 0;
	}
	.com_f .com_f_i{
		display: inline-block;
		font-size: 16px;
		height: 48px;
		line-height: 48px;
		background: white;
		width: 20%;
	}
	.com_f .com_f_i:nth-child(3),.com_f .com_f_i:nth-child(4){
		background: rgb(255,151,0);
		width: 30%;
		color: white;
	}
	.com_f .com_f_i:nth-child(4){
		background: rgb(227,57,58);
	}	
	.com_f_show{
		position: fixed;
		bottom: 0;
		z-index: 700;
		width: 100%;
	}
	.com_f_hidden{
		visibility: hidden;
		margin-top: 4px ;
	}
</style>