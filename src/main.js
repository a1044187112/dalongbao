// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import commonJS from './commonJS.js'
import { ajaxObject,errorHandling,pageScroll } from './config/util.js'
Vue.prototype.ajax = ajaxObject;
Vue.prototype.errorHandling = errorHandling;
Vue.prototype.pageScroll = pageScroll;

Vue.config.productionTip = false
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
		el: '#app',
		router,
		components: {
			App
		},
		template: '<App/>'
})

