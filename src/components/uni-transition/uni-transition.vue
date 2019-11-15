<template>
	<view v-if="isShow" ref="ani" class="uni-transition" :class="[ani.in]" :style="'transform:' +transform+';'+stylesObject"
	 @click="change">
		<slot></slot>
	</view>
</template>

<script>
	let timer = null
	const nextTick = (time = 50) => new Promise(resolve => {
		clearTimeout(timer)
		timer = setTimeout(resolve, time)
		return timer
	});
	// #ifdef APP-NVUE
	const animation = uni.requireNativePlugin('animation');
	// #endif
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			modeClass: {
				type: [Array, String],
				default () {
					return []
				}
			},
			duration: {
				type: Number,
				default: 300
			},
			styles: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				isShow: false,
				transform: '',
				ani: { in: '',
					active: ''
				}
			};
		},
		watch: {
			show(newVal) {
				if (newVal) {
					this.open()
				} else {
					this.close()
				}
			}
		},
		computed: {
			stylesObject() {
				let styles = {
					...this.styles
				}
				let transfrom = ''
				for (let i in styles) {
					transfrom += i + ':' + styles[i] + ';'
				}
				return transfrom
			}
		},
		methods: {
			change() {
				this.$emit('change', {
					detail: this.isShow
				})
			},
			open() {
				this.isShow = true
				this.transform = ''
				this.ani.in = ''
				for (let i in this.getTranfrom(false)) {
					if (i === 'opacity') {
						this.ani.in = 'fade-in'
					} else {
						this.transform += `${this.getTranfrom(false)[i]} `
					}
				}
				this.$nextTick(() => {
					Promise.resolve().then(nextTick).then(() => {
						this._animation(true)
					})
				})

			},
			close(type) {
				this._animation(false)
			},
			_animation(type) {
				let styles = this.getTranfrom(type)
				// #ifdef APP-NVUE
				animation.transition(this.getEl(this.$refs['ani']), {
					styles,
					duration: this.duration, //ms
					timingFunction: 'ease',
					needLayout: false,
					delay: 0 //ms
				}, () => {
					if (!type) {
						this.isShow = false
					}
				})
				// #endif
				// #ifndef APP-NVUE
				this.transform = ''
				for (let i in styles) {
					if (i === 'opacity') {
						this.ani.in = `fade-${type?'out':'in'}`
					} else {
						this.transform += `${styles[i]} `
					}
				}
				if (!type) {
					Promise.resolve().then(() => nextTick(this.duration)).then(() => {
						this.isShow = false
					})
				}
				// #endif

			},
			getTranfrom(type) {
				let styles = {
					transform: ''
				}
				this.modeClass.forEach((mode) => {
					switch (mode) {
						case 'fade':
							styles.opacity = type ? 1 : 0
							break;
						case 'slide-top':
							styles.transform += `translateY(${type?'0':'-100%'}) `
							break;
						case 'slide-right':
							styles.transform += `translateX(${type?'0':'100%'}) `
							break;
						case 'slide-bottom':
							styles.transform += `translateY(${type?'0':'100%'}) `
							break;
						case 'slide-left':
							styles.transform += `translateX(${type?'0':'-100%'}) `
							break;
						case 'zoom-in':
							styles.transform += `scale(${type?1:0}) `
							break;
						case 'zoom-out':
							styles.transform += `scale(${type?1:2}) `
							break;
					}
				})
				return styles
			},
			_modeClassArr(type) {
				let mode = this.modeClass
				if (typeof(mode) !== "string") {
					let modestr = ''
					mode.forEach((item) => {
						modestr += (item + '-' + type + ',')
					})
					return modestr.substr(0, modestr.length - 1)
				} else {
					return mode + '-' + type
				}
			},
			getEl(el) {
				return el.ref || null
			}
		}
	}
</script>

<style>
	.uni-transition {
		transition-timing-function: ease;
		transition-duration: 0.3s;
		transition-property: transform, opacity;
	}

	.fade-in {
		opacity: 0;
	}

	.fade-active {
		opacity: 1;
	}

	.slide-top-in {
		/* transition-property: transform, opacity; */
		transform: translateY(-100%);
	}

	.slide-top-active {
		transform: translateY(0);
		/* opacity: 1; */
	}

	.slide-right-in {
		transform: translateX(100%);
	}

	.slide-right-active {
		transform: translateX(0);
	}

	.slide-bottom-in {
		transform: translateY(100%);
	}

	.slide-bottom-active {
		transform: translateY(0);
	}

	.slide-left-in {
		transform: translateX(-100%);
	}

	.slide-left-active {
		transform: translateX(0);
		opacity: 1;
	}

	.zoom-in-in {
		transform: scale(0);
	}

	.zoom-out-active {
		transform: scale(1);
	}

	.zoom-out-in {
		transform: scale(2);
	}
</style>
