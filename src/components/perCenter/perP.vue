<template>
	<div id="p_p">
		<header-com header-show="none" title="我的人脉" path=" "></header-com>
		<ul class="p_l">
			<li class="p_i" v-for=" pi in pl " @click="isShow = !isShow">
				<span class="p_btn">+</span>
				<span class="p_grade">{{ pi.grade }}({{ pi.gNum }})</span>
				<ul class="p_c_l" v-show="isShow">
					<li class="p_c_i" v-for=" pci in pi.pcInfo ">
						<span><img src="../../../static/pcImg/ico1.png" /></span>
						<span>{{ pci.name }} (总业绩：{{ pci.performanc }})</span>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	import headerCom from '../header'
	export default{
		components : { headerCom },
		data(){
			return{
				isShow : false,
				pl : [
					{ grade: "1星消费商", gNum:500,
						pcInfo : [
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
						]
					},
					{ grade: "2星消费商", gNum:500,
						pcInfo : [
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
						]
					},
					{ grade: "3星消费商", gNum:500,
						pcInfo : [
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
							{ name: "wehk123", performanc : "500000"},
						]
					},
					
				]
			}
		}
	}
</script>

<style>
	#p_p{
		background: white;
	}

	.p_l .p_i{
		padding: 20px 0 0 0;
		text-align: left;
		border-top: 1px solid #EFEFEF;
	}
	.p_l .p_i:last-child{
		border-bottom: 1px solid #EFEFEF;
	}
	.p_l .p_i .p_btn{
		display: inline-block;
		height: 26px;
		line-height: 28px;
		width: 26px;
		border: 2px solid #000000;
		border-radius: 50%;
		font-size: 16px;
		text-align: center;
		margin-left: 20px;
		margin-bottom: 20px;
	}
	.p_l .p_i .p_grade{
		font-size: 16px;
		margin-left: 10px;
		vertical-align: middle;
	}
	.p_l .p_i .p_c_l{
		background: #EFEFEF;
	}
	.p_l .p_i .p_c_l .p_c_i{
		border-bottom: 2px solid #FFFFFF;
		text-align: center;
		padding: 10px 0;
	}
	.p_l .p_i .p_c_l .p_c_i:last-child{
		border:none
	}
	.p_l .p_i .p_c_l .p_c_i span{
		display: inline-block;
		width: 70%;
		font-size: 16px;
		vertical-align: top;
		color: #000000;
		margin-left: 15px;
		text-align: left;
		height: 60px;
		line-height: 60px;
	}
	.p_l .p_i .p_c_l .p_c_i span:first-child{
		text-align: right;
		width: 20%;
	}
	.p_l .p_i .p_c_l .p_c_i img{
		width: 60px;
		border-radius: 50%;
	}
</style>