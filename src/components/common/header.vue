<template>
  <div class="header">
	<img src="../../../static/img/header.png">
  </div>
</template>
<script>
  export default {
  }
</script>

<style>
.header{
	width:100%;
	height: 150px;
	background: rgb(0, 2, 3);
	position: fixed;
	top:0;
	left:0;
	z-index:1000;
}
.header>img{
	display: block;
	margin:30px auto;
}
.header>h1{
	text-align: center;
	line-height: 200px;
	font-size: 100px;
}
</style>