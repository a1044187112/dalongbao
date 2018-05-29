<template>
	<div id="com">
		<div id="search">
			<input v-model="message" placeholder="搜索" />
			<img class="search_img" v-bind:src="searchImgSrc">
		</div>
		<div class="com_f">
			<div class="c_i" id="leftMenu">
				<ul class="c_i_l">
					<li class="c_i_i" @click="classListClick(classItem.id)" v-for="classItem in classList" v-bind:data-id="classItem.id">{{ classItem.textVal }}</li>
				</ul>
			</div>
			<div class="c_i">

				<share-com v-bind:msg="imgtC"></share-com>
			</div>
		</div>
	</div>
</template>
<script>
	import shareCom from './shareCom'
	import { REQUESTADDRESS } from '../../../static/global.js'
	export default {
		components: {
			shareCom
		},
		data() {
			return {
				message: '',
				searchImgSrc: '../../static/img/ico1.png',
				classList: [{
					textVal: "箱包",
					id: ""
				}, ],
				imgtC: [{
					com_name1: "旅行包",
					cSrc2: "../../static/img/comShow1.jpg",
					com_price1: "￥199.0",
					num: "500",
					Url: "/comClass/comInfo"
				},{
					com_name1: "旅行包",
					cSrc2: "../../static/img/comShow1.jpg",
					com_price1: "￥199.0",
					num: "500",
					Url: "/comClass/comInfo"
				}]
			}
		},
		mounted() {
			this.getAjax(false); // 获取分类页面所有商品
			
			this.eventScroll();
		},
		methods: {
			getAjax(id) {
				if(id) {
					var data = {"cid": id,"key": "美食","index": 2,size: 8};
					this.ajax.post(REQUESTADDRESS + "/productlist/getProduct", data, true, this.getAjaxSCB);
				} else
					this.ajax.get(REQUESTADDRESS + "/productlist/getCategoryProduct", true, this.getAjaxSCB);
			},
			getAjaxSCB(data) {
				console.log(data);
				if(data.code == "FAIL") {
					this.errorHandling.getErrorMsg(data);
				} else {
					this.classList = [];
					this.imgtC = [];
					data.data.forEach((item, i) => {
						this.classList.push({
							textVal: item.category.name,
							id: item.category.id
						});
						item.productlists.forEach((item1, i) => {
							var itemObject = {
								com_name1: item1.descrition.slice(3, item1.descrition.length - 4),
								cSrc2:	REQUESTADDRESS + item1.img,
								com_price1: item1.price,
								num: "500",
								Url: "/comClass/comInfo",
								id: item1.id
							};
							this.imgtC.push(itemObject);
						});
					});
				}
		},

			classListClick(id) { // 根据分类ID获取商品
				this.getAjax(id);
			},
			
			eventScroll(){
				var scrollTop;
				window.addEventListener("scroll",function(){ 
					scrollTop = window.pageYOffset||document.body.scrollTop; // 滚动了多少px
					var a  = scrollTop;
					if(!document.getElementById("leftMenu")){  // 判断是否在当前页面 如果不是 则取消监听
						window.removeEventListener("scroll",function(ecent){ event.preventDefault() });
					}else{
						if((a-66)>=0){
							document.getElementById("leftMenu").style.top = 0;
						}else{
							document.getElementById("leftMenu").style.top = (66 - screenTop)+"px";
						}
					}
				});
			}
		}
	}
</script>

<style>
	#search {
		width: 100%;
		background-color: rgb(255, 84, 0);
		padding: 15px 0;
		height: 36px;
		position: relative;
	}
	
	#search input {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		display: inline-block;
		height: 36px;
		line-height: 36px;
		width: 86%;
		margin: auto;
		border-radius: 20px;
		color: #2c3e50;
		border: none;
		text-align: left;
		background-color: rgb(255, 127, 64);
		font-size: 14px;
		color: white;
		padding-left: 5%;
		outline: none;
	}
	
	#search .search_img {
		position: absolute;
		width: 18px;
		height: 18px;
		top: 24px;
		right: 7.5%;
	}
	
	#com {
		width: 100%;
		font-size: 0;
		text-align: right;
	}
	
	#com .c_i {
		display: inline-block;
		width: 25%;
		font-size: 16px;
		vertical-align: top;
		overflow: auto;
		background: #DFDFDF;
	}
	
	#com .c_i:first-child {
		position: fixed;
		top: 66px;
		bottom: 0;
		left: 0;
		text-align: center;
		background: white;
	}
	
	#com .c_i:nth-child(2) {
		width: 75%;
		height: 100%;
	}
	
	#com .c_i .c_i_l {
		float: left;
		width: 100%;
	}
	
	#com .c_i .c_i_i {
		width: 100%;
		height: 36px;
		line-height: 36px;
		border-bottom: 1px solid #EFEFEF;
		border-right: 1px solid #EFEFEF;
		margin-left: -1px;
		cursor: pointer;
	}
	
	#com .c_i .c_i_i:hover {
		background: #E6E6E6;
	}
	
	#com .c_i .c_i_i:first-child {
		margin-top: 4px;
	}
	/*  隐藏滚动条 */
	
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		background: rgba(0, 0, 0, 0);
	}
</style>