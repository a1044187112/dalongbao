<template>
	<div id="d_o">
		<header-com header-show="none" title="购物车" path=" "></header-com>
		<parse-popups v-if="isShow" @closeParentPopups="closePopups"></parse-popups>
		<div class="d_o_i">
			<!--<div class="d_i">
				<p>{{ orderAddress }}</p>
				<p>{{orderName}} {{orderPhone}}</p>
			</div>
			<div class="d_i">
				<router-link class="d_i_sel" to="/addressMan/manShipAddress" >+&nbsp;&nbsp;选择收货地址</router-link>
			</div>-->
			<div class="d_i">
				<div class="d_i_i">
					<input class="d_i_sle" type="checkbox" name="shop_cart" @click="getTotalPrice"  /><label for="shop_cart"></label>
					<img v-bind:src="comImgSrc"/>
					<div class="d_i_info">
						<div>{{ comName }}</div>
						<div @click="paramSelected"><span>964灰色；165/M</span><span></span></div>
						<div>￥{{ comPrice }}</div>
						<div><span class="sub" @click="sub">-</span><span class="num">1</span><span class="add" @click="add">+</span></div>
					</div>
					<span class="d_i_del">x</span>
				</div>
			</div>
		</div>
		<div class="d_o_f d_o_show">
			<div class="d_f_i">
				<span @click="selectAllBtnClick">
					<input class="select_all" type="checkbox" name="selectAll" />
					<span>全选</span>
				</span>
				<span>
					合计：<span class="d_f_price">￥{{ totalPrice }}</span>
				</span>
			</div>
			<div class="d_f_i" @click="clearingBtnClick" >
				结算
			</div>
		</div>
		<div class="d_o_f d_o_hidden">
			<div class="d_f_i">
				<span>合计：<span class="d_f_price">￥88</span></span>
			</div>
			<div class="d_f_i">
				结算
			</div>
		</div>
	</div>
</template>

<script>
	import headerCom from '../header'
	import parsePopups from '../popups/parsePopups'
	export default{
		components : { headerCom,parsePopups },
		data(){
			return{
				isShow:false,
				comImgSrc:"../../../static/img/comShow1.jpg",
				comName:"双肩包",
				comPrice:"88.0",
				buyNum:"1",
				buyPrice:"88",
				totalPrice:"0",
			}
		},
		methods : {
			selectAllBtnClick(event){
				var checkedArray = document.getElementsByClassName("d_i_sle");
				if(document.getElementsByClassName("select_all")[0].checked){
					for (var i = 0; i < checkedArray.length;i++) {
						checkedArray[i].checked = true;
					}
				}else{
					for (var i = 0; i < checkedArray.length;i++) {
						checkedArray[i].checked = false;
					}
				}
				this.getTotalPrice();  // 计算总的价格
			},
			paramSelected(){
				this.isShow = true;
			},
			closePopups(){
				this.isShow = false;
			},
			sub(event){
				var buyNum = event.currentTarget.nextElementSibling.textContent;
				buyNum==1?buyNum:--buyNum;
				event.currentTarget.nextElementSibling.textContent = buyNum;
				this.getTotalPrice();  // 计算总的价格
			},
			add(event){
				++event.currentTarget.previousElementSibling.textContent;
				this.getTotalPrice();// 计算总的价格
			},
			clearingBtnClick(){
				var data = {
					products:[
						{
							"pid":"comId",
							"quantity":"2",
							"comment":"买家留言",
							"seDesc":["红色","165"]
						}
					]
				};
				var checkedArray = document.getElementsByClassName("d_i_sle");
				for (var i = 0; i < checkedArray.length;i++) {
					if (checkedArray[i].checked) {  // 获取选中的商品数据
						data.products[i].quantity = checkedArray[i].parentElement.children[3].children[3].children[1].textContent;
						
					} 	
				}
			},
			
			getTotalPrice(){
				var tPrice = 0; 
				var checkedArray = document.getElementsByClassName("d_i_sle");
				for (var i = 0; i < checkedArray.length;i++) {
					if (checkedArray[i].checked) {  // 获取选中的商品数据
						var comNum = checkedArray[i].parentElement.children[3].children[3].children[1].textContent;  // 数量 
						var unitPriceString = checkedArray[i].parentElement.children[3].children[2].textContent;
						var unitPrice = parseInt(unitPriceString.substring(1,unitPriceString.length));
						tPrice += ( unitPrice*comNum );
					} 	
				}
				this.totalPrice = tPrice;
			},
		}
	}
	
</script>

<style>
	body{
		background: #EFEFEF;
	}
	.d_o_i{
		background: white;
	}
	.d_o_i .d_i{
		border-top: 1px solid #EFEFEF;
		padding: 15px 0;
	}
	.d_o_i .d_i .d_i_i{
		width: 90%;
		margin: auto;
		position: relative;
	}
	.d_o_i .d_i .d_i_sle{
		position: absolute;
		top: 56px;
		left: 0;
		z-index: 12;
		opacity: 0;
	}
	.d_o_i .d_i .d_i_sle + label{
		display: inline-block;
		height: 14px;
		width: 14px;
		line-height: 14px;
		border: 1px solid #696969;
		border-radius: 50%;
		text-align: center;
		vertical-align: middle;
		position: absolute;
		top: 55px;
		left: 0;
		z-index: 11;
	}
	.d_o_i .d_i .d_i_sle:checked + label{
		 background-color: white;
		 border: 1px solid #696969;
	}
	.d_o_i .d_i .d_i_sle:checked + label:after{
		content: "\2714";
	}
	
	
	
	.d_o_i .d_i .d_i_i>img{
		width: 40%;
		height: 135px;
	}
	.d_o_i .d_i .d_i_i .d_i_info{
		display: inline-block;
		width: 40%;
		text-align: left;
		vertical-align: top;
	}
	.d_o_i .d_i .d_i_i .d_i_info>div{
		font-size: 16px;
		padding-left: 10px;
	}
	.d_o_i .d_i .d_i_i .d_i_info>div:first-child{
		height: 60px;
	}
	.d_o_i .d_i .d_i_i .d_i_info>div:nth-child(2){
		display: inline-block;
		background: #EFEFEF;
		padding: 2px 6px;
		margin-left: 10px;
		border-radius: 4px;
	}
	.d_o_i .d_i .d_i_i .d_i_info>div:nth-child(2)>span:last-child{
		display: inline-block;
		width: 6px;
		height: 6px;
		border: 1px solid #afafaf;
		transform: rotate(45deg);
		margin-left: 5px;
		margin-top: -5px;
		border-left: none;
		border-top: none;
		vertical-align: middle;
	}
	.d_o_i .d_i .d_i_i .d_i_info>div:nth-child(3){
		color: #FF0000;
		font-weight: 600;
	}
	.d_o_i .d_i .d_i_i .d_i_info>div .sub,
	.d_o_i .d_i .d_i_i .d_i_info>div .num,
	.d_o_i .d_i .d_i_i .d_i_info>div .add{
		display: inline-block;
		height: 28px;
		width: 28px;
		border: 1px solid #EFEFEF;
		text-align: center;
		line-height: 28px;
		font-size: 16px;
	}
	.d_o_i .d_i .d_i_i .d_i_info>div .num{
		width: 40px;
		border-left: none;
		border-right: none;
		margin-top: 4px;
	}
	.d_o_i .d_i .d_i_i .d_i_del{
		position: absolute;
		top: 0;
		right: 0;
		font-size: 18px;
	}
	
	

	.d_o_f{
		width: 100%;
		height: 60px;
		line-height: 60px;
		font-size: 0;
	}
	.d_o_f .d_f_i{
		display: inline-block;
		font-size: 16px;
		width: 25%;
		background: #ff6600;
		color: white;
	}
	.d_o_f .d_f_i:first-child{
		width: 75%;
		background: white;
		color: black;
	}
	.d_o_f .d_f_i:first-child>span{
		display: inline-block;
		width: 25%;
		margin: auto;	
		text-align: left;
		font-size: 16px;
	}
	.d_o_f .d_f_i:first-child>span:nth-child(2){
		text-align: right;
		width: 65%;
	}
	.d_o_f .d_f_i:first-child>span>span{
		font-size: 16px;
	}
	.d_o_f .d_f_i:first-child .d_f_price{
		font-size: 16px;
		color: red;
		font-weight: 600;
	}
	.d_o_show{
		position: fixed;
		bottom: 0;
		z-index: 99;
		border-top: 1px solid #dfdfdf;
	}
	.d_o_hidden{
		visibility: hidden;
	}
</style>