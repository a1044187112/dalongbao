<template>
	<div id="balance">
		<header-com header-show="block" title="我的余额" path="/perCenter/moneyMan/incomeExpDetails"></header-com>
		<div class="ba">
			<div class="ba_v">
				<p>可用余额(元)</p>
				<p>18456.00</p>
			</div>
			<ul class="ba_l">
				<li class="ba_i">
					<router-link to="/addBankC">
						<span>回购</span>
						<span>></span>
					</router-link>
				</li>
				<li class="ba_i">
					<router-link to="/lbVouTran">
						<span>大龙宝转首购券</span>
						<span>></span>
					</router-link>
				</li>
				<li class="ba_i">
					<router-link to="/addBankC">
						<span>我的银行卡</span>
						<span>0张&nbsp;&nbsp;&nbsp;></span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import headerCom from '../../header'
	export default{
		components : { headerCom },
	}
</script>

<style>
	body{
		background: #EFEFEF;
	}
	.ba .ba_v{
		padding: 20px 0;
		background: #FF7417;
	}
	.ba .ba_v p{
		width: 90%;
		margin: auto;
		text-align: left;
		font-size: 16px;
		color: white;
	}
	.ba .ba_v p:nth-child(2){
		font-size: 36px;
		margin-top: 12px;
	}
	.ba .ba_l{
		background: white;
	}
	.ba .ba_l .ba_i{
		border-bottom: 4px solid #EFEFEF;
		width: 100%;
		margin: auto;
		height: 48px;
		line-height: 50px;
		text-align: center;
	}
	.ba .ba_l .ba_i span{
		display: inline-block;
		width: 60%;
		text-align: left;
		font-size: 16px;
	}
	.ba .ba_l .ba_i span:last-child{
		width: 30%;
		text-align: right;
		color: #696969;
	}
</style>