// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import main from './components/main'
import news from './components/news'
import pic from './components/picPage'
import sell from './components/sell'
import tribune from './components/tribune'

Vue.use(VueRouter)

let routes = [
	{
		path: '/',
		name:'index',
		component: App,
		children: [
			 {path: '/main', component: main},
		     	 {path: '/news', component: news},
		    	 {path: '/pic', component: pic},
		     	 {path: '/sell', component: sell},
		     	 {path: '/tribune', component: tribune}
		]
	}
]
let router = new VueRouter({
	'linkActiveClass': 'active',
	routes
})
let app =new Vue({
	router
}).$mount('#app')
export default app
