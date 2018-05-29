<template>
	<div id="ied">
		<header-com header-show="none" title="收支明细" path=" "></header-com>
		<ul class="ied_l">
			<li v-for="info in infos">
				<div class="ied_i">
					<p>{{ info.year }}</p>
					<p>{{ info.dateTime }}</p>
				</div>
				<div class="ied_i">
					<p>{{ info.point }}</p>
					<p>{{ info.info }}</p>
				</div>
				<div class="ied_i">
					<p>{{ info.staus }}</p>
				</div>
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
					{
						year:"2017",
						dateTime:"11-29",
						point:"60000",
						info:"注册会员成功",
						staus:"成功"
					},
					{
						year:"2017",
						dateTime:"11-29",
						point:"60000",
						info:"注册会员成功",
						staus:"成功"
					},
					{
						year:"2017",
						dateTime:"11-29",
						point:"60000",
						info:"注册会员成功",
						staus:"成功"
					}
				]
			}
		}
	}
</script>

<style>
	body{
		background: #EFEFEF;
	}
	.ied_l li{
		border-top: 1px solid #EFEFEF;
		padding: 15px 0;
		font-size: 0;
		background: white;
	}
	.ied_l li .ied_i{
		display: inline-block;
		width: 15%;
		text-align: center;
		vertical-align: top;
	}
	.ied_l li .ied_i:nth-child(3){
		width: 10%;
	}
	.ied_l li .ied_i:nth-child(2){
		width: 70%;
		text-align: left;
	}
	.ied_l li .ied_i p{
		line-height: 24px;
	}
	.ied_l li .ied_i:nth-child(2) p:first-child{
		color: #FF0000;
		font-size: 16px;
	}
	.ied_l li .ied_i:nth-child(3) p{
		color: #0099cc;
	}
</style>