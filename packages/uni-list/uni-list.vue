<template>
  <view class="uni-list">
    <slot/>
  </view>
</template>
<script>
export default {
  name: 'UniList'
}
</script>
<style lang="scss">
	.uni-list {
		background-color: $uni-bg-color;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;

		&:after {
			position: absolute;
			z-index: 10;
			right: 0;
			bottom: 0;
			left: 0;
			height: 1px;
			content: '';
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			background-color: $uni-border-color;
		}

		&:before {
			position: absolute;
			z-index: 10;
			right: 0;
			top: 0;
			left: 0;
			height: 1px;
			content: '';
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			background-color: $uni-border-color;
		}
	}
</style>
