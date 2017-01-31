<template>
   <div class="falls"  ref="fallsWrapper">
   	<ul v-show="fallShow">
		
   		<li v-for="pic in pics" class="index" @click.stop="picShowFunc(pic, $event)">
   			 <img :src="pic">
   		</li>	
   	</ul>
   	<z-page  ref="page" :picTrue="picTrue" :picUrl="picUrl"  @picHideFunc="picHideFunc"></z-page>
   </div>
</template>
<script>
  import data from './../../data.json'
  import picPage from './page'
  export default {
  	data() {
  		return {
  			pics: {
  				type: Array
  			},
  			picTrue: false,
  			fallShow: true,
  			picUrl: ''
  		}
  	},
  	components: {
  		'z-page': picPage
  	},
  	methods: {
  		picShowFunc(pic, event) {
  			this.$refs.page.show(),
  			this.picUrl=pic
  			this.fallShow=false
  		},
  		picHideFunc() {
  			this.$refs.page.hide()
  			this.fallShow=true
  		},
  		waterFall() {
  			let oli = this.$refs.fallsWrapper.getElementsByTagName('li')
  			let oliWidth = oli[0].offsetWidth
  			let num =Math.floor(document.documentElement.clientWidth/oliWidth)
  			let arr= []
  			for (var i=0; i<oli.length; i++) {  				
  				if (i<num) {
  					arr[i]= oli[i].offsetHeight
  				}
  				else {
  					let minH = Math.min.apply(null, arr)
  					let minHIndex = this.getminH(arr, minH)
  					oli[i].style.position='absolute'
  					oli[i].style.top=minH+ 'px'
  					oli[i].style.left=oli[minHIndex].offsetLeft+'px'
  					oli[i].style.margin='20px 0 150px 0'
  					arr[minHIndex]+=oli[i].offsetHeight
  				}
  			}
  		},
  		getminH(arr, minH) {
  			for (var i in arr) {
  				if (arr[i]=== minH) {
  					return i
  				}
  			}
  		}
  	},
  	created() {
  		this.pics = data.pic
  		this.$nextTick(() => {
  			this.waterFall()
  		})
  	}
  }
</script>
<style>
.falls{

}
.index{
	list-style: none;
	float: left;
	width:30%;
	margin:20px 1.5%;
}
.index>img{
	width:100%;
	height: auto;
}
</style>