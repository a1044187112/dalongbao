<template>
	<div class="hello" id="page" >
		<div id="search">
			<input v-model="message" placeholder="搜索" />
			<img class="search_img" v-bind:src="searchImgSrc">
		</div>
		<div class="con">
			<banner-home></banner-home>
		</div>
		<ul id="nav">
			<li class="nav_item" v-for="imgNav in imgNavs">
				<router-link v-bind:to='imgNav.toLink'>
					<img v-bind:src='imgNav.src' /><span>{{imgNav.title}}</span>
				</router-link>
			</li>
		</ul>
		<div id="hot">
			<div class="hot_item">
				<img v-bind:src='hot_img_src' />
			</div>
			<div class="hot_item">
				<p><span class="hot_item_title">热议</span>
					<router-link to="/index/hotAno?item=1"><span class="hot_item_dis" v-text='hot_item_text1'></span></router-link>
				</p>
				<p><span class="hot_item_title">热议</span>
					<router-link to="/index/hotAno?item=2"><span class="hot_item_dis" v-text='hot_item_text2'></span></router-link>
				</p>
			</div>
		</div>
		<index-com></index-com>
		<per-rec></per-rec>
		<footer-menu></footer-menu>
	</div>
</template>

<script>
	import indexCom from './index/indexCom'
	import perRec from './index/perRec'
	import footerMenu from '../components/footerMenu'
	import bannerHome from './banner/bannerHome'
	import { REQUESTADDRESS } from '../../static/global.js'
	var COUNT = 0 // 计数
	var TIMER // 计时器
	export default {
		name: 'indexPag',
		components: {
			indexCom,
			perRec,
			footerMenu,
			bannerHome
		},
		data() {
			return {
				searchImgSrc: '../../static/img/ico1.png',
				message: '',
				imgNavs: [{
						src: '../../static/img/nav1.png',
						title: '全部分类',
						toLink: "comClass/class"
					},
					{
						src: '../../static/img/nav2.png',
						title: '游戏专区',
						toLink: ""
					},
					{
						src: '../../static/img/nav3.png',
						title: '直播间',
						toLink: ""
					},
					{
						src: '../../static/img/nav4.png',
						title: '我要开户',
						toLink: "/longBao"
					}
				],
				hot_img_src: '../../static/img/ico6.png',
				hot_item_text1: '平移会员提现通知gfhaksjdhfhaskl:',
				hot_item_text2: '提示:',
			}
		},
		mounted() {
			this.getHotData();
		},
		methods: {
			getHotData() {
				this.ajax.get(REQUESTADDRESS + "/usermsg/getHeadLine", true, this.getHotDataSCB);
			},
			getHotDataSCB(data) {
				if(data.code == "FAIL") {
					this.errorHandling.getErrorMsg(data);
				} else {
					this.hot_item_text1 = data.data[0].title;
					this.hot_item_text2 = data.data[1].title;
					localStorage.hotItemContent1 = data.data[0].content;
					localStorage.hotItemContent2 = data.data[1].content;
				}
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
	
	.con {
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	
	#nav {
		width: 100%;
		padding: 15px 0;
		font-size: 0;
		border-bottom: 1px solid #e6e6e6;
	}
	
	#nav .nav_item {
		display: inline-block;
		width: 25%;
		font-size: 14px;
		color: #000;
		text-align: center;
	}
	
	#nav .nav_item img {
		display: inline-block;
		width: 50%;
		margin: auto;
		max-width: 50px;
	}
	
	#nav .nav_item span {
		width: 100%;
		display: inline-block;
		margin-top: 8px;
		font-size: 0.9rem;
	}
	
	#hot {
		width: 90%;
		margin: auto;
		font-size: 0;
		text-align: left;
		padding: 8px 0;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	#hot .hot_item {
		display: inline-block;
	}
	
	#hot .hot_item:first-child {
		text-align: left;
	}
	
	#hot .hot_item:first-child img {
		margin: 10px 0 0 10px;
		width: 60px;
	}
	
	#hot .hot_item:nth-child(2) {
		margin-left: 15px;
		font-size: 14px;
		margin-top: 10px;
		text-align: left;
		line-height: 24px;
		vertical-align: top;
		/* 单行文本超出部分以省略号显示 */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	#hot .hot_item:nth-child(2) .hot_item_title {
		display: inline-block;
		width: 38px;
		height: 24px;
		border: 1px solid #cc0000;
		color: #cc0000;
		text-align: center;
		border-radius: 0.3rem;
		vertical-align: top;
	}
	
	#hot .hot_item:nth-child(2) .hot_item_dis {
		display: inline-block;
		margin-left: 10px;
		font-size: 0.8rem;
		width: 80%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>