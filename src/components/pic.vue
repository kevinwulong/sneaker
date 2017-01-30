<template>
   <div class="pic">
	<z-falls></z-falls>
   </div>
</template>
<script>
  import falls from './piccomponents/falls'
  export default {
  	components: {
  		'z-falls': falls
  	}
  }
</script>
<style>
.pic{
	position: absolute;
	top:150px;
	width:100%;
	height: 100%;

}
</style>