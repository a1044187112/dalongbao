<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg" >
            	<router-link v-bind:to="str.linkTo"><img v-bind:src="str.url"/></router-link>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        props: ['listImg'],
        mounted() {
            //console.log('mounted', this)
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 4000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
        }
    }
</script>

<style>
    .swiper-container {
        width: 100%;
       /*height: 10rem;*/
    }
    .swiper-container .swiper-wrapper{
        width: 100%;
        height: 100%;
    }
    .swiper-container .swiper-slide{
    	background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    .swiper-container .swiper-slide img{
    	width: 100%;
        height: 100%;
    }
    .swiper-container .swiper-pagination-bullet {
            width:12px;
            height: 12px;
            display: inline-block;
            background: #FF7417;
    }
</style>