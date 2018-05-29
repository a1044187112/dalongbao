<template>
	<div id="login">
		<header-com header-show="none" title="登 陆" path=" "></header-com>
		<ul class="login_l">
			<li class="login_i" >
				<span class="login_i_t">账户:</span>
				<input type="text" v-model="account" />
			</li>
			<li class="login_i" >
				<span class="login_i_t">密码:</span>
				<input type="password" v-model="pw" />
			</li>
			<li class="login_i">
				<span class="login_i_t">验证码:</span>
				<input type="text" v-model="verifCode" />
				<img class="login_i_img" src="../../../static/img/y1.jpg" />
			</li>
		</ul>
		<div class="find_pw"><router-link to="remartpw"><span>忘记密码？</span></router-link></div>
		<div class="c_login" @click="loginCon">确认</div>
	</div>
</template>

<script>
	import headerCom from '../header'
	import { REQUESTADDRESS } from '../../../static/global.js'
//	import { ajaxObject } from '../../config/util.js'
	export default{
		components : { headerCom },
		data(){
			return{
				account:"",
				pw:"",
				verifCode:"",
			}
		},
		methods : {
			loginCon(){
				var form = new FormData();
				form.append("name",this.account);
				form.append("pwd",this.pw);
				
				if(this.account==""){ alert("请输入账户名"); return;}
				else if(this.pw==""){ alert("请输入密码"); return;}
				else if(this.verifCode==""){ alert("请输入验证码"); return;}
				else{
					console.log(this.account+"----------"+this.pw)
					this.ajax.post(REQUESTADDRESS+"/users/doLogin",form,true,this.sucCallback);
				}
			},
			sucCallback(data){
				this.$router.push({path:"/"});
			},
		},
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
	.login_l{
		width: 100%;
	}
	.login_l .login_i{
		width: 100%;
		height: 48px;
		line-height: 48px;
		margin-top: 1px;
		background: white;
		text-align: left;
		position: relative;
	}
	.login_l .login_i .login_i_t{
		display: inline-block;
		width: 100px;
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
	.login_l .login_i .login_i_img{
		position: absolute;
		height: 28px;
		top: 10px;
		right: 10px;
	}
	.find_pw{
		width: 96%;
		text-align: right;
		height: 28px;
		line-height: 28px;
	}
	.find_pw span{
		color: blue;
	}
	.c_login{
		width: 86%;
		margin: auto;
		height: 48px;
		line-height: 48px;
		text-align: center;
		font-size: 18px;
		color: white;
		background: #FF7417;
		border-radius: 24px;
		margin-top: 40px;
	}
</style>