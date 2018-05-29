<template>
	<div class="popus">
		<div class="popus_con">
			<div class="close" @click="closePopups">x</div>
			<p>已选：<span>864灰色   175/M</span></p>
			<div class="popus_l_f">
				<div class="popus_i" v-if="true">
					<div class="popus_i_t">颜色</div>
					<ul class="popus_l">
						<li class="popus_i_i active">864卡其色</li>
						<li class="popus_i_i">864卡其色</li>
						<li class="popus_i_i">864卡其色</li>
						<li class="popus_i_i">864卡其色</li>
						<li class="popus_i_i">864卡其色</li>
						<li class="popus_i_i">864卡其色</li>
						<li class="popus_i_i">864卡其色</li>
						<li class="popus_i_i">864卡其色</li>
						<li class="popus_i_i">864卡其色</li>
						<li class="popus_i_i">864卡其色</li>
						<li class="popus_i_i">864卡其色</li>
						<li class="popus_i_i">864卡其色</li>
					</ul>
				</div>
				<div class="popus_i" v-if="true">
					<div class="popus_i_t">尺码</div>
					<ul class="popus_l">
						<li class="popus_i_i active">165/M</li>
						<li class="popus_i_i">165/M</li>
						<li class="popus_i_i">165/M</li>
						<li class="popus_i_i">165/M</li>
						<li class="popus_i_i">165/M</li>
						<li class="popus_i_i">165/M</li>
						<li class="popus_i_i">165/M</li>
						<li class="popus_i_i">165/M</li>
					</ul>
				</div>
			</div>
			<button class="popus_confirm">确定</button>
		</div>
	</div>
</template>

<script>
	export default{
		methods : {
			closePopups(){
				this.$emit("closeParentPopups");
			},
		}
	}
</script>

<style>
	.popus{
		position: fixed;
		width: 100%;
		top: 0;
		bottom: 0;
		background: rgba(0,0,0,0.2);
		z-index: 1;
	}
	.popus .popus_con{
		width: 100%;
		background: white;
		position: fixed;
		bottom: 0;
		padding-top: 15px;
		height: 400px;
	}
	.popus .popus_con .close{
		float: right;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		line-height: 20px;
		border:1px solid #afafaf;
		margin-right: 8px;
		margin-top: -8px;
		font-size: 16px;
		color: #afafaf;
	}
	.popus .popus_con p{
		width: 94%;
		text-align: left;
		font-size: 14px;
		margin: auto;
	}
	.popus .popus_con .popus_l_f{
		width: 94%;
		margin-top: 10px;
		height: 250px;
		overflow: scroll;
	}
	.popus .popus_con  .popus_l_f .popus_i {
		margin-top: 8px;
	}
	.popus .popus_con  .popus_l_f .popus_i .popus_i_t{
		width: 94%;
		text-align: left;
		font-size: 14px;	
		margin: auto;
	}
	.popus .popus_con  .popus_l_f .popus_i .popus_l{
		width: 94%;
		margin: auto;
		border-bottom: 1px solid #EFEFEF;
		padding-bottom: 10px;
	}
	.popus .popus_con  .popus_l_f .popus_i .popus_l .popus_i_i{
		display: inline-block;
		font-size: 12px;
		background: #dfdfdf;
		padding: 5px 6px;
		border-radius: 4px;
		margin-top: 8px;
		margin-left: 5px;
	}
	.popus .popus_con  .popus_l_f .popus_i .popus_l .popus_i_i.active{
		background: red;
		color: white;
	}
	.popus_confirm{
		display: block;
		width: 94%;
		text-align: center;
		font-size: 16px;
		height: 36px;
		line-height: 38px;
		color: white;
		background: #FF7417;
		border-radius: 18px;
		outline: none;		
		border: none;
		margin: auto;
		margin-top: 10px;
	}
</style>