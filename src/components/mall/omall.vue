<template>
	<div id="omall">
		 <div id="search">
	     	<input v-model="message" placeholder="搜索"/>
		    <img class="search_img" v-bind:src="searchImgSrc">
	    </div>
	    <div class="om">
	    	<img class="om_img1" src="../../../static/img/defaultback.jpg" />
	    	<img class="om_img2" src="../../../static/img/defaulthead.jpg" />
	    	<p class="om_title">官方商城</p>
	    </div>
	    <div class="om_l">
	    	<div class="om_t">全部商品 <span> ({{ num }})</span></div>
	    	<ul>
	    		<li class="active">综合</li>
	    		<li>新品</li>
	    		<li>销量</li>
	    		<li>价格</li>
	    	</ul>
	    </div>
	    <share-com></share-com>
	    <div class="om_f om_f_show">
	    	<div class="om_f_i">联系电话</div>
	    	<div class="om_f_i">在线客服</div>
	    </div>
	    <div class="om_f com_f_hidden">
	    	<div class="om_f_i">联系电话</div>
	    	<div class="om_f_i">在线客服</div>
	    </div>
	</div>
</template>

<script>
	import shareCom from '../comClass/shareCom'
	export default{
		components:{ shareCom },
		data(){
			return{
				message:"",
				searchImgSrc:"../../static/img/ico1.png",
				num:"54件"
			}
		}
	}
</script>

<style>
	#search{
  width: 100%;
  background-color: rgb(255,84,0);
  padding: 15px 0;
  height: 36px;
  position: relative;
}
#search input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display:inline-block;
  height:36px;
  line-height:36px;
  width:86%;
  margin:auto;
  border-radius:20px;
  color: #2c3e50;
  border:none;
  text-align: left;
  background-color: rgb(255,127,64);
  font-size:14px;
  color: white;
  padding-left: 5%;
  outline: none;
}
#search .search_img{
	position: absolute;
	width: 18px;
	height: 18px;
	top: 24px;
	right: 7.5%;
}
.om{
	position: relative;
	border-bottom: 4px solid #EFEFEF;
}
.om .om_img1{
	height: 100px;
	width: 100%;
}
.om .om_img2{
	position: absolute;
	top: 70px;
	left: 30px;
}
.om .om_title{
	margin-left: 130px;
	height: 60px;
	font-size: 16px;
	line-height: 60px;
	text-align: left;
}
.om_l .om_t{
	font-size: 16px;
	height: 36px;
	line-height: 36px;
	border-bottom: 2px solid #FF0000;
}
.om_l .om_t span{
	font-size: 16px;
	color: #FF0000;
	margin-left:8px;
}
.om_l ul{
	font-size: 0;
}
.om_l ul li{
	display: inline-block;
	width: 25%;
	height: 48px;
	line-height: 48px;
	background: #E6E6E6;
	font-size: 16px;
	color: #969696;
}
.om_l ul li.active{
	color: #FF0000;
}
.om_f {
	height: 60px;
	font-size: 0;
}
.om_f .om_f_i{
	display: inline-block;
	width: 50%;
	font-size: 16px;
	height:60px;
	line-height: 60px;
	background: rgb(255,138,138);
	color: white;
}
.om_f .om_f_i:nth-child(2){
	background: rgb(247,188,61);
}
.om_f_show{
	position: fixed;
	bottom: 0;
	width: 100%;
}
.com_f_hidden{
	visibility: hidden;
}
</style>