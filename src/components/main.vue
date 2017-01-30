<template>
  <div class="main">
	  <div class="main-wrapper" ref="mainWrapper">
		<div class="hot-content">
			<z-title :firTitle="news.title" :secTitle="news.secTitle"></z-title>
			<div class="hotBig-box">
				<ul>
					<li v-for="newbox in news.hotNews" class="hot-box">
						<img :src="newbox.imgUrl" >
						<P>{{newbox.hotTitle}}</P>
					</li>
				</ul>
			</div>			
		</div>
		<div class="news-content">
			<z-title :firTitle="news.newtitle"  :secTitle= "news.newSecTitle"></z-title>
			<div class="news-box">
				<ul>
					 <li v-for="newbox in news.newNews" class="news-li">
					 	<img :src="newbox.imgUrl" class="news-img">
					 	<p class="newsTitle">{{newbox.Title}}</p>
					 	<p class="newSecTitle">{{newbox.TitleTwo}}</p>					 	
					 </li>
				</ul>
			</div>
			<div class="more" >
				 <a href="#/news"><p>点击查看更多</p></a>
			</div>
		</div>
	  </div>
  </div>
</template>
<script>
  import data from '../data.json'
  import title from './common/title'
  export default {
  	data() {
  	  return {
  	  	data: {},
  	  	news: {}
  	  }
  	},
  	created() {
  		this.data = data,
  		this.news = data.news
  	},
  	components: {
  		'z-title': title
  	}

  }
</script>

<style>
*{
	 margin:0;
	 padding:0;
	 font-family: "微软雅黑";
}
.main{
	width:100%;
	font-size:60px;
	position: absolute;
	top:0;
	left:0;

}
.main-wrapper{
	width:100%;
	position: absolute;
	top:200px;
	left:0;
	margin-bottom: 100px;
}
/* 今日热点 */
.hot-content{
	width:100%;
	height: 1000px;
}
.hotBig-box{
	width:100%;
	height: 900px;
	position: absolute;
	top:100px;
	left:0;
}
.hotBig-box>ul>li{
	width:42%;
	height: 370px;
	background: rgb(234, 237, 238);
	float: left;
	margin:4%;
	list-style: none;
}
.hot-box>img{
	width:80%;
	height: 60%;
	margin:5% 10% 0 10%;
}
.hot-box>p{
	font-size: 30px;
	margin:0 15px;
}

/*最新资讯*/
.news-box{
	width:100%;
}
.news-li{
	width:90%;
	height: 200px;
	border-top: 1px solid #ccc;
	margin-top:10px;
	margin-left:5%;
	margin-right:5%;
	list-style: none;
}
.news-li>img{
	width:180px;
	height: 180px;
	margin:10px;
}
.newsTitle{
	font-size: 35px;
	width:75%;
	position: relative;
	left:200px;
	bottom:200px;
	font-weight: 700;
}
.newSecTitle{
	font-size: 30px;
	width:75%;
	position: relative;
	left:200px;
	bottom:200px;
	color:#ccc;
}
.news-content{
	margin-bottom: 150px;
}
.more{
	width:90%;
	height: 80px;
	background: rgb(51, 51, 51);
	color:#fff;
	font-size: 35px;
	text-align:center;
	margin-left:5%;
}
.more a{
	text-decoration: none;
	color:#fff;
	height: 80px;
	line-height: 80px;
}
.more>p{
	height: 80px;
	line-height: 80px;
}
</style>