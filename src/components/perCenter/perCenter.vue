<template>
	<div id="p_c">
		<div class="header">
			<div class="hea_i">
				<img v-bind:src="hpImgSrc"/>
			</div>
			<ul class="hea_i">
				<li v-for="value in accInfos">
					{{ value }}
				</li>
			</ul>
			<div class="hea_i">
				<router-link class="hea_i_o" to="/longBao">开户 ></router-link>
			</div>
		</div>
		<div class="con">
			<ul class="con_l" v-for="infos in infoList">
				<li v-for="info in infos.item" >
					<router-link v-bind:to="info.Url"><span>{{ info.num}}</span>
					<span>{{ info.textVal}}</span></router-link>
				</li>
			</ul>
			<div class="con_i">
				<div @click="viewMyOrder('')">
					<span class="con_i_i">我的订单</span>
					<span class="con_i_i">查看全部订单></span>
				</div>
			</div>
			<ul class="con_m">
				<li v-for="li in ll1" @click="viewMyOrder(li.itemId)">
					<!--<router-link v-bind:to="li.Url">-->
						<img v-bind:src="li.imgSrc" />
						<span>{{li.textVal}}</span>
					<!--</router-link>-->
				</li>
			</ul>
			<div class="con_i">
				<router-link to="/businCheckIn">
					<span class="con_i_i">商家中心</span>
					<span class="con_i_i">商家入驻></span>
				</router-link>
			</div>
			<ul class="con_m con_m_s">
				<li v-for="li in ll2">
					<router-link v-bind:to="li.Url">
						<img v-bind:src="li.imgSrc" />
						<span>{{li.textVal}}</span>
					</router-link>
				</li>
			</ul>
			<ul class="con_m con_m_s">
				<li v-for="li in ll3">
					<router-link v-bind:to="li.Url">
						<img v-bind:src="li.imgSrc" />
						<span>{{li.textVal}}</span>
					</router-link>
				</li>
			</ul>
			<div class="con_i">
				<router-link to="/perCenter/userMsg">
					<span class="con_i_i">通知消息</span>
					<span class="con_i_i">></span>
				</router-link>
			</div>
			<div class="con_i">
				<router-link to="/perCenter/accSafe/mySetting">
					<span class="con_i_i">我的设置</span>
					<span class="con_i_i">></span>
				</router-link>
			</div>
			<div class="con_i">
				<router-link to="">
					<span class="con_i_i">下载APP</span>
					<span class="con_i_i">></span>
				</router-link>
			</div>
			
		</div>
		 <footer-menu></footer-menu>
	</div>
</template>
	
<script>
	import footerMenu from '../../components/footerMenu'
	export default {
		components:{ footerMenu },
		data(){
			return{
				hpImgSrc:"../../../static/pcImg/ico1.png",
				accInfos:{
					name:"th4111",
					nameval:"th4111",
					accGrade:"4形消费商[限额：18000]",
					integral:"小龙宝积分：76800"
				},
				infoList : [
					{
						item : [
							{ 
								num:"75600",
								textVal:"小龙宝分享收益",
								Url:"/perCenter/moneyMan/incomeExpDetails"
							},
							{ 
								num:"75600",
								textVal:"分享收益",
								Url:"/perCenter/moneyMan/incomeExpDetails"
							},
							{ 
								num:"75600",
								textVal:"购物券",
								Url:"/payQRCode"
							},
						]
					},
					{
						item : [
							{ 
								num:"75600",
								textVal:"首购券",
								Url:"/perCenter/moneyMan/transferVou"
							},
							{ 
								num:"75600",
								textVal:"兑换券",
								Url:"/perCenter/moneyMan/voucher"
							},
							{ 
								num:"75600",
								textVal:"大龙宝",
								Url:"/perCenter/moneyMan/lbBalance"
							},
						],
					}
				],
				
				ll1 : [
					{ 
						imgSrc:"../../../static/pcImg/ico2.png",
						textVal:"待付款",
						Url:"/myOrder/order",
						itemId:"0"
					},
					{ 
						imgSrc:"../../../static/pcImg/ico3.png",
						textVal:"待发货",
						Url:"/myOrder/order",
						itemId:"1"
					},
					{ 
						imgSrc:"../../../static/pcImg/ico4.png",
						textVal:"待收货",
						Url:"/myOrder/order",
						itemId:"2"
					},
					{ 
						imgSrc:"../../../static/pcImg/ico5.png",
						textVal:"待评价",
						Url:"/myOrder/order",
						itemId:"3"
					},
					{ 
						imgSrc:"../../../static/pcImg/ico6.png",
						textVal:"退款/售后",
						Url:"/myOrder/order",
						itemId:""
					},
				],
				ll2 : [
					{ 
						imgSrc:"../../../static/pcImg/ico7.png",
						textVal:"我的邀请",
						Url:"/perP"
					},
					{ 
						imgSrc:"../../../static/pcImg/ico8.png",
						textVal:"我的人脉",
						Url:"/perP"
					},
					{ 
						imgSrc:"../../../static/pcImg/ico9.png",
						textVal:"我的特权",
						Url:"/lbBalance"
					},
					{ 
						imgSrc:"../../../static/pcImg/ico10.png",
						textVal:"商品收藏",
						Url:"/perCenter/coll/collection"
					},
				],
				ll3 : [
					{ 
						imgSrc:"../../../static/pcImg/ico11.png",
						textVal:"收货地址",
						Url:"/addressMan/manShipAddress"
					},
					{ 
						imgSrc:"../../../static/pcImg/ico12.png",
						textVal:"账户安全",
						Url:"/perCenter/accSafe/accSafe"
					},
					{ 
						imgSrc:"../../../static/pcImg/ico13.png",
						textVal:"关于我们",
						Url:"/userHelp"
					},
					{ 
						imgSrc:"../../../static/pcImg/ico14.png",
						textVal:"帮助中心",
						Url:"/perCenter/userHelp/userHelp"
					},
				],
				
			}
		},
		methods : {
			viewMyOrder(itemId){
				this.$router.push({path:"/myOrder/order",query:{selected:itemId}});
			},
			
		}
	}
</script>

<style>
	body{
		background: #EFEFEF;
	}
	.header{
		font-size: 0;
		background: rgb(255,84,0);
		padding-top: 30px;
		padding-bottom: 20px;
	}
	.header .hea_i{
		display: inline-block;
		width: 30%;
		text-align: right;
		vertical-align: top;
		position: relative;
	}
	.header .hea_i:nth-child(2){
		width: 50%;
		text-align: left;
	}
	.header .hea_i:nth-child(3){
		width: 20% !important;
		text-align: right;
	}
	.header .hea_i>img{
		border: 1px solid #FFFFFF;
		border-radius: 50%;
	}
	.header .hea_i li{
		margin-left: 10px;
		padding: 0 10px;
		height: 24px;
		line-height: 24px;
		border-radius: 12px;
		font-size: 12px;
		background: white;
		margin-top: 5px;
	}
	.header .hea_i li:first-child{
		background: rgba(0,0,0,0);
		color: white;
		font-size: 16px;
	}
	.header .hea_i .hea_i_o{
		display: block;
		height: 48px;
		line-height: 50px;
		background: rgb(255,200,32);
		width: 90%;
		text-align: center;
		color: white;
		font-size: 16px;
		border-top-left-radius: 40%;
		border-bottom-left-radius: 40%;
		float: right;
		margin-top: 15px;
	}
	
	
	.con .con_l{
		padding: 15px 0;
		border-bottom: 2px solid #EFEFEF;
		font-size: 0;
		background: white;
	}
	.con .con_l>li{
		display: inline-block;
		width: 33%;
		border-right: 1px solid #AEAEAE;
	}
	.con .con_l>li:last-child{
		border:none;
	}
	.con .con_l>li span{
		display: block;
		font-size: 16px;
		line-height: 24px;
		color: red;
	}
	.con .con_l>li span:last-child{
		font-size: 12px;
		color: black;
	}
	
	.con .con_i{
		height: 48px;
		line-height: 48px;
		background: white;
		border-top: 1px solid #EFEFEF;
		font-size: 0;
	}
	.con .con_i:last-child{
		border-bottom: 4px solid #EFEFEF;
	}
	.con .con_i .con_i_i{
		font-size: 16px;
		text-align: left;
		display: inline-block;
		width: 46%;
	}
	.con .con_i .con_i_i:last-child{
		text-align: right;
	}
	.con .con_m{
		background: white;
		border-top: 1px solid #EFEFEF;
		padding: 15px 0;
	}
	.con .con_m>li{
		display: inline-block;
		width: 20%;
	}
	.con .con_m>li img{
		width: 45%;
	}
	.con .con_m>li span{
		display: block;
		font-size: 14px;
		text-align: center;
		margin-top: 2px;
	}
	.con .con_m_s>li{
		width: 25%;
	}
</style>