<template>
	<div  id="demo">
		<div class="footer_nav footer_nav_show">
			<div class="f_n_i" v-for="f in fs" :class="{active : isActive}">
				<router-link v-bind:to="f.toLink">
					<img v-bind:src=" f.src " />
					<span class="f_n_item">{{ f.title}}</span>
				</router-link>
			</div>
		</div>
		<div class="footer_nav footer_nav_hidden">
			<div class="f_n_i" >
				<img v-bind:src="bg_img"  />
				<span class="f_n_item">测试</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				isActive : true,
				bg_img:"../../static/img/menu1.png" ,
				fs : [
					{
						src:"../../static/img/menu1.png",
						title:"首页",
						toLink:"/"
					},
					{
						src:"../../static/img/menu1.png",
						title:"分类",
						toLink:"/comClass/class"
					},
					{
						src:"../../static/img/menu1.png",
						title:"商城",
						toLink:""
					},
					{
						src:"../../static/img/menu1.png",
						title:"购物车",
						toLink:"/buy/shoppingCart"
					},
					{
						src:"../../static/img/menu1.png",
						title:"我的",
						toLink:"/perCenter"
					},
				]
			}
		}
	}
	
</script>

<style>
	.footer_nav{
		width: 100%;
		padding: 10px 0;
		font-size: 0;
		padding-top: 15px;
	}
	.footer_nav .f_n_i{
		display: inline-block;
		width: 20%;
		text-align: center;
	}
	.footer_nav .f_n_i .f_n_item{
		font-size: 14px;
		color: #696969;
	}
	.footer_nav .f_n_i img{
		display: block;
		width: 60%;
		margin-left: 20%;
	}
	.footer_nav .f_n_i.active .f_n_item{
		color: #ff7417;
	}
	.footer_nav_hidden{
		visibility: hidden;
	}
	.footer_nav_show{
		position: fixed;
		bottom: 0;
		z-index: 100;
		left: 0;
		width: 100%;
		background: white;
		z-index: 100;
	}
</style>