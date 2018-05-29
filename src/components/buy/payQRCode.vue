<template>
	<div id="pay">
		<div class="title">
			<span class="return"></span>
			<div class="title_text">支付</div>		
			<router-link class='pay_info' to="/incomeExpDetails">明细</router-link>
		</div>
		<header-com header-show="block" title="支付" path="/perCenter/moneyMan/incomeExpDetails"></header-com>
		
		<div class="pay_p">
			<img src="../../../static/img/comShow1.jpg" />
		</div>
		<button>刷新二维码</button>
	</div>
</template>

<script>
	import headerCom from '../header'
	export default{
		components : { headerCom },
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
	.title .pay_info{
		font-size: 16px;
		float: right;
		margin-top: -30px;
		margin-right: 15px;
		color: #696969;
	}
	.pay_p{
		width: 88%;
		margin: auto;
		margin-top: 40px;
		background: antiquewhite;
		border-radius: 15px;
		padding:20px 0
	}
	.pay_p img{
		width: 85%;
	}
	#pay button{
		display: block;
		margin: auto;
		margin-top: 30px;
		height: 48px;
		line-height: 48px;
		background: #ff6633;
		width: 80%;
		border: none;
		outline: none;
		border-radius: 4px;
		font-size: 16px;
		color: white;
	}
	
</style>