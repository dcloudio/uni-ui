<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用</text>
		</uni-card>
		<uni-section title="单选" type="line">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">单选选中：{{JSON.stringify(radio1)}}</view>
				<uni-data-checkbox v-model="radio1" :localdata="sex"></uni-data-checkbox>
			</view>
		</uni-section>
		<uni-section title="多选" subTitle="使用multiple属性开启多选" type="line">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox1)}}</view>
				<uni-data-checkbox multiple v-model="checkbox1" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="最大最小值" subTitle="使用 min / max 设置多选的最大最小值,单选无效">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">选中：{{JSON.stringify(checkbox6)}}</view>
				<uni-data-checkbox min="1" max="2" multiple v-model="checkbox6" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="更多样式 - button" subTitle="使用mode=button属性使用按钮样式" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio2)}}</view>
				<uni-data-checkbox mode="button" v-model="radio2" :localdata="sex"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox2)}}</view>
				<uni-data-checkbox mode="button" multiple v-model="checkbox2" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="更多样式 - tag" subTitle="使用mode=tag属性使用标签样式" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio3)}}</view>
				<uni-data-checkbox mode="tag" v-model="radio3" :localdata="sex"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox3)}}</view>
				<uni-data-checkbox mode="tag" multiple v-model="checkbox3" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="禁用" subTitle="数据中使用 disable 属性实现单独禁用,组件使用 disable 属性实现全部禁用" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio4)}}</view>
				<uni-data-checkbox mode="button" v-model="radio4" :localdata="sex1"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox4)}}</view>
				<uni-data-checkbox mode="button" multiple v-model="checkbox4" :localdata="hobby2">
				</uni-data-checkbox>
			</view>
		</uni-section>



		<uni-section title="自定义高亮颜色" subTitle="使用 selectedColor 属性修改颜色" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio5)}}</view>
				<uni-data-checkbox selectedColor="red" v-model="radio5" :localdata="sex1"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox5)}}</view>
				<uni-data-checkbox selectedColor="red" multiple v-model="checkbox5" :localdata="hobby2">
				</uni-data-checkbox>
			</view>
		</uni-section>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				radio1: 0,
				radio2: 0,
				radio3: 0,
				radio4: 0,
				radio5: 0,
				radio6: 0,
				checkbox1: [0],
				checkbox2: [0],
				checkbox3: [0],
				checkbox4: [0],
				checkbox5: [0],
				checkbox6: [0],
				sex: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}, {
					text: '未知',
					value: 2
				}],
				sex1: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1,
					disable: true
				}, {
					text: '未知',
					value: 2
				}],
				hobby: [{
					text: '足球',
					value: 0
				}, {
					text: '篮球',
					value: 1
				}, {
					text: '游泳',
					value: 2
				}],
				hobby2: [{
					text: '足球',
					value: 0,
					disable: true
				}, {
					text: '篮球',
					value: 1,
					disable: true
				}, {
					text: '游泳',
					value: 2
				}],
			}
		},
		onLoad() {},
		onReady() {},
		methods: {}
	}
</script>

<style lang="scss">
	.text {
		font-size: 12px;
		color: #666;
		margin-top: 5px;
	}

	.uni-px-5 {
		padding-left: 10px;
		padding-right: 10px;
	}

	.uni-pb-5 {
		padding-bottom: 10px;
	}

	$uni-primary: #2979ff !default;
	$border-color: #DCDFE6;
	$disable: 0.4;

	@mixin flex {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
	}

	.uni-data-loading {
		@include flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 36px;
		padding-left: 10px;
		color: #999;
	}

	.uni-data-checklist {
		position: relative;
		z-index: 0;
		flex: 1;

		// 多选样式
		.checklist-group {
			@include flex;
			flex-direction: row;
			flex-wrap: wrap;

			&.is-list {
				flex-direction: column;
			}

			.checklist-box {
				@include flex;
				flex-direction: row;
				align-items: center;
				position: relative;
				margin: 5px 0;
				margin-right: 25px;

				.hidden {
					position: absolute;
					opacity: 0;
				}

				// 文字样式
				.checklist-content {
					@include flex;
					flex: 1;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;

					.checklist-text {
						font-size: 14px;
						color: #666;
						margin-left: 5px;
						line-height: 14px;
					}

					.checkobx__list {
						border-right-width: 1px;
						border-right-color: #007aff;
						border-right-style: solid;
						border-bottom-width: 1px;
						border-bottom-color: #007aff;
						border-bottom-style: solid;
						height: 12px;
						width: 6px;
						left: -5px;
						transform-origin: center;
						transform: rotate(45deg);
						opacity: 0;
					}
				}

				// 多选样式
				.checkbox__inner {
					/* #ifndef APP-NVUE */
					flex-shrink: 0;
					box-sizing: border-box;
					/* #endif */
					position: relative;
					width: 16px;
					height: 16px;
					border: 1px solid $border-color;
					border-radius: 4px;
					background-color: #fff;
					z-index: 1;

					.checkbox__inner-icon {
						position: absolute;
						/* #ifdef APP-NVUE */
						top: 2px;
						/* #endif */
						/* #ifndef APP-NVUE */
						top: 1px;
						/* #endif */
						left: 5px;
						height: 8px;
						width: 4px;
						border-right-width: 1px;
						border-right-color: #fff;
						border-right-style: solid;
						border-bottom-width: 1px;
						border-bottom-color: #fff;
						border-bottom-style: solid;
						opacity: 0;
						transform-origin: center;
						transform: rotate(40deg);
					}
				}

				// 单选样式
				.radio__inner {
					@include flex;
					/* #ifndef APP-NVUE */
					flex-shrink: 0;
					box-sizing: border-box;
					/* #endif */
					justify-content: center;
					align-items: center;
					position: relative;
					width: 16px;
					height: 16px;
					border: 1px solid $border-color;
					border-radius: 16px;
					background-color: #fff;
					z-index: 1;

					.radio__inner-icon {
						width: 8px;
						height: 8px;
						border-radius: 10px;
						opacity: 0;
					}
				}

				// 默认样式
				&.is--default {

					// 禁用
					&.is-disable {
						/* #ifdef H5 */
						cursor: not-allowed;

						/* #endif */
						.checkbox__inner {
							background-color: #F2F6FC;
							border-color: $border-color;
							/* #ifdef H5 */
							cursor: not-allowed;
							/* #endif */
						}

						.radio__inner {
							background-color: #F2F6FC;
							border-color: $border-color;
						}

						.checklist-text {
							color: #999;
						}
					}

					// 选中
					&.is-checked {
						.checkbox__inner {
							border-color: $uni-primary;
							background-color: $uni-primary;

							.checkbox__inner-icon {
								opacity: 1;
								transform: rotate(45deg);
							}
						}

						.radio__inner {
							border-color: $uni-primary;

							.radio__inner-icon {
								opacity: 1;
								background-color: $uni-primary;
							}
						}

						.checklist-text {
							color: $uni-primary;
						}

						// 选中禁用
						&.is-disable {
							.checkbox__inner {
								opacity: $disable;
							}

							.checklist-text {
								opacity: $disable;
							}

							.radio__inner {
								opacity: $disable;
							}
						}
					}
				}

				// 按钮样式
				&.is--button {
					margin-right: 10px;
					padding: 5px 10px;
					border: 1px $border-color solid;
					border-radius: 3px;
					transition: border-color 0.2s;

					// 禁用
					&.is-disable {
						/* #ifdef H5 */
						cursor: not-allowed;
						/* #endif */
						border: 1px #eee solid;
						opacity: $disable;

						.checkbox__inner {
							background-color: #F2F6FC;
							border-color: $border-color;
							/* #ifdef H5 */
							cursor: not-allowed;
							/* #endif */
						}

						.radio__inner {
							background-color: #F2F6FC;
							border-color: $border-color;
							/* #ifdef H5 */
							cursor: not-allowed;
							/* #endif */
						}

						.checklist-text {
							color: #999;
						}
					}

					&.is-checked {
						border-color: $uni-primary;

						.checkbox__inner {
							border-color: $uni-primary;
							background-color: $uni-primary;

							.checkbox__inner-icon {
								opacity: 1;
								transform: rotate(45deg);
							}
						}

						.radio__inner {
							border-color: $uni-primary;

							.radio__inner-icon {
								opacity: 1;
								background-color: $uni-primary;
							}
						}

						.checklist-text {
							color: $uni-primary;
						}

						// 选中禁用
						&.is-disable {
							opacity: $disable;
						}
					}
				}

				// 标签样式
				&.is--tag {
					margin-right: 10px;
					padding: 5px 10px;
					border: 1px $border-color solid;
					border-radius: 3px;
					background-color: #f5f5f5;

					.checklist-text {
						margin: 0;
						color: #666;
					}

					// 禁用
					&.is-disable {
						/* #ifdef H5 */
						cursor: not-allowed;
						/* #endif */
						opacity: $disable;
					}

					&.is-checked {
						background-color: $uni-primary;
						border-color: $uni-primary;

						.checklist-text {
							color: #fff;
						}
					}
				}

				// 列表样式
				&.is--list {
					/* #ifndef APP-NVUE */
					display: flex;
					/* #endif */
					padding: 10px 15px;
					padding-left: 0;
					margin: 0;

					&.is-list-border {
						border-top: 1px #eee solid;
					}

					// 禁用
					&.is-disable {
						/* #ifdef H5 */
						cursor: not-allowed;

						/* #endif */
						.checkbox__inner {
							background-color: #F2F6FC;
							border-color: $border-color;
							/* #ifdef H5 */
							cursor: not-allowed;
							/* #endif */
						}

						.checklist-text {
							color: #999;
						}
					}

					&.is-checked {
						.checkbox__inner {
							border-color: $uni-primary;
							background-color: $uni-primary;

							.checkbox__inner-icon {
								opacity: 1;
								transform: rotate(45deg);
							}
						}

						.radio__inner {
							.radio__inner-icon {
								opacity: 1;
							}
						}

						.checklist-text {
							color: $uni-primary;
						}

						.checklist-content {
							.checkobx__list {
								opacity: 1;
								border-color: $uni-primary;
							}
						}

						// 选中禁用
						&.is-disable {
							.checkbox__inner {
								opacity: $disable;
							}

							.checklist-text {
								opacity: $disable;
							}
						}
					}
				}
			}
		}
	}
</style>
