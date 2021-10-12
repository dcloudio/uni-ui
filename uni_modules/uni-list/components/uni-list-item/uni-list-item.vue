<template>
	<view class="uni-list-item" :class="{'uni-list-item--dense': !border }">
		<view v-if="!isFirstChild" class="uni-list-item__border" :class="{'uni-list--border': border ,'uni-border--full':borderFull}"></view>
		<view class="uni-list-item-box" :class="{ 'uni-list-item--disabled': disabled }" :hover-class="!clickable || disabled || showSwitch ? '' : 'uni-list-item--hover'" @click="onClick">
			<slot name="icon">
				<view v-if="thumb" class="uni-list-item__icon">
					<image :src="thumb" class="uni-list-item__icon-img" :class="['uni-list--' + thumbSize]" />
				</view>
				<view v-else-if="showExtraIcon" class="uni-list-item__icon">
					<uni-icons :color="extraIcon.color" :size="extraIcon.size" :type="extraIcon.type" />
				</view>
			</slot>
			<slot>
				<view class="uni-list-item__content">
					<view class="uni-list-item__content-title" :class="[ellipsis !== 0 && ellipsis <= 2 ? 'uni-ellipsis-' + ellipsis : '']">{{title}}</view>
					<view v-if="note" class="uni-list-item__content-subtitle uni-ellipsis-2">{{note}}</view>
				</view>
			</slot>
			<slot name="actions">
				<view class="uni-list-item__actions">
					<text v-if="rightText" class="uni-list-item__actions-text">{{rightText}}</text>
			</view>
			</slot>
			<uni-icons v-if="showArrow" :size="16" class="uni-arrow-icon" color="#bbb" type="arrowright" />
		</view>
	</view>
</template>

<script>
	/**
	 * ListItem 列表子组件
	 * @description 列表子组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=24
	 * @property {String} 	title 							标题
	 * @property {String} 	note 							描述
	 * @property {String} 	thumb 							左侧缩略图，若thumb有值，则不会显示扩展图标
	 * @property {String}  	thumbSize = [lg|base|sm]		略缩图大小
	 * 	@value 	 lg			大图
	 * 	@value 	 base		一般
	 * 	@value 	 sm			小图
	 * @property {String} 	badgeText						数字角标内容
	 * @property {String} 	badgeType 						数字角标类型，参考[uni-icons](https://ext.dcloud.net.cn/plugin?id=21)
	 * @property {String} 	rightText 						右侧文字内容
	 * @property {Boolean} 	disabled = [true|false]			是否禁用
	 * @property {Boolean} 	clickable = [true|false] 		是否开启点击反馈
	 * @property {String} 	link = [navigateTo|redirectTo|reLaunch|switchTab] 页面跳转方式
	 *  @value 	navigateTo 	同 uni.navigateTo()
	 * 	@value redirectTo 	同 uni.redirectTo()
	 * 	@value reLaunch   	同 uni.reLaunch()
	 * 	@value switchTab  	同 uni.switchTab()
	 * @property {String | PageURIString} 	to  			跳转目标页面
	 * @property {Boolean} 	showBadge = [true|false] 		是否显示数字角标
	 * @property {Boolean} 	showSwitch = [true|false] 		是否显示Switch
	 * @property {Boolean} 	switchChecked = [true|false] 	Switch是否被选中
	 * @property {Boolean} 	showExtraIcon = [true|false] 	左侧是否显示扩展图标
	 * @property {Object} 	extraIcon 						扩展图标参数，格式为 {color: '#4cd964',size: '22',type: 'spinner'}
	 * @property {String} 	direction = [row|column]		排版方向
	 * @value row 			水平排列
	 * @value column 		垂直排列
	 * @event {Function} 	click 							点击 uniListItem 触发事件
	 * @event {Function} 	switchChange 					点击切换 Switch 时触发
	 */
	export default {
		name: 'UniListItem',
		emits: ['click', 'switchChange'],
		props: {
			direction: {
				type: String,
				default: 'row'
			},
			title: {
				type: String,
				default: ''
			},
			note: {
				type: String,
				default: ''
			},
			ellipsis: {
				type: [Number,String],
				default: 0
			},
			disabled: {
				type: [Boolean, String],
				default: false
			},
			clickable: {
				type: Boolean,
				default: false
			},
			showArrow: {
				type: [Boolean, String],
				default: false
			},
			link: {
				type: [Boolean, String],
				default: false
			},
			to: {
				type: String,
				default: ''
			},
			showBadge: {
				type: [Boolean, String],
				default: false
			},
			showSwitch: {
				type: [Boolean, String],
				default: false
			},
			switchChecked: {
				type: [Boolean, String],
				default: false
			},
			badgeText: {
				type: String,
				default: ''
			},
			badgeType: {
				type: String,
				default: 'success'
			},
			rightText: {
				type: String,
				default: ''
			},
			thumb: {
				type: String,
				default: ''
			},
			thumbSize: {
				type: String,
				default: 'base'
			},
			showExtraIcon: {
				type: [Boolean, String],
				default: false
			},
			extraIcon: {
				type: Object,
				default () {
					return {
						type: 'contact',
						color: '#000000',
						size: 20
					};
				}
			},
			border: {
				type: Boolean,
				default: true
			}
		},
		// inject: ['list'],
		data() {
			return {
				isFirstChild: false,
				borderFull:false
			};
		},
		mounted() {
			this.list = this.getForm()
			// 判断是否存在 uni-list 组件
			if (this.list) {
				if (!this.list.firstChildAppend) {
					this.list.firstChildAppend = true;
					this.isFirstChild = true;
				}
				this.borderFull = this.list.borderFull
			}
		},
		methods: {
			/**
			 * 获取父元素实例
			 */
			getForm(name = 'uniList') {
				let parent = this.$parent;
				let parentName = parent.$options.name;
				while (parentName !== name) {
					parent = parent.$parent;
					if (!parent) return false
					parentName = parent.$options.name;
				}
				return parent;
			},
			onClick() {
				if (this.to !== '') {
					this.openPage();
					return;
				}
				if (this.clickable) {
					this.$emit('click', {
						data: {}
					});
				}
			},
			onSwitchChange(e) {
				this.$emit('switchChange', e.detail);
			},
			openPage() {
				if (['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'].indexOf(this.link) !== -1) {
					this.pageApi(this.link);
				} else {
					this.pageApi('navigateTo');
				}
			},
			pageApi(api) {
				let callback = {
					url: this.to,
					success: res => {
						this.$emit('click', {
							data: res
						});
					},
					fail: err => {
						this.$emit('click', {
							data: err
						});
					}
				}
				switch (api) {
					case 'navigateTo':
						uni.navigateTo(callback)
						break
					case 'redirectTo':
						uni.redirectTo(callback)
						break
					case 'reLaunch':
						uni.reLaunch(callback)
						break
					case 'switchTab':
						uni.switchTab(callback)
						break
					default:
						uni.navigateTo(callback)
				}
			}
		}
	};
</script>

<style lang="scss">
	.uni-list-item__border {
		margin-left: 15px;
		&.uni-border--full {
			margin-left: 0;
		}
	}
	.uni-list-item {
		position: relative;
	}
	.uni-list-item--disabled {
		opacity: 0.3;
	}
	.uni-list-item--dense {
		.uni-list-item__content {
			padding: 8px 0;
		}
	}
	.uni-list-item-box {
		display: flex;
		flex-direction: row;
		flex: 1;
		align-items: center;
		padding: 0 15px;

		.uni-list-item__icon {
			display: flex;
			align-items: center;
			width: 40px;
			// margin-top: 8px;
			// margin-bottom: 8px;
			margin-right: 10px;
			.uni-list-item__icon-img {
				/* #ifndef APP-NVUE */
				display: block;
				flex-shrink: 0;
				/* #endif */
				height: $uni-img-size-base;
				width: $uni-img-size-base;
				vertical-align: middle;
				overflow: hidden;
			}
			.uni-list--lg {
				height: $uni-img-size-lg;
				width: $uni-img-size-lg;
			}

			.uni-list--base {
				height: $uni-img-size-base;
				width: $uni-img-size-base;
			}

			.uni-list--sm {
				height: $uni-img-size-sm;
				width: $uni-img-size-sm;
			}
		}

		.uni-list-item__content {
			padding: 12px 0;
			flex: 1;
			overflow: hidden;
			&-title {
				font-size: 15px;
				line-height: 20px;
				color: #3b4144;
				overflow: hidden;
			}

			&-subtitle {
				margin-top: 3px;
				color: $uni-text-color-grey;
				font-size: 12px;
			}
		}
		.uni-list-item__actions {
			display: flex;
			align-items: center;
			&-text {
				color: $uni-text-color-grey;
				font-size: $uni-font-size-sm;
				line-height: 1;
				margin-left: 10px;
			}
		}
		.uni-arrow-icon {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			align-items: center;
			padding-left: 10px;
		}
	}
	.uni-ellipsis-1 {
		/* #ifndef APP-NVUE */
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		/* #endif */
		/* #ifdef APP-NVUE */
		lines: 1;
		/* #endif */
	}

	.uni-ellipsis-2 {
		/* #ifndef APP-NVUE */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		/* #endif */

		/* #ifdef APP-NVUE */
		lines: 2;
		/* #endif */
	}
	.uni-list-item--hover {
		background-color: $uni-bg-color-hover;
	}
	.uni-list--border {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		/* #ifdef APP-NVUE */
		border-top-color: #eee;
		border-top-style: solid;
		border-top-width: 0.5px;
		/* #endif */
	}

	/* #ifndef APP-NVUE */
	.uni-list--border:after {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		background-color: #eee;
	}
	/* #endif */
</style>
