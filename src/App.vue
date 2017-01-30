<template>
<div class="content">
     <z-header></z-header>
     <router-view></router-view>
     <div class="sidebar">
       <ul>
         <li><router-link to="/main">首页</router-link></li>
         <li><router-link to="/pic">美图</router-link></li>
         <li><router-link to="/news">新闻</router-link></li>
         <li><router-link to="/sell">发售</router-link></li>
         <li><router-link to="/tribune">更多</router-link></li>
       </ul>
     </div>
  </div>      
</template>

<script>
import header from './components/common/header'
export default {
  components: {
    'z-header': header
  }
}
</script>

<style>
.sidebar{
  width:100%;
  height: 100px;
  position: fixed;
  bottom:0;
  left:0;
  border-top:3px solid #ccc;
  z-index:100;
  
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
         line-height: 100px;

}  
.sidebar>ul>li>a{
  text-decoration: none;
  color:black;
}

</style>
