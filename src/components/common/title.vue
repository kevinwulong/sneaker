<template>
  <div class="title">
  	 <p class="hot-title">{{firTitle}}  <span>{{secTitle}}</span></p>
  </div>
</template>

<script>
  export default {
  	props: {
  		firTitle: {
  			type: String
  		},
  		secTitle: {
  			type: String
  		}
  	}
  }
</script>
<style>
  .hot-title{
	width:80%;
	height: 100px;
	margin:0 10% 25px 10%;
	line-height: 100px;
	text-align: center;
	border-bottom:2px solid #ccc;
}
.hot-title>span{
	background: black;
	color:#fff;
	padding: 0 10px;
}
</style>
