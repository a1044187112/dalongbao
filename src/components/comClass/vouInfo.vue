<template>
	<div id="vou_info">
		<header-com header-show="none" title="商品详情" path=" "></header-com>
		
		<div class="con">
			<p>功能</p>
			<img src="../../../static/img/comShow1.jpg" />
		</div>
		<div class="fo">
			<div class="fo_i">600.00兑换券</div>
			<router-link class="fo_i" to="/voucherCom">我要兑换</router-link>
		</div>
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

	#vou_info .con{
		width: 100%;
		padding: 15px 0;
		background: white;
		border-top: 1px solid #efefef;
	}
	#vou_info .con img,
	#vou_info .con p{
		width: 92%;
		margin: auto;
		display: inline-block;
		text-align: left;
		font-size: 14px;
	}
	#vou_info .con img{
		margin-top: 4px;
	}
	#vou_info .fo{
		font-size: 0;
		position: fixed;
		width: 100%;
		bottom: 0;
	}
	#vou_info .fo .fo_i{
		display: inline-block;
		width: 50%;
		height: 48px;
		line-height: 50px;
		background: white;
		font-size: 16px;
	}
	#vou_info .fo .fo_i:nth-child(2){
		background: #fc9700;
		color: white;
	}
</style>