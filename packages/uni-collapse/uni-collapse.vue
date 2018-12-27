<template>
	<view class="uni-collapse">
		<slot></slot>
	</view>
</template>
<script>
	export default {
		name: 'uni-collapse',
		props: {
			accordion: { //是否开启手风琴效果
				type: [Boolean, String],
				default: false
			}
		},
		data() {
			return {}
		},
		mounted() {
			let children = this.$children
			let childrens = []
			this.getChildren(children, childrens)
			this.childrens = childrens
			if (this.accordion === true || this.accordion === 'true') {
				childrens.forEach((vm, index) => {
					childrens.forEach((v, i) => {
						if (index >= i) {
							return
						}
						if (v.isOpen) {
							vm.isOpen = false
						}
					})
				})
			}
		},
		methods: {
			onChange(e) {
				let activeItem = []
				this.childrens.forEach((vm, index) => {
					if (vm.isOpen) {
						activeItem.push(vm.nameSync)
					}
				})
				this.$emit('change', activeItem)
			},
			getChildren(arr, childrens) {
				for (let i = 0, length = arr.length; i < length; i++) {
					let name = arr[i].$options.name
					if (name !== 'uni-collapse-item') {
						arr[i].$children && this.getChildren(arr[i].$children, childrens)
					} else {
						childrens.push(arr[i])
					}
				}
			}
		}
	}
</script>
<style lang="scss">
	.uni-collapse {
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
