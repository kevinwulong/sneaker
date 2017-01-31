<template>
   <div class="news">
	<div class="container">
	  		<mt-swipe :auto="0">
			  <mt-swipe-item>1</mt-swipe-item>
			  <mt-swipe-item>2</mt-swipe-item>
			  <mt-swipe-item>3</mt-swipe-item>
			</mt-swipe>
   	</div>
</template>
<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  export default {
  	components: {
  		'mt-swipe': Swipe,
  		'mt-swipe-item': SwipeItem
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
 	 position: absolute;
	 top:0;
	 width:100%;
	 height: 95%;
	 left:0;
	 background: rgb(246, 246, 246);
}
.container{
	position: relative;
	top:150px;
}
.container>div{
	font-size: 60px
}
</style>