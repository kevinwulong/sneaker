<template>
  <div class="news-page" v-show="showPage">
  	<div class="title">
  		<h1>{{item.Title}}</h1>
  		<span>来自: {{item.author}}</span>
  	</div>
  	<div class="img">
  		 <img :src="item.imgUrl">
  	</div>
  	<div class="text">
  		 <p>{{item.text}}</p>
  	</div>
  	<span class="close" @click="close">关闭</span>
  	<div class="ratings">
  		<ul>
  			<li v-for="rating in item.ratings">
  				<div class="avatar">
  					<img :src="rating.avatar">
  					<p>{{rating.username}}</p>
  				</div>
  			</li>
  		</ul>
  	</div>
  </div>
</template>
<script>
  export default {
  	data() {
  		return {
  			showPage: false
  		}
  	},
  	methods: {
  		show() {
  			this.showPage=true
  		},
  		close() {
  			this.showPage=false
  		}
  	},
  	props: {
  		item : {
  			type: Object
  		}
  	}
  }
</script>
<style>
.news-page{
	width:100%;
	position: absolute;
	top:0;
	background: #fff;
	margin-bottom:150px;
}
.title{
	width:100%;
	height: 200px;
	border-bottom:1px solid #ccc;
	position: relative;

}
.title>h1{
	font-size: 50px;
	width:90%;
	margin:0 5%;
	color:rgb(80, 78, 78);
}
.title>span{
	display: block;
	font-size: 40px;
	position: absolute;
	bottom:0;
	left:50px;
	color:#ccc;
}
.img{
	width:95%;
	height: 600px;
	margin:20px 2.5%;
	overflow: hidden;
}
.img>img{
	width:100%;
	height: auto
}
.close{
	display: block;
	color:#fff;
	position: fixed;
	top:50px;
	left:10px;
	z-index: 20000;
	font-size: 40px;
}
.text{
	width:95%;
	margin:0 2.5%;
}
.text>p{
	font-size: 50px;
}
</style>