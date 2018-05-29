<template>
	<div id="a_a">
		<header-com header-show="none" title="我要购货" path=" "></header-com>
		
		<ul class="a_l">
			<li class="a_i">
				<span class="a_i_t">会员编号</span>
				<span class="a_val">{{ vipCode }}</span>
			</li>
			<li class="a_i">
				<span class="a_i_t">推荐人</span>
				<span class="a_val">{{ vipName }}</span>
			</li>
			<li class="a_i">
				<span class="a_i_t">账号</span>
				<input type="text" placeholder="仅限英文或数字" />
			</li>
			<li class="a_i">
				<span class="a_i_t">姓名</span>
				<input type="text" placeholder="请输入验证码" />
			</li>
			<li class="a_i">
				<span class="a_i_t">密码</span>
				<input type="text" placeholder="6-8位数字或英文" />
			</li>
			<li class="a_i">
				<span class="a_i_t">密码</span>
				<input type="text" placeholder="6-8位数字或英文" />
			</li>
			<li class="a_i">
				<span class="a_i_t">验证码</span>
				<input type="text" placeholder="请输入姓名" />
				<img class="ver_code"  src="../../../static/img/y1.jpg" />
			</li>
			<li class="a_i">
				<span class="a_i_t">选择消费券</span>
				<div class="a_i_m">
					<span class="a_i_m_r active"></span>
					<span class="a_i_m_t">首购券</span>
					<span class="a_i_m_r"></span>
					<span class="a_i_m_t">大龙宝</span>
				</div>
			</li>
		</ul>
		<div class="v_b">
			<p class="v_b_intro">
				开户成功将自动扣除
			</p>
		</div>
		<div class="add_address">
			保存
		</div>
	</div>
</template>

<script>
	import headerCom from '../header'
	export default{
		components : { headerCom },
		data(){
			return{
				vipCode:"v135",
				vipName:"tt5254",
				t1s:[
					{textVal:"北京"},
					{textVal:"四川省"},
					{textVal:"贵州省"},
				],
				t2s:[
					{textVal:"北京"},
					{textVal:"四川省"},
					{textVal:"贵州省"},
				],
				t3s:[
					{textVal:"北京"},
					{textVal:"四川省"},
					{textVal:"贵州省"},
				]
				
			}
		}
	}
</script>

<style>
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
	.a_a{
		background: white;
	}
	.a_l .a_i{
		height: 48px;
		line-height: 48px;
		font-size: 0;
		border-top: 1px solid #EFEFEF;
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
	.a_l .a_i .a_i_m,
	.a_l .a_i>input,
	.a_l .a_i .a_val{
		display: inline-block;
		width: 70%;
		height: 48px;
		line-height: 48px;
		border: none;
		outline: none;
		font-size: 16px;
		text-align: left;
	}
	.a_l .a_i .a_i_m .a_i_m_r{
		display: inline-block;
		height: 16px;
		width: 16px;
		border: 1px solid #969696;
		border-radius: 50%;
		vertical-align: middle;
	}
	.a_l .a_i .a_i_m .a_i_m_r.active{
		background: #FF7417;
		border:1px solid #FF7417
	}
	.a_l .a_i .a_i_m .a_i_m_t{
		font-size: 16px;
		margin-right: 20px;
	}
	.a_l .a_i .ver_code{
		position: absolute;
		width: 70px;
		top: 6px;
		right: 10px;
	}
	.v_b{
		border-top: 1px solid #EFEFEF;
		padding-top: 15px;
	}
	.v_b .v_b_intro{
		width: 90%;
		text-align: left;
		font-size: 16px;
		margin: auto;
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