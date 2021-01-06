<template>
	<view :class="['uni-col', sizeClassList, pointClassList]" :style="{
		paddingLeft:`${Number(gutter)}rpx`,
		paddingRight:`${Number(gutter)}rpx`,
	}">
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * uni-col	布局-列
	 * @description	搭配uni-row使用，构建布局。
	 * @tutorial	https://ext.dcloud.net.cn/plugin?id=
	 *
	 * @property	{span} type = Number 栅格占据的列数
	 * 						默认 24
	 * @property	{offset} type = Number 栅格左侧的间隔格数
	 * @property	{push} type = Number 栅格向右移动格数
	 * @property	{pull} type = Number 栅格向左移动格数
	 * @property	{xs} type = [Number, Object] <768px 响应式栅格数或者栅格属性对象
	 * 						@description	Number时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}
	 * @property	{sm} type = [Number, Object] ≥768px 响应式栅格数或者栅格属性对象
	 * 						@description	Number时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}
	 * @property	{md} type = [Number, Object] ≥992px 响应式栅格数或者栅格属性对象
	 * 						@description	Number时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}
	 * @property	{lg} type = [Number, Object] ≥1200px 响应式栅格数或者栅格属性对象
	 * 						@description	Number时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}
	 * @property	{xl} type = [Number, Object] ≥1920px 响应式栅格数或者栅格属性对象
	 * 						@description	Number时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}
	 */
	const ComponentClass = 'uni-col';

	// -1 默认值，因为在微信小程序端只给Number会有默认值0
	export default {
		name: 'uniCol',
		// #ifdef MP-WEIXIN
		options: {
			virtualHost: true // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现
		},
		// #endif
		props: {
			span: {
				type: Number,
				default: 24
			},
			offset: {
				type: Number,
				default: -1
			},
			pull: {
				type: Number,
				default: -1
			},
			push: {
				type: Number,
				default: -1
			},
			xs: [Number, Object],
			sm: [Number, Object],
			md: [Number, Object],
			lg: [Number, Object],
			xl: [Number, Object]
		},
		data() {
			return {
				gutter: 0
			}
		},
		created() {
			// 字节小程序中，在computed中读取$parent为undefined
			let parent = this.$parent;

			while (parent && parent.$options.componentName !== 'uniRow') {
				parent = parent.$parent;
			}

			this.updateGutter(parent.gutter)

			parent.$watch('gutter', (gutter) => {
				this.updateGutter(gutter)
			})
		},
		computed: {
			sizeClassList() {
				let classList = [];

				['span', 'offset', 'pull', 'push'].forEach(size => {
					const curSize = this[size];
					if ((curSize || curSize === 0) && curSize !== -1) {
						classList.push(
							size === 'span' ?
							`${ComponentClass}-${curSize}` :
							`${ComponentClass}-${size}-${curSize}`
						)
					}
				});

				// 支付宝小程序使用 :class=[ ['a','b'] ]，渲染错误
				return classList.join(' ');
			},
			pointClassList() {
				let classList = [];

				['xs', 'sm', 'md', 'lg', 'xl'].forEach(point => {
					const props = this[point];
					if (typeof props === 'number') {
						classList.push(`${ComponentClass}-${point}-${props}`)
					} else if (typeof props === 'object' && props) {
						Object.keys(props).forEach(pointProp => {
							classList.push(
								pointProp === 'span' ?
								`${ComponentClass}-${point}-${props[pointProp]}` :
								`${ComponentClass}-${point}-${pointProp}-${props[pointProp]}`
							)
						})
					}
				});

				// 支付宝小程序使用 :class=[ ['a','b'] ]，渲染错误
				return classList.join(' ');
			}
		},
		methods: {
			updateGutter(parentGutter) {
				parentGutter = Number(parentGutter);
				if (!isNaN(parentGutter)) {
					this.gutter = parentGutter / 2
				}
			}
		}
	}
</script>
<style lang='scss' scoped>
	$layout-namespace: ".uni-";
	$col: $layout-namespace+"col";

	@function getSize($size) {
		@return 1 / 24 * $size * 100 * 1%;
	}

	@mixin res($key, $map:$breakpoints) {
		@if map-has-key($map, $key) {
			@media screen and #{inspect(map-get($map,$key))} {
				@content;
			}
		}

		@else {
			@warn "Undeinfed point: `#{$key}`";
		}
	}

	@mixin uni-hidden {
		/* #ifndef APP-NVUE */
		display: none;
		/* #endif */
		/* #ifndef APP-NVUE */
		width: 0px;
		height: 0px;
		margin: 0px;
		padding: 0px;
		border-width: 0px;
		/* #endif */
	}

	#{$col} {
		/* #ifdef MP-QQ || MP-TOUTIAO || MP-BAIDU */
		/* float: left; */
		/* #endif */

		/* #ifndef APP-NVUE */
		float: left;
		box-sizing: border-box;
		/* #endif */
	}

	#{$col}-0 {
		@include uni-hidden;
	}

	@for $i from 0 through 24 {
		#{$col}-#{$i} {
			width: getSize($i);
		}

		#{$col}-offset-#{$i} {
			margin-left: getSize($i);
		}

		#{$col}-pull-#{$i} {
			position: relative;
			right: getSize($i);
		}

		#{$col}-push-#{$i} {
			position: relative;
			left: getSize($i);
		}
	}

	@each $point in map-keys($breakpoints) {
		@include res($point) {
			#{$col}-#{$point}-0 {
				@include uni-hidden;
			}

			@for $i from 0 through 24 {
				#{$col}-#{$point}-#{$i} {
					width: getSize($i);
				}

				#{$col}-#{$point}-offset-#{$i} {
					margin-left: getSize($i);
				}

				#{$col}-#{$point}-pull-#{$i} {
					position: relative;
					right: getSize($i);
				}

				#{$col}-#{$point}-push-#{$i} {
					position: relative;
					left: getSize($i);
				}
			}
		}
	}
</style>
