<template>
   <div class="picPage" v-show="picShow">
   	<img :src="pic">
   </div>
</template>
<script>
  export default {
  	methods: {
  		show() {
  			console.log('a')
  		}
  	},
  	props: {
  		pic: {
  			type: String
  		}
  	},
  	data() {
  		return {
  			picShow: false
  		}
  	}
  	
  }
</script>
<style>
</style>