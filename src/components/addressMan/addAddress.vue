<template>
	<div id="a_a">
		<header-com header-show="none" title="添加地址" path=" "></header-com>
		<ul class="a_l">
			<li class="a_i">
				<span class="a_i_t">联系人</span>
				<input type="text" placeholder="收货人姓名" v-model="name" />
			</li>
			<li class="a_i">
				<span class="a_i_t">性别</span>
				<div class="a_i_m">
					<span id="sel_men" class="a_i_m_r active" @click="selSelected(0)"></span>
					<span class="a_i_m_t" @click="selSelected(0)">男士</span>
					<span id="sel_ms" class="a_i_m_r" @click="selSelected(1)"></span>
					<span class="a_i_m_t" @click="selSelected(1)">女士</span>
				</div>
			</li>
			<li class="a_i">
				<span class="a_i_t">电话</span>
				<input type="text" placeholder="收货人电话" v-model="phone" />
			</li>
			<li class="a_i">
				<span class="a_i_t">省/自治区</span>
				<div class="a_i_m">
					<select v-model="selectd1">
						<option v-for="t1 in t1s" value="1">{{t1.textVal}}</option>
					</select>
				</div>
			</li>
			<li class="a_i">
				<span class="a_i_t" >城市</span>
				<div class="a_i_m">
					<select v-model="selectd2">
						<option v-for="t2 in t2s" value="1">{{t2.textVal}}</option>
					</select>
				</div>
			</li>
			<li class="a_i">
				<span class="a_i_t">区/县</span>
				<div class="a_i_m">
					<select v-model="selectd3">
						<option v-for="t3 in t3s" value="1">{{t3.textVal}}</option>
					</select>
				</div>
			</li>
			<li class="a_i">
				<span class="a_i_t">详细地址</span>
				<input type="text" placeholder="例：xx路4号楼025室" v-model="address" />
			</li>
		</ul>
		<div class="add_address" @click="addAddress">
			保存
		</div>
	</div>
</template>

<script>
	import { REQUESTADDRESS } from '../../../static/global.js'
	import headerCom from '../header'
	export default{
		components : { headerCom },
		data(){
			return{
				name:"",
				gender:0,
				phone:"",
				address:"",
				selectd1:"",
				selectd2:"",
				selectd3:"",
				t1s:[
					{textVal:"北京"},
					{textVal:"四川省"},
					{textVal:"贵州省"},
				],
				t2s:[
					{textVal:"北京"},
					{textVal:"四川省"},
					{textVal:"贵州省"},
				],
				t3s:[
					{textVal:"北京"},
					{textVal:"四川省"},
					{textVal:"贵州省"},
				]
				
			}
		},
		methods:{
			addAddress(){
				var data = this.getData();
				this.ajax.post(REQUESTADDRESS+"/orderlist/cancelOrder",data,true,this.addAddressSCB);
			},
			getData(){
				if(this.name=="") {alert("请输入联系人姓名"); return;}
				else if(this.phone.length!=11) {alert("请输入收货人电话"); return;}
				else if(this.selectd1==""||this.selectd2==""||this.selectd3=="") {alert("请选择省，市，区"); return;}
				else if(this.address=="") {alert("请输入详细地址"); return;}
				var data = {"name":this.name,"gender":this.gender,"phone":this.phone,"address":this.address,"aid":this.selectd1+""+this.selectd2+""+this.selectd3}
				return data;
			},
			selSelected(num){
				this.gender = num;
				document.getElementById("sel_men").classList.remove("active");
				document.getElementById("sel_ms").classList.remove("active");
				if(num==0)	document.getElementById("sel_men").classList.add("active");
				else document.getElementById("sel_ms").classList.add("active");
			},
			addAddressSCB(data){
        		if(data.code == "FAIL"){
        			this.errorHandling.getErrorMsg(data);
        		}
        	},
		}
		
	}
</script>

<style>
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
	.a_a{
		background: white;
	}
	.a_l .a_i{
		height: 48px;
		line-height: 48px;
		font-size: 0;
		border-top: 1px solid #EFEFEF;
	}
	.a_l .a_i .a_i_t{
		display: inline-block;
		font-size: 16px;
		text-align: center;
		width: 26%;
		text-align: left;
		margin-left: 4%;
	}
	.a_l .a_i .a_i_m,
	.a_l .a_i>input{
		display: inline-block;
		width: 70%;
		height: 48px;
		line-height: 48px;
		border: none;
		outline: none;
		font-size: 16px;
		text-align: left;
	}
	.a_l .a_i .a_i_m .a_i_m_r{
		display: inline-block;
		height: 16px;
		width: 16px;
		border: 1px solid #969696;
		border-radius: 50%;
		vertical-align: middle;
	}
	.a_l .a_i .a_i_m .a_i_m_r.active{
		background: #FF7417;
		border:1px solid #FF7417
	}
	.a_l .a_i .a_i_m .a_i_m_t{
		font-size: 16px;
		margin-right: 20px;
	}
	
	.a_l .a_i .a_i_m select{
		width: 120px;
		height: 36px;
		line-height: 36px;
		outline: none;
		border: none;
		font-size: 16px;
	}
	.a_l .a_i .a_i_m select option{
		font-size: 16px;
	}
	
	
	
	
	
	
	
	
	.add_address{
		display: block;
		width: 90%;
		height: 48px;
		line-height: 48px;
		color: white;
		font-size: 18px;
		text-align: center;
		background: #FF7417;
		border-radius: 24px;
		margin: auto;
		margin-top: 20px;
	}
</style>