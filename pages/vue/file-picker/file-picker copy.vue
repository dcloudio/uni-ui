<template>
	<view>
		<text class="example-info">文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间</text>
		<uni-group title="只选择图片">
			<uni-file-picker limit="9" title="最多选择9张图片"></uni-file-picker>
		</uni-group>
		<uni-group title="只选择视频">
			<uni-file-picker limit="9" file-mediatype="video" title="最多选择9个视频"></uni-file-picker>
		</uni-group>
		<!-- #ifdef H5 || MP-WEIXIN -->
		<uni-group title="选择任意文件">
			<uni-file-picker limit="5" file-mediatype="all" title="最多选择5个文件"></uni-file-picker>
		</uni-group>
		<!-- #endif -->
		<uni-group title="自定义图片大小">
			<view class="custom-image-box">
				<text class="text">选择头像</text>
				<uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles" file-mediatype="image">
					点击选择
				</uni-file-picker>
			</view>
		</uni-group>
		<uni-group title="只读并自定义样式">
				<uni-file-picker readonly :value="fileLists" :imageStyles="imageStyles" file-mediatype="image"></uni-file-picker>
				<uni-file-picker readonly :value="fileLists" :listStyles="listStyles" file-mediatype="all"></uni-file-picker>
		</uni-group>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageStyles:{
					width:80,
					height:80,
					border: {
						radius: '50%'
					}
				},
				listStyles:{
					// 是否显示边框
					border: true,
					// 是否显示分隔线
					dividline: true,
					// 线条样式
					borderStyle: {
						width:1,
						color:'blue',
						radius:2
					}
				},
				fileLists:[{
					url:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg',
					extname:'png',
					name:'shuijiao.png'
				},{
					url:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg',
					extname:'png',
					name:'uniapp-logo.png'
				},{
					url:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg',
					extname:'png',
					name:'shuijiao.png'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.custom-image-box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.text {
		font-size: 14px;
		color: #333;
	}
</style>
