<template>
	<div class="i_c">
		<ul class="com" >
			<li class="img_t" >
				<div class="com_img">
					<div class="com_img_i">
						<ul >
							<li v-for="img in msg" >
								<router-link v-bind:to="img.Url+'?id='+img.id">
									<img v-bind:src="img.cSrc2"/>
									<span class="b_span">{{img.com_name1}}</span>
									<span class="b_span">￥{{img.com_price1}}<span class="buy_num">{{ img.num }} 人已付款</span></span>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		props : ['msg'],
	}
</script>

<style scoped>
	*{
		font-family: "微软雅黑";
		/*overflow: hidden;*/
	}
	.i_c .com{
		width:100%;
		font-size:0;
		text-align: left;
	}
	.i_c .com .com_img{
		width: 100%;
		display:inline-block;
	}
	.i_c .com .com_img .com_img_i{
		display:inline-block;
		width: 100%;
	}
	.i_c .com .com_img .com_img_i ul{
		width:96%;
		font-size:0;
		margin-left: 2%;
	}
	.i_c .com .com_img .com_img_i li{
		display:inline-block;
		width:49.5%;
		position: relative;
		text-align:center;
		background: white;
		margin-top: 6px;
	}
	.i_c .com .com_img .com_img_i li:nth-child(2n){
		margin-left: 1%;
	}
	.i_c .com .com_img .com_img_i li img{
		display:block;
		width:100%;
		margin:auto;
	}
	.i_c .com .com_img .com_img_i li .b_span{
		margin-top: 4px;
		text-align: left;
		width:90%;
		font-size:8px;
		line-height: 14px;
		margin-left:5%;
		height: 28px;
		/* 多行文本超出部分以省略号显示 */
		display:-webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		
	}
	.i_c .com .com_img .com_img_i li .b_span:last-child{
		display:block;
		height:24px;
		line-height:24px;
		font-weight:600;
		z-Index:5;
		bottom:10px;
		border-radius:5px;
		color:red;
	}
	.i_c .com .com_img .com_img_i li .buy_num{
		font-size: 12px;
		color: #000;
		font-weight: 400;
		float: right;
	}
</style>