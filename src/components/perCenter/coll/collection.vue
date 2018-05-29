<template>
	<div id="coll">
		<header-com header-show="none" title="我的收藏" path=" "></header-com>
		<div class="c_l">
			<li v-for="info in infos">
				<img :src="info.comImgSrc" />
				<div class="c_i_i">
					<p class="c_intro">{{ info.intro }}</p>
					<span class="c_price">￥{{ info.price }}</span>
				</div>
				<span class="c_btn" @click="cancelCollection">取消收藏</span>
			</li>
		</div>
	</div>
</template>

<script>
	import headerCom from '../../header'
	import { REQUESTADDRESS } from '../../../../static/global.js'
	export default{
		components : { headerCom },
		data(){
			return {
				infos : [
					{ comImgSrc: "../../../../static/img/comShow1.jpg", intro:"旅行包",price:"88"},
					{ comImgSrc: "../../../../static/img/comShow1.jpg", intro:"旅行包",price:"88"},
					{ comImgSrc: "../../../../static/img/comShow1.jpg", intro:"旅行包",price:"88"},
				]
			}
		},
		mounted(){
			this.getMyCollection();
		},
		methods : {
			getMyCollection(){
				this.ajax.get(REQUESTADDRESS+"/favoritesproduct/getMyCollection?index=1&size=16",true,this.getMyCollectionSCB);
			},
			getMyCollectionSCB(data){
	    		if(data.code == "FAIL"){
	    			this.errorHandling.getErrorMsg(data);
	    		}
	    	},
			cancelCollection(){
				if(!confirm("是否取消收藏？")){} // 确认返回true  删除item
        		
				var param = this.getParam("id");
				this.ajax.post(REQUESTADDRESS+"/favoritesproduct/cancelCollection",{"pid":"55"},true,this.cancelCollectionSCB);
			},
			cancelCollectionSCB(){
	    		if(data.code == "FAIL"){
	    			this.errorHandling.getErrorMsg(data);
	    		}
	    	},
		}
	}
</script>


<style>
	body{
		background: #EFEFEF;
	}
	#coll{
		background: white;
	}
	.title .return{
		display: block;
		width: 14px;
		height: 14px;
		border-top:1px solid #696969;
		border-left: 1px solid #696969;
		position: absolute;
		font-size: 24px;
		top: 14px;
		left: 14px;
		/* 旋转  */
		transform: rotate(-45deg);
		-ms-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
	}
	.title .title_text{
		font-size: 16px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		background: white;
		padding-top: 5px;
	}
	.c_l li{
		text-align: left;
		padding: 20px 0;
		border-top: 1px solid #EFEFEF;
	}
	.c_l li img{
		width: 30%;
		margin-left: 15px;
	}
	.c_l li .c_i_i{
		display: inline-block;
		vertical-align: top;
	}
	.c_l li .c_i_i .c_price,
	.c_l li .c_i_i .c_intro{
		margin-left: 10px;
		font-size: 16px;
		height: 80px;
	}
	.c_l li .c_i_i .c_price{
		color: #FF7417;
	}
	.c_l li .c_btn{
		height: 28px;
		font-size: 14px;
		text-align: center;
		line-height: 28px;
		width: 100px;
		float: right;
		border: 1px solid #FF7417;
		color: #FF7417;
		border-radius: 6px;
		margin-right: 10px;
		margin-top: 80px;
	}
</style>