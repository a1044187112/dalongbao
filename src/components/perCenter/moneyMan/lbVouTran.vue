<template>
	<div id="tv">
		<header-com header-show="none" title="大龙宝转首购券" path=" "></header-com>
		<ul class="a_l">
			<li class="a_i">
				<span class="a_i_t">输入金额：</span>
				<input type="number"  />
			</li>
			<li class="a_i">
				<span class="a_i_t">验证码：</span>
				<input type="text" placeholder="请输入验证码" />
				<img class="ver_code"  src="../../../../static/img/y1.jpg" />
			</li>
		</ul>
		<p class="tv_money">可用余额 0.00 元</p>
		<div class="add_address">
			确认
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
		background: white;
	}
	.a_l{
		border-top: 4px solid #EFEFEF;
		color: #696969;
	}
	.a_l .a_i{
		height: 48px;
		line-height: 48px;
		font-size: 0;
		position: relative;
	}
	.a_l .a_i .a_i_t{
		display: inline-block;
		font-size: 16px;
		text-align: center;
		width: 26%;
		text-align: left;
		margin-left: 4%;
	}
	.a_l .a_i>input{
		display: inline-block;
		width: 65%;
		height: 36px;
		line-height: 36px;
		border: none;
		border-bottom: 1px solid #AEAEAE;
		outline: none;
		font-size: 16px;
		text-align: left;
	}
	.a_l .a_i .ver_code{
		position: absolute;
		width: 70px;
		top: 6px;
		right: 10px;
	}
	.tv_money{
		width: 90%;
		text-align: left;
		line-height: 36px;
		margin: auto;
		font-size: 16px;
		color: #696969;
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
		margin-top: 30px;
	}
</style>