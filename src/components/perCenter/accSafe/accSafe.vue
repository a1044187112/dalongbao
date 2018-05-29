<template>
	<div id="a_s">
		<header-com header-show="none" title="账户安全" path=" "></header-com>
		<ul class="a_l">
			<li>
				<router-link to="/changePw">
					<span>修改登陆密码</span><span>></span>
				</router-link>
			</li>
			<li>
				<router-link to="/addBankC">
					<span>银行卡信息</span><span>></span>
				</router-link>
			</li>
			<li>
				<router-link to="/login">
					<span>退出登陆</span><span>></span>
				</router-link>
			</li>
		</ul>
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
	#a_s{
		background: white;
	}

	.a_l li{
		height: 60px;
		line-height: 60px;
		border-top: 1px solid #EFEFEF;
		text-align: center;
	}
	.a_l li span{
		font-size: 16px;
		display: inline-block;
		width: 46%;
	}
	.a_l li span:first-child{
		text-align: left;
	}
	.a_l li span:last-child{
		text-align: right;
		color: #696969;
	}
</style>