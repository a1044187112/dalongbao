<template>
	<div id="c_i">
		<header-com header-show="none" title="商家入驻申请" path=" "></header-com>
		<ul class="c_l">
			<li class="c_i">
				<span>头像：</span>
				<img src="../../../static/img/defaulthead.jpg" />
			</li>
			<li class="c_i">
				<span>背景图：</span>
				<span class="c_i_max">点击上传图片</span>
			</li>
			<li class="c_i">
				<span>商家名称：</span>
				<input type="text" placeholder="请输入商家名称" />
			</li>
			<li class="c_i">
				<span>地址：</span>
				<div class="c_i_select">
					<select>
						<option v-for="ad in ads">{{ ad.textVal }}</option>
					</select>
					<select>
						<option v-for="ad in ads">{{ ad.textVal }}</option>
					</select>
					<select>
						<option v-for="ad in ads">{{ ad.textVal }}</option>
					</select>
				</div>
				
			</li>
			<li class="c_i">
				<span>详细地址：</span>
				<input type="text" placeholder="请输入详细地址" />
			</li>
			<li class="c_i">
				<span>身份证：</span>
				<span class="c_i_hp">正面</span>
				<span class="c_i_hp">反面</span>
			</li>
			<li class="c_i">
				<span>营业执照：</span>
				<span class="c_i_max">点击上传图片</span>
			</li>
		</ul>
		<div class="add_address">
			确认
		</div>
	</div>
</template>

<script>
	import headerCom from '../header'
	export default{
		components : { headerCom },
		data(){
			return {
				ads : [
					{ textVal : "北京" },
					{ textVal : "北京" },
					{ textVal : "北京" },
					{ textVal : "北京" },
				]
			}
		}
	}
</script>

<style>
	#c_i{
		background: white;
	}
	.c_l .c_i{
		border-top: 1px solid #E6E6E6;
		padding: 20px 0;
		text-align: left;
	}
	.c_l .c_i span{
		display: inline-block;
	}
	.c_l .c_i span:first-child{
		width: 25%;
		text-align: center;
		font-size: 16px;
		vertical-align: top;
	}
	.c_l .c_i .c_i_hp,
	.c_l .c_i .c_i_max,
	.c_l .c_i img:nth-child(2){
		height: 72px;
		line-height: 72px;
		width: 72px;
		text-align: center;
		background: #EFEFEF;
		font-size: 16px;
		border-radius: 4px;
	}
	.c_l .c_i .c_i_max{
		height: 150px;
		line-height: 150px;
		width: 70%;
	}
	.c_l .c_i .c_i_hp{
		width: 32%;
		height: 100px;
		margin-right: 10px;
		line-height: 100px;
	}
	.c_l .c_i .c_i_select,
	.c_l .c_i>input{
		height: 28px;
		line-height: 28px;
		width: 70%;
		font-size: 14px;
		border: none;
		outline: none;
	}
	.c_l .c_i .c_i_select{
		display: inline-block;
		width: 60%;
	}
	.c_l .c_i .c_i_select select{
		display: block;
		margin-top: 10px;
		font-size: 16px;
		width: 50%;
		text-align: center;
		height: 28px;
		border: none;
	}
	.c_l .c_i .c_i_select select:first-child{
		margin-top: 0;
	}
	.c_l .c_i .c_i_select select option{
		font-size: 16px;
		text-align: center;
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
		margin-bottom: 40px;
	}
</style>