<template>
	<div id="d_o">
		<header-com header-show="none" title="确认订单" path=" "></header-com>
		<div class="d_o_i">
			<div class="d_i">
				<p>{{ orderAddress }}</p>
				<p>{{orderName}} {{orderPhone}}</p>
			</div>
			<div class="d_i">
				<router-link class="d_i_sel" to="/manShipAddress" >+&nbsp;&nbsp;选择收货地址</router-link>
			</div>
			<div class="d_i">
				<div class="d_i_i">
					<img v-bind:src="comImgSrc" />
					<span>五星消费商</span>
				</div>
			</div>
			
		</div>
		
		<div class="d_o_f d_o_show">
			<div class="d_f_i">
				<span><span class="d_f_price"></span></span>
			</div>
			<div class="d_f_i">
				确认
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
		text-align: left;
	}
	.d_o_i .d_i .d_i_i img{
		width: 35%;
		vertical-align: top;
	}
	.d_o_i .d_i .d_i_i span{
		line-height: 36px;
		font-size: 16px;
		margin-left: 10px;
		font-weight: 600;
		color: #FF7417;
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