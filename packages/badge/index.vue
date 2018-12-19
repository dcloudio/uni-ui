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
	$primary:#007aff;
	$success:#4cd964;
	$warning:#f0ad4e;
	$danger:#dd524d;
	$royal:#8a6de9;
    $bage-small:scale(0.8);

	.uni-badge {
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		box-sizing: border-box;
		font-size: $bage-size;
		line-height: 1;
		display: inline-block;
		padding: 3px 6px;
		color: #333;
		border-radius: 100px;
		background-color: rgba(0, 0, 0, .15);

		&.uni-badge-inverted {
			padding: 0 5px 0 0;
			color: #929292;
			background-color: transparent;
		}

		&-primary {
			color: #fff;
			background-color: $primary;

			&.uni-badge-inverted {
				color: $primary;
				background-color: transparent
			}
		}

		&-success {
			color: #fff;
			background-color: $success;

			&.uni-badge-inverted {
				color: $success;
				background-color: transparent
			}
		}

		&-warning {
			color: #fff;
			background-color: $warning;

			&.uni-badge-inverted {
				color: $warning;
				background-color: transparent
			}
		}

		&-danger {
			color: #fff;
			background-color: $danger;

			&.uni-badge-inverted {
				color: $danger;
				background-color: transparent
			}
		}

		&-royal {
			color: #fff;
			background-color: $royal;

			&.uni-badge-inverted {
				color: $royal;
				background-color: transparent
			}
		}
        &--small{
            transform: $bage-small;
            transform-origin: center center;
        }
	}
</style>
