<template>
   <div class="news">
	<div class="news-wrapper">
		<div class="navbar">
			<ul>
				<li v-for="navbar in navbarAll" class="navbar-child"  :class="{ 'navbarOn': navbar.show=== true}" @click="navbarOn(navbar, $event)">
					{{navbar.nav}}
				</li>
			</ul>
		</div>
		<div class="content">
			<ul>
				 <li v-for="item in news" class="news-item" @click="pageShow(item, $event)">
				 	<div class="news-img">
				 		<img :src="item.imgUrl">
				 	</div>
				 	<div class="news-text">
				 		<h4 class="news-title">{{item.Title}}</h4>
				 		<h5 class="news-titleTwo">{{item.TitleTwo}}</h5>
				 	</div>
				 </li>
			</ul>
		</div>
		<z-page ref="page" :item="newsItem"></z-page>
   	</div>
</template>
<script>
  import data from '../data.json'
  import newsPage from './newsPage'
  export default {
  	data() { 
  		return {
	  		navbarAll: [ 
	  				{nav: '全部', show: true},
	  				{nav: '国际足球', show: false, type: 4}, 
			  		{nav: 'NBA', show: false, type: 1},
			  		{nav: '球鞋', show: false, type: 2},
			  		{nav: '潮流', show: false, type: 3}	
	  		],
	  		news: data.news.newNews,
	  		newsItem: {}
  		}
  	},
  	methods: {
  		navbarOn(navbar) {	
  			for (let i=0; i<this.navbarAll.length; i++) {
  				this.navbarAll[i].show= false
  			}
  			navbar.show=true
  		},
  		pageShow(item) {
  			this.$refs.page.show()
  			this.newsItem = item
  		}
  	},
  	components: {
  		'z-page' :newsPage
  	}
  }
</script>
<style>
*{
	 margin:0;
	 padding:0;
	 font-family: "微软雅黑";
}
.news{	
	 background: rgb(246, 246, 246);
	 position: relative;
	 top:150px;
	 margin-bottom:150px;
}
.news-wrapper{
	font-size: 60px;
}
.navbar{
	width:100%;
	height: 80px;
	border-bottom:1px solid black;
}
.navbar-child{
	list-style: none;
	float:left;
	background: rgb(240,240,240);
	width:16%;
	margin:0 2%;
	height: 80px;
	line-height: 80px;
	font-size:35px;
	text-align:center;

}
.navbarOn{
	background: black;
	color:#fff;
}
.news-item{
	width:100%;
	height: 200px;
	border-bottom:1px solid #ccc;
}
.news-img{
	width:18%;
	height: 200px;
	overflow: hidden;
	position: relative;
	left:10px;
}
.news-img>img{
	width:150%;
	height: auto;
	position: relative;
	top:-65px;
	right:50px;
}
.news-text{
	width:80%;
	height: 200px;
	position: relative;
	left:20%;
	top:-200px;

}
.news-title{
	width:95%;
	font-size: 30px;
	color:rgb(77, 75, 75);
	position: relative;
	top:10px;
}
.news-titleTwo{
	width:95%;
	font-size: 27px;
	color:rgb(183, 183, 191);
	position: relative;
	top:15px;
}

</style>