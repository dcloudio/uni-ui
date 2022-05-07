<template>
	<view class="uni-tooltip">
		<slot></slot>
		<view class="uni-tooltip-popup">
			<slot name="content">
				{{content}}
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "uni-tooltip",
		data() {
			return {

			};
		},
		props: {
			content: {
				type: String,
				default: ''
			},

			placement: {
				type: String,
				default: 'bottom'
			},
		}
	}
</script>

<style>
	.uni-tooltip {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		position: relative;
		cursor: pointer;
	}

	.uni-tooltip-popup {
		z-index: 1;
		display: none;
		position: absolute;
		left: 0;
		background-color: #333;
		border-radius: 8px;
		color: #fff;
		font-size: 12px;
		text-align: left;
		line-height: 16px;
		padding: 12px;
	}


	.uni-tooltip:hover .uni-tooltip-popup {
		display: block;
	}
</style>
