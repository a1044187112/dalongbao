<template>
  <div>
   <app-banner :listImg="listImg" ></app-banner>
  </div>
</template>

<script>
 import Banner from './banner'
 import a from '../../../static/img/t1.jpg'
 import b from '../../../static/img/t2.jpg'
 import c from '../../../static/img/t3.jpg'
 import { REQUESTADDRESS } from '../../../static/global.js'
     export default {
        name: 'bannerHome',
        data() {
            return {
                listImg: [{
                    url: a,linkTo:""
                }, {
                    url: b,linkTo:""
                }, {
                    url: c,linkTo:""
                }]
            }
        },
        components: {
            'app-banner': Banner
        },
        mounted(){
          	this.getAjax();
        },
        methods:{
        	getAjax(){
        		this.ajax.get(REQUESTADDRESS+"/adslist/getByLocation?location=1",true,this.sucCallback);
        },
        sucCallback(data){
        		if(data.msg == "成功"){
        			data.data.forEach((item,i) =>{
        					this.$set(this.listImg[i],"url",REQUESTADDRESS+item.img);
        					this.$set(this.listImg[i],"linkTo",item.linkTo);
        				});
        		}
        }
    }
  }
</script>