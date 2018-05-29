<template>
	<div id="login">
		<header-com header-show="none" title="修改密码" path=" "></header-com>
		
		<ul class="login_l">
			<li class="login_i" >
				<span class="login_i_t">旧密码：</span>
				<input type="password" v-model="oldPwd" />
			</li>
			<li class="login_i" >
				<span class="login_i_t">新密码：</span>
				<input type="password" v-model="newPwd" />
			</li>
			<li class="login_i" >
				<span class="login_i_t">确认新密码：</span>
				<input type="password" v-model="conNewPwd" />
			</li>
		</ul>
		<div class="c_login" @click="modifyPwd">确认</div>
	</div>
</template>

<script>
	import headerCom from '../header'
	import { REQUESTADDRESS } from '../../../static/global.js'
	export default{
		components : { headerCom },
		data(){
			return{
				 oldPwd:"",
				 newPwd:"",
				 conNewPwd:"",
			}
		},
		methods : {
			modifyPwd(){
				if(this.oldPwd==""){alert("请输入密码！"); return;}
				else if(this.newPwd==""||this.newPwd!=this.conNewPwd){alert("请确认新密码！");return;}
				else 
					this.submitModifyPwd();
			},
			submitModifyPwd(){
				var data = {"pwd":this.oldPwd,"newPwd":this.newPwd,"cfmPwd":this.conNewPwd};
				this.ajax.post(REQUESTADDRESS+"/users/changeUserPwd",data,true,this.submitModifyPwdSCB);
			},
			submitModifyPwdSCB(data){
				if(data.code == "FAIL"){
        			this.errorHandling.getErrorMsg(data);
        		}
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
	.c_login{
		width: 86%;
		margin: auto;
		height: 48px;
		line-height: 48px;
		text-align: center;
		font-size: 16px;
		color: white;
		background: #FF7417;
		border-radius: 24px;
		margin-top: 40px;
	}
</style>