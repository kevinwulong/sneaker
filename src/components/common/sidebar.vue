<template>
   <div class="sidebar">
   	 <div class="content">
   		 <ul>
   		 	 <li><router-link to="/main">首页</router-link></li>
   		 	 <li><router-link to="/pic">美图</router-link></li>
   		 	 <li><router-link to="/news">新闻</router-link></li>
   		 	 <li><router-link to="/sell">发售</router-link></li>
   		 	 <li><router-link to="/tribune">讨论</router-link></li>
   		 </ul>
   	 </div>
   </div>
</template>
<script>
   import Vue from 'vue'
   import VueRouter from 'vue-router'
   import main from '../main'
   import news from '../news'
   import pic from '../pic'
   import sell from '../sell'
   import tribune from '../tribune'

   Vue.use(VueRouter)
export default {
   const MAIN = {template: main}
   const NEWS = {template: news}
   const PIC = {template: pic}
   const SELL = {template: sell}
   const TRIBUNE = {template: tribune}

   const routes = [
      {path: '/main', component: MAIN},
      {path: '/news', component: NEWS},
      {path: '/pic', component: PIC},
      {path: '/sell', component: SELL},
      {path: '/tribune', component: TRIBUNE}
   ]

   const router = new VueRouter({
      routes
   })

   const app =new Vue({
      router
   }).$mount('#app')
}
</script>
<style>
.sidebar{
	width:100%;
	height: 5%;
	position: absolute;
	top:0;
	left:0;
}
.content>ul{
	font-size:50px;  
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height: 100%;
      background: white;
}
.content>ul>li{
         float: left;
         list-style: none;
         width:20%;
         height: 100%;
         text-align:center;
         line-height: 80px;

}  

</style>