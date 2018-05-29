<template>
	<div class="l_b">
		<div class="l_b_t">
			小龙宝
		</div>
		<img v-bind:src="tImgSrc"/>
		<p class="l_b_p">产品套餐</p>
		<ul class="l_b_l">
			<li v-for="info in infos">
				<img v-bind:src="info.imgSrc" />
				<span class="">{{ info.grade }}</span>
				<button class="btn">立即升级</button>
				<router-link class="btn" to="/vipBuy">我要购货</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tImgSrc : "../../../static/img/t1.jpg",
				infos : [
					{ 
						imgSrc:"../../../static/img/t1.jpg",
						grade:"1星消费商"
					},
					{ 
						imgSrc:"../../../static/img/t1.jpg",
						grade:"1星消费商"
					},
					{ 
						imgSrc:"../../../static/img/t1.jpg",
						grade:"1星消费商"
					},
					{ 
						imgSrc:"../../../static/img/t1.jpg",
						grade:"1星消费商"
					},
				]
			}
		}
	}
</script>

<style>
	.l_b .l_b_t{
		width: 100%;
		height: 48px;
		text-align: center;
		line-height: 48px;
		background: rgb(255,84,0);
		font-size: 18px;
		color: white;
	}
	.l_b>img{
		width: 100%;
	}
	.l_b .l_b_p{
		height: 48px;
		line-height: 48px;
		border-bottom: 1px solid #EFEFEF;
		font-size: 16px;
	}
	.l_b .l_b_l li{
		width: 90%;
		margin: auto;
		border-bottom: 4px solid #EFEFEF;
		padding: 15px 0;
	}
	.l_b .l_b_l li img{
		width: 100%;
	}
	.l_b .l_b_l li span{
		display: inline-block;
		width: 100%;
		text-align: left;
		font-size: 14px;
		line-height: 32px;
	}
	.l_b .l_b_l li .btn{
		display: inline-block;
		width: 48%;
		background: #f88121;
		height: 48px;
		line-height: 48px;
		border: none;
		color: white;
		font-size: 16px;
		outline: none;
	}
	.l_b .l_b_l li .btn:last-child{
		background: #85dd1d;
		margin-left:2%;
	}
</style>