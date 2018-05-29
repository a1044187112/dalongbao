<template>
	<div id="voucher">
		<header-com header-show="block" title="转让首购券" path="/perCenter/moneyMan/incomeExpDetails"></header-com>
		<ul class="vou">
			<li v-for="info in infos">
				<p>{{ info.vouVal }}</p>
				<router-link class="vou_btn" v-bind:to="info.toLink">立即兑换</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import headerCom from '../../header'
	export default{
		components : { headerCom },
		data(){
			return{
				infos : [
					{ vouVal : "6000" , toLink:"/vouInfo"},
					{ vouVal : "6000" , toLink:"/vouInfo"},
					{ vouVal : "6000" , toLink:"/vouInfo"},
					{ vouVal : "6000" , toLink:"/vouInfo"},
				]
			}
		}
	}
</script>

<style>
	body{
		background: #EFEFEF;
	}
	.vou  li{
		width: 100%;
		height: 48px;
		line-height: 48px;
		border-top: 1px solid #EFEFEF;
		background: white;
	}
	.vou  li p{
		width: 94%;
		margin: auto;
		text-align: left;
		font-size: 16px;
	}
	.vou  li .vou_btn{
		
		height: 32px;
		line-height: 32px;
		border: none;
		width: 80px;
		outline: none;
		float: right;
		margin-right: 10px;
		margin-top: -40px;
		font-size: 14px;
		color: white;
		background: #85DD1D;
	}
</style>