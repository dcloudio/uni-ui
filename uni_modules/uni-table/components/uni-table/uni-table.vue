<template>
	<view class="uni-table-scroll" :class="{'table--border':border,'border-none':!noData}">
		<view class="uni-table" :style="{'min-width':minWidth+'px'}" :class="{ 'table--stripe':stripe}">
			<slot></slot>
			<view v-if="noData" class="uni-table-loading">
				<view class="uni-table-text">{{emptyText}}</view>
			</view>
			<view v-if="loading" class="uni-table-mask">
				<div class="uni-table--loader"></div>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * Table 表格
	 * @description 用于展示多条结构类似的数据
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=
	 * @property {Boolean} 	border 				是否带有纵向边框
	 * @property {Boolean} 	stripe 				是否显示斑马线
	 * @property {Boolean} 	type 				是否开启多选
	 * @property {String} 	emptyText 			空数据时显示的文本内容
	 * @property {Boolean} 	loading 			显示加载中
	 * @event {Function} 	selection-change 	开启多选时，当选择项发生变化时会触发该事件
	 */
	export default {
		name: 'uniTable',
		options: {
			virtualHost: true
		},
		props: {
			// 是否有竖线
			border: {
				type: Boolean,
				default: false
			},
			// 是否显示斑马线
			stripe: {
				type: Boolean,
				default: false
			},
			// 多选
			type: {
				type: String,
				default: ''
			},
			// 没有更多数据
			emptyText: {
				type: String,
				default: '没有更多数据'
			},
			loading: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				noData: true,
				minWidth: 0
			};
		},
		watch: {
			loading(val) {
				console.log(val);
			}
		},
		created() {
			// 定义tr的实例数组
			this.trChildren = []
			this.backData = []
		},
		methods: {
			isNodata() {
				if (this.trChildren.length > 1) {
					this.noData = false
				} else {
					this.noData = true
				}
			},
			/**
			 * 清除选中
			 */
			clearSelection() {
				this.trChildren.forEach((item, index) => {
					item.value = false
				})
				this.$emit('selection-change', {
					detail: {
						index: [],
						value: []
					}
				})
			},
			check(child, check) {
				const childDom = this.trChildren.find((item, index) => child === item)
				const childDomIndex = this.trChildren.findIndex((item, index) => child === item)
				if (childDomIndex === 0) {
					if (childDom.value !== check) {
						this.backData = []
						this.trChildren.map((item, index) => item.selectable ? item.value = check : '')
					}
					this.trChildren.forEach((item, index) => {
						if (index > 0 && item.value) {
							this.backData.push(index - 1)
						}
					})

				} else {
					if (!check) {
						this.trChildren[0].value = false
					}
					childDom.value = check
					if (check) {
						this.backData.push(childDomIndex - 1)
					} else {
						const index = this.backData.findIndex(item => item === (childDomIndex - 1))
						this.backData.splice(index, 1)
					}
					const domCheckAll = this.trChildren.find((item, index) => index > 0 && !item.value)
					if (!domCheckAll) {
						this.trChildren[0].value = true
					}
				}

				this.$emit('selection-change', {
					detail: {
						index: this.backData.sort(),
						value: []
					}
				})

			}
		}
	}
</script>

<style lang="scss">
	.uni-table-scroll {
		width: 100%;
		/* #ifndef APP-NVUE */
		overflow-x: auto;
		/* #endif */
	}

	.uni-table {
		position: relative;
		width: 100%;
		border-radius: 5px;
		box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
		background-color: #fff;
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		display: table;
		overflow-x: auto;
		::v-deep .uni-table-tr:nth-child(n+2) {
			&:hover {
				background-color: #f5f7fa;
			}
		}
		/* #endif */
	}

	.table--border {
		border: 1px #ddd solid;
	}

	.border-none {
		/* #ifndef APP-NVUE */
		border-bottom: none;
		/* #endif */
	}

	.table--stripe {
		/* #ifndef APP-NVUE */
		::v-deep .uni-table-tr:nth-child(2n+3) {
			background-color: #fafafa;
		}
		/* #endif */
	}

	/* 表格加载、无数据样式 */
	.uni-table-loading {
		position: relative;
		/* #ifndef APP-NVUE */
		display: table-row;
		/* #endif */
		height: 50px;
		line-height: 50px;
	}

	.uni-table-text {
		position: absolute;
		right: 0;
		left: 0;
		text-align: center;
		font-size: 14px;
		color: #999;
	}

	.uni-table-mask {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(255, 255, 255, 0.8);
		z-index: 99;
		/* #ifndef APP-NVUE */
		display: flex;
		margin: auto;
		transition: all 0.5s;
		/* #endif */
		justify-content: center;
		align-items: center;
	}

	.uni-table--loader {
		width: 30px;
		height: 30px;
		border: 2px solid #aaa;
		// border-bottom-color: transparent;
		border-radius: 50%;
		/* #ifndef APP-NVUE */
		animation: 2s uni-table--loader linear infinite;
		/* #endif */
		position: relative;
	}

	@keyframes uni-table--loader {
		0% {
			transform: rotate(360deg);
		}

		10% {
			border-left-color: transparent;
		}

		20% {
			border-bottom-color: transparent;
		}

		30% {
			border-right-color: transparent;
		}

		40% {
			border-top-color: transparent;
		}

		50% {
			transform: rotate(0deg);
		}

		60% {
			border-top-color: transparent;
		}

		70% {
			border-left-color: transparent;
		}

		80% {
			border-bottom-color: transparent;
		}

		90% {
			border-right-color: transparent;
		}

		100% {
			transform: rotate(-360deg);
		}
	}
</style>
