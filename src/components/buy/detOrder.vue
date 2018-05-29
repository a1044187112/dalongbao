<template>
	<div id="d_o">
		<header-com header-show="none" title="确认订单" path=" "></header-com>
		<div class="d_o_i">
			<div class="d_i">
				<p>{{ orderAddress }}</p>
				<p>{{orderName}} {{orderPhone}}</p>
			</div>
			<div class="d_i">
				<router-link class="d_i_sel" to="/addressMan/manShipAddress" >+&nbsp;&nbsp;选择收货地址</router-link>
			</div>
			<div class="d_i">
				<div class="d_i_i">
					<img v-bind:src="comImgSrc"/>
					<div class="d_i_info">
						<div>{{ comName }}</div>
						<div>￥{{ comPrice }}</div>
						<div><span class="sub">-</span><span class="num">1</span><span class="add">+</span></div>
					</div>
					<span class="d_i_del">x</span>
				</div>
			</div>
			<div class="d_i">
				<p class="d_i_msg">买家留言：<input type="text" placeholder="选填" /></p>
			</div>
			<div class="d_i">
				<p class="d_i_num">共{{ buyNum }}件商品<span>合计：<span class="buy_price">￥{{ buyPrice}}</span></span></p>
			</div>
		</div>
		<div class="d_o_f d_o_show">
			<div class="d_f_i">
				<span>合计：<span class="d_f_price">￥{{ totalPrice }}</span></span>
			</div>
			<div class="d_f_i">
				结算
			</div>
		</div>
		<div class="d_o_f d_o_hidden">
			<div class="d_f_i">
				<span>合计：<span class="d_f_price">￥88</span></span>
			</div>
			<div class="d_f_i">
				结算
			</div>
		</div>
	</div>
</template>

<script>
	import headerCom from '../header'
	export default{
		components : { headerCom },
		data(){
			return{
				orderAddress:"中天未来方舟",
				orderName:"唐浩",
				orderPhone:"15512354567",
				comImgSrc:"../../../static/img/comShow1.jpg",
				comName:"双肩包",
				comPrice:"88.0",
				buyNum:"1",
				buyPrice:"88",
				totalPrice:"88",
			}
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
	.d_o_i{
		background: white;
	}
	.d_o_i .d_i{
		border-top: 1px solid #EFEFEF;
		padding: 15px 0;
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
	.d_o_i .d_i:nth-child(2) .d_i_sel{
		display: block;
		width: 80%;
		margin: auto;
		height: 36px;
		line-height: 38px;
		text-align: center;
		background: #AEAEAE;
		border-radius: 18px;
		color: white;
		font-size: 16px;
	}
	.d_o_i .d_i .d_i_i{
		width: 90%;
		margin: auto;
		position: relative;
	}
	.d_o_i .d_i .d_i_i>img{
		width: 40%;
		height: 135px;
	}
	.d_o_i .d_i .d_i_i .d_i_info{
		display: inline-block;
		width: 40%;
		text-align: left;
		vertical-align: top;
	}
	.d_o_i .d_i .d_i_i .d_i_info>div{
		font-size: 16px;
		padding-left: 10px;
	}
	.d_o_i .d_i .d_i_i .d_i_info>div:first-child{
		height: 80px;
	}
	.d_o_i .d_i .d_i_i .d_i_info>div:nth-child(2){
		color: #FF0000;
		font-weight: 600;
	}
	.d_o_i .d_i .d_i_i .d_i_info>div .sub,
	.d_o_i .d_i .d_i_i .d_i_info>div .num,
	.d_o_i .d_i .d_i_i .d_i_info>div .add{
		display: inline-block;
		height: 28px;
		width: 28px;
		border: 1px solid #EFEFEF;
		text-align: center;
		line-height: 28px;
		font-size: 16px;
	}
	.d_o_i .d_i .d_i_i .d_i_info>div .num{
		width: 60px;
		border-left: none;
		border-right: none;
		margin-top: 4px;
	}
	.d_o_i .d_i .d_i_i .d_i_del{
		position: absolute;
		top: 0;
		right: 0;
		font-size: 18px;
	}
	.d_o_i .d_i .d_i_num,
	.d_o_i .d_i .d_i_msg{
		height: 32px;
		line-height: 32px;
		color: black;
	}
	.d_o_i .d_i .d_i_msg>input{
		width: 70%;
		border: none;
		outline: none;
		font-size: 16px;
	}
	.d_o_i .d_i .d_i_num>span{
		float: right;
		font-size: 16px;
	}
	.d_o_i .d_i .d_i_num>span>span{
		font-size: 16px;
		color: #FF0000;
		font-weight: 600;
	}
	.d_o_f{
		width: 100%;
		height: 60px;
		line-height: 60px;
		font-size: 0;
	}
	.d_o_f .d_f_i{
		display: inline-block;
		font-size: 16px;
		width: 25%;
		background: #ff6600;
		color: white;
	}
	.d_o_f .d_f_i:first-child{
		width: 75%;
		background: white;
		color: black;
	}
	.d_o_f .d_f_i:first-child>span{
		display: inline-block;
		width: 90%;
		margin: auto;	
		text-align: left;
		font-size: 16px;
	}
	.d_o_f .d_f_i:first-child .d_f_price{
		font-size: 16px;
		color: red;
		font-weight: 600;
	}
	.d_o_show{
		position: fixed;
		bottom: 0;
	}
	.d_o_hidden{
		visibility: hidden;
	}
</style>