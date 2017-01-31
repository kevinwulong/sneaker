<template>
   <div class="picPage" v-show="picShow" >
	<img :src="picUrl" @click="close()">
   </div>
</template>
<script>
  export default {
  	props: {
  		pic: {
  			type: String
  		},
  		picTrue: {
  			type: Boolean
  		},
  		picUrl: {
  			type: String
  		}
  	},
  	data() {
  		return {
  			picShow: this.picTrue
  		}
  	},
  	methods: {
  		show() {
  			this.picShow = true
  		},
  		hide() {
  			this.picShow=false
  		},
  		close() {
  			this.$emit('picHideFunc')
  		}

   	}
  	
  }
</script>
<style>
.picPage{
	margin-top:-150px;

}
.picPage>img{
	width:100%;
	padding-top:350px;
}
</style>