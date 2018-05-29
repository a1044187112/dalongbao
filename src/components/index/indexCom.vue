<template>
	<div class="i_c">
		<ul class="com" >
			<li class="img_t" v-for="imgt in imgts">
				<div class="img_t_item"><img class="title_img" v-bind:src="imgt.src"/></div>
				<div class="com_img">
					<div class="com_img_i">
						<ul >
							<li v-for="imgtc in imgt.imgtC">
								<router-link v-bind:to="imgtc.toLink">
									<span>{{imgtc.com_name1}}</span>
									<img v-bind:src="imgtc.cSrc2"/>
									<span>{{imgtc.com_price1}}</span>
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
		data ()  {
			return {
				imgts: [
					{
						src:"../../static/img/tit1.jpg",
						imgtC:[
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
						]
					},
					{
						src:"../../static/img/tit2.jpg",
						imgtC:[
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
						]
					},
					{
						src:"../../static/img/tit3.jpg",
						imgtC:[
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
						]
					},
					{
						src:"../../static/img/tit4.jpg",
						imgtC:[
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"钜惠价：￥199.0",
								toLink:"/comClass/comInfo"
							},
						]
					},

				],
			}
		},
	}
</script>

<style scoped>
	*{
		font-family: "微软雅黑";
		overflow: hidden;
	}
	.i_c .com{
		width:100%;
		font-size:0;
	}
	.i_c .com .img_t_item{
		height:52px;
		text-align:center;
		width:100%;
		background:#f7f7f7;
	}
	.i_c .com .title_img{
		height:52px;
	}
	.i_c .com .com_img{
		display:inline-block;
		padding:10px 0;
	}
	.i_c .com .com_img .com_img_i{
		display:inline-block;
	}
	.i_c .com .com_img .com_img_i ul{
		width:90%;
		font-size:0;
		margin-left:5%;
	}
	.i_c .com .com_img .com_img_i li{
		display:inline-block;
		width:50%;
		position: relative;
		text-align:center;
		padding-bottom:30px;
	}
	.i_c .com .com_img .com_img_i li img{
		display:block;
		width:70%;
		margin-left:15%;
		margin:auto;
	}
	.i_c .com .com_img .com_img_i li span{
		line-height:24px;
		font-size:14px;
	}
	.i_c .com .com_img .com_img_i li span:last-child{
		position: absolute;
		display:block;
		width:86%;
		height:28px;
		line-height:28px;
		font-weight:600;
		background:#ff3333;
		z-Index:5;
		bottom:10px;
		margin-left:7%;
		border-radius:5px;
		color:white;
	}
</style>