<template>
	<text class="uni-badge" v-if="text" :class="setClass" @click="onClick()">{{text}}</text>
</template>

<script>
	export default {
		name: 'uni-badge',
		props: {
			type: {
				type: String,
				default: 'default'
			},
			inverted: {
				type: Boolean,
				default: false
			},
			text: {
				type: String,
				default: ''
			},
			size: { //small.normal
				type: String,
				default: 'normal'
			}
		},
		computed: {
			setClass() {
				let classList = ['uni-badge-' + this.type, 'uni-badge--' + this.size];
				if (this.inverted === true) {
					classList.push('uni-badge-inverted')
				}
				return classList.join(" ")
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	$bage-size:12px;
	$bage-small:scale(0.8);

	.uni-badge {
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		box-sizing: border-box;
		font-size: $bage-size;
		line-height: 1;
		display: inline-block;
		padding: 3px 6px;
		color: $uni-text-color;
		border-radius: 100px;
		background-color: $uni-background-color-hover;

		&.uni-badge-inverted {
			padding: 0 5px 0 0;
			color: $uni-text-color-grey;
			background-color: transparent;
		}

		&-primary {
			color: #fff;
			background-color: $uni-color-primary;

			&.uni-badge-inverted {
				color: $uni-color-primary;
				background-color: transparent
			}
		}

		&-success {
			color: #fff;
			background-color: $uni-color-success;

			&.uni-badge-inverted {
				color: $uni-color-success;
				background-color: transparent
			}
		}

		&-warning {
			color: #fff;
			background-color: $uni-color-warning;

			&.uni-badge-inverted {
				color: $uni-color-warning;
				background-color: transparent
			}
		}

		&-danger {
			color: #fff;
			background-color: $uni-color-danger;

			&.uni-badge-inverted {
				color: $uni-color-danger;
				background-color: transparent
			}
		}

		&-royal {
			color: #fff;
			background-color: $uni-color-royal;

			&.uni-badge-inverted {
				color: $uni-color-royal;
				background-color: transparent
			}
		}

		&--small {
			transform: $bage-small;
			transform-origin: center center;
		}
	}
</style>
