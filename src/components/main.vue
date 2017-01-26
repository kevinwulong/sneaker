<template>
  <div class="main">
	  <div class="img">
	  </div>
	  <div class="main-wrapper">
	  	
	  </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
*{
	 margin:0;
	 padding:0;
	 font-family: "微软雅黑";
}
.main{	
 	 position: absolute;
	 top:0;
	 width:100%;
	 height: 95%;
	 bottom:0;
	 background: rgb(246, 246, 246);
}
.main-wrapper{
	position: absolute;
	top:30%;
	width:100%;
	height: 70%;
	left:0;
	background: red
}
.img{
  width:100%;
  height: 30%;
  position: absolute;
  top:0;
  left:0;
  background: black;
}
</style>