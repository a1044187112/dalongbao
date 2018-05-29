<template>
	<div id="a_a">
		<header-com header-show="none" title="编辑银行卡" path=" "></header-com>
		<ul class="a_l">
			<li class="a_i">
				<span class="a_i_t">姓名</span>
				<input type="text" placeholder="请输入持卡人姓名" />
			</li>
			<li class="a_i">
				<span class="a_i_t">开户银行</span>
				<div class="a_i_m">
					<select>
						<option v-for="t1 in t1s">{{t1.textVal}}</option>
					</select>
				</div>
			</li>
			<li class="a_i">
				<span class="a_i_t">银行支行</span>
				<input type="text" placeholder="收货人电话" />
			</li>
			<li class="a_i">
				<span class="a_i_t">银行账号</span>
				<input type="text" placeholder="收货人电话" />
			</li>
		</ul>
		<div class="add_address">
			确认
		</div>
	</div>
</template>

<script>
	import headerCom from '../../header'
	export default{
		components : { headerCom },
		data(){
			return{
				t1s:[
					{textVal:"中国农业银行"},
					{textVal:"中国工商银行"},
					{textVal:"中国建设银行"},
				]
			}
		}
	}
</script>

<style>

	.a_a{
		background: white;
	}
	.a_l .a_i{
		height: 48px;
		line-height: 48px;
		font-size: 0;
		border-top: 1px solid #EFEFEF;
		background: white;
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
	.a_l .a_i>input{
		display: inline-block;
		width: 70%;
		height: 48px;
		line-height: 48px;
		border: none;
		outline: none;
		font-size: 16px;
		text-align: left;
	}
	
	.a_l .a_i .a_i_m select{
		width: 120px;
		height: 36px;
		line-height: 36px;
		outline: none;
		border: none;
		font-size: 16px;
	}
	.a_l .a_i .a_i_m select option{
		font-size: 16px;
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
		margin-top: 20px;
	}
</style>