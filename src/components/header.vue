<template>
	<div id="header">
		<div class="title">
			<span class="return"></span>
			<div class="title_text">{{title}}</div>		
			<router-link class='pay_info' to="path" v-bind:style="{display:headerShow}">详细</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		props : ['headerShow','title','path'],
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
		top: 20px;
		left: 20px;
		/* 旋转  */
		transform: rotate(-45deg);
		-ms-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
	}
	.title .title_text{
		font-size: 18px;
		height: 48px;
		line-height: 46px;
		text-align: center;
		background: white;
		padding-top: 5px;
	}
	.title .pay_info{
		font-size: 18px;
		float: right;
		margin-top: -38px;
		margin-right: 15px;
		color: #696969;
	}
</style>