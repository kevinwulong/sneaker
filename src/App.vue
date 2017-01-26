<template>
<div class="content">
  	<div class="sidebar">
   		 <ul>
   		 	 <li><router-link to="/main">首页</router-link></li>
   		 	 <li><router-link to="/pic">美图</router-link></li>
   		 	 <li><router-link to="/news">新闻</router-link></li>
   		 	 <li><router-link to="/sell">发售</router-link></li>
   		 	 <li><router-link to="/tribune">讨论</router-link></li>
   		 </ul>
   	 </div>
     <router-view></router-view>
  </div>      
</template>

<script>
export default {}
</script>

<style>
.active{
  display: block;
  color:red;
}
.sidebar{
  width:100%;
  height: 5%;
  position: absolute;
  top:95%;
  left:0;
  border-top:3px solid #ccc;
}
.sidebar>ul{
  font-size:50px;  
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height: 100%;
      background: white;
}
.sidebar>ul>li{
         float: left;
         list-style: none;
         width:20%;
         height: 100%;
         text-align:center;
         line-height: 80px;

}  
.sidebar>ul>li>a{
  text-decoration: none;
  color:black;
}

</style>
