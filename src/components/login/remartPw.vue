<template>
	<div id="login">
		<header-com header-show="none" title="重置登陆密码" path=" "></header-com>
		<ul class="login_l">
			<li class="login_i" v-for="li in ll">
				<span class="login_i_t">{{li.title}}</span>
				<input v-bind:type="li.type" v-bind:placeholder="li.placeholder" />
				<span class="get_code" v-show="li.isShow">获取验证码</span>
			</li>
		</ul>
		<div class="c_login">确认</div>
	</div>
</template>

<script>
	import headerCom from '../header'
	export default{
		components : { headerCom },
		data(){
			return{
				ll:[
					{
						title:"",
						type:"text",
						placeholder:"请输入手机号码",
						isShow:false
					},
					{
						title:"",
						type:"text",
						placeholder:"请输入验证码",
						isShow:true
					},
					{
						title:"",
						type:"password",
						placeholder:"请输入新密码",
						isShow:false
					},
					{
						title:"",
						type:"password",
						placeholder:"确认新密码",
						isShow:false
					},
				]
			}
		}
	}
</script>

<style>
	body{
		background: #EFEFEF;
	}
	#login{
		width: 100%;
		overflow: hidden;
	}
	.title .return{
		display: block;
		width: 14px;
		height: 14px;
		border-top:1px solid #696969;
		border-left: 1px solid #696969;
		position: fixed;
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
	.login_l{
		width: 100%;
	}
	.login_l .login_i{
		width: 100%;
		height: 36px;
		line-height: 36px;
		margin-top: 1px;
		background: white;
		text-align: left;
		position: relative;
	}
	.login_l .login_i .login_i_t{
		display: inline-block;
		width: 40px;
		font-size: 14px;
		text-align: center;
	}
	.login_l .login_i input{
		display: inline-block;
		width: 60%;
		height: 34px;
		line-height: 34px;
		border: none;
		outline: none;
	}
	.login_l .login_i .get_code{
		position: absolute;
		height: 30px;
		top: 3px;
		line-height: 30px;
		width: 80px;
		background: #FF7417;
		color: white;
		text-align: center;
		border-radius: 6px;
		right: 5px;
	}
	.c_login{
		width: 86%;
		margin: auto;
		height: 30px;
		line-height: 32px;
		text-align: center;
		font-size: 16px;
		color: white;
		background: #FF7417;
		border-radius: 14px;
		margin-top: 20px;
	}
</style>