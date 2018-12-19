<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="example">
			<view class="example-title">基本用法</view>
			<uni-steps :data="list1" :active="active"></uni-steps>
            <view class="example-title">纵向排列</view>
            <uni-steps :data="list2" direction="column" :active="active"></uni-steps>
            <button type="primary" @click="change">改变状态</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'steps',
                active:1,
                list1: [{
                	title: '事件一'
                }, {
                	title: '事件二'
                }, {
                	title: '事件三'
                }, {
                	title: '事件四'
                }],
                list2: [{
                	title: '买家下单',
                    desc:'2018-11-11'
                }, {
                	title: '卖家发货',
                    desc:'2018-11-12'
                },{
                	title: '买家签收',
                    desc:'2018-11-13'
                }, {
                	title: '交易完成',
                    desc:'2018-11-14'
                }]
			}
		},
        methods:{
            change(){
                if(this.active < this.list1.length - 1){
                    this.active += 1
                }else{
                    this.active = 0
                }
            }
        }
	}
</script>

<style>
    button{
        margin: 30upx;
    }
</style>
