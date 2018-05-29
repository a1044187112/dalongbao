<template>
	<div class="i_c">
		<ul class="com" >
			<li class="img_t" v-for="imgt in imgts">
				<div class="img_t_item"><img class="title_img" v-bind:src="imgt.src"/></div>
				<div class="com_img">
					<div class="com_img_i">
						<ul >
							<li v-for="imgtc in imgt.imgtC">
								<router-link v-bind:to="imgtc.Url" v-bind:data-id="imgtc.id">
									<img v-bind:src="imgtc.cSrc2"/>
									<span class="b_span" v-text="imgtc.com_name1">{{}}</span>
									<span class="b_span">{{imgtc.com_price1}}<span class="buy_num">{{ imgtc.num }} 人已付款</span></span>
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
 import { REQUESTADDRESS } from '../../../static/global.js'
	
	export default{
		data ()  {
			return {
				imgts: [
					{
						src:"../../static/img/tit4.jpg",
						imgtC:[
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"￥199.0",
								num:"500",
								Url:"/comClass/comInfo",
								id:""
							},
							{
								com_name1:"旅行包",
								cSrc2:"../../static/img/comShow1.jpg",
								com_price1:"￥199.0",
								num:"500",
								Url:"/comClass/comInfo",
								id:""
							},
						]
					},
					
					
					

				],
			}
		},
		mounted(){
        	this.getAjax();
        	this.pageScroll.getScroll("",this.scrollCallBack);// 监听屏幕滚动
        },
	    methods:{
	    	getAjax(){
	    		this.ajax.get(REQUESTADDRESS+"/productlist/getRandProduct?quantity=8",true,this.getAjaxSCB);
	    	},
	    	getAjaxSCB(data){
        		if(data.code == "FAIL"){
        			this.errorHandling.getErrorMsg(data);
        		}else{
//      			this.imgts[0].imgtC = [];// 清空数组
    				data.data.forEach((item,i) =>{
    					var itemObject = {
    						com_name1:item.descrition.slice(3,item.descrition.length-4),
							cSrc2:REQUESTADDRESS + item.img,
							com_price1:item.price,
							num:"500",
							Url:"/comClass/comInfo",
							id:item.id
    					};
    					this.imgts[0].imgtC.push(itemObject);
    				});
        		}
        	},
        	scrollCallBack(){
				this.getAjax();
			}
	    }
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
		width:96%;
		font-size:0;
		margin-left: 2%;
	}
	.i_c .com .com_img .com_img_i li{
		display:inline-block;
		width:47%;
		position: relative;
		text-align:center;
		background: #efefef;
		margin-top: 8px;
	}
	.i_c .com .com_img .com_img_i li:nth-child(2n){
		margin-left: 3%;
	}
	.i_c .com .com_img .com_img_i li img{
		display:block;
		width:100%;
		margin:auto;
	}
	.i_c .com .com_img .com_img_i li .b_span{
		display:block;
		text-align: left;
		width:90%;
		line-height:24px;
		font-size:14px;
		margin-left:5%;
		display:-webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		height: 48px;
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