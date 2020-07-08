export default {
	props: {
		isFill: {
			// 星星的类型，是否镂空
			type: [Boolean, String],
			default: true
		},
		color: {
			// 星星未选中的颜色
			type: String,
			default: "#ececec"
		},
		activeColor: {
			// 星星选中状态颜色
			type: String,
			default: "#ffca3e"
		},
		disabledColor: {
			// 星星禁用状态颜色
			type: String,
			default: "#c0c0c0"
		},
		size: {
			// 星星的大小
			type: [Number, String],
			default: 24
		},
		value: {
			// 当前评分
			type: [Number, String],
			default: 1
		},
		max: {
			// 最大评分
			type: [Number, String],
			default: 5
		},
		margin: {
			// 星星的间距
			type: [Number, String],
			default: 0
		},
		disabled: {
			// 是否可点击
			type: [Boolean, String],
			default: false
		},
		readonly: {
			// 是否只读
			type: [Boolean, String],
			default: false
		},
		allowHalf: {
			// 是否显示半星
			type: [Boolean, String],
			default: false
		},
		touchable: {
			// 是否支持滑动手势
			type: [Boolean, String],
			default: true
		}
	},
	data() {
		return {
			valueSync: ""
		};
	},
	watch: {
		value(newVal) {
			this.valueSync = Number(newVal);
		}
	},
	computed: {
		stars() {
			const value = this.valueSync ? this.valueSync : 0;
			const starList = [];
			const floorValue = Math.floor(value);
			const ceilValue = Math.ceil(value);
			for (let i = 0; i < this.max; i++) {
				if (floorValue > i) {
					starList.push({
						activeWitch: "100%"
					});
				} else if (ceilValue - 1 === i) {
					starList.push({
						activeWitch: (value - floorValue) * 100 + "%"
					});
				} else {
					starList.push({
						activeWitch: "0"
					});
				}
			}
			return starList;
		}
	},
	created() {
		this.valueSync = Number(this.value);
		this._rateBoxLeft = 0
		this._oldValue = null
	},
	mounted() {
		this.$nextTick(() => {
			setTimeout(this._getSize(), 50)
		})
	},
	methods: {

		touchstart(e) {
			console.log(this.readonly || this.disabled);
			if (this.readonly || this.disabled) return
			const {
				clientX
			} = e.changedTouches[0]
			this._getRateCount(clientX)
		},
		touchmove(e) {
			if (this.readonly || this.disabled || !this.touchable) return
			const {
				clientX
			} = e.changedTouches[0]
			this._getRateCount(clientX)
		},
		/**
		 * 获取星星个数
		 */
		_getRateCount(clientX) {
			const rateMoveRange = clientX - this._rateBoxLeft
			const index = parseInt(rateMoveRange / (this.size + this.margin))
			const range = parseInt(rateMoveRange - ((this.size + this.margin) * index))
			let value = 0

			if (this.allowHalf) {
				if (range > (this.size / 2)) {
					value = index + 1
				} else {
					value = index + 0.5
				}
			} else {
				value = index + 1
			}

			value = Math.max(0.5, Math.min(value, this.max))
			if (this.valueSync !== value) {
				this.valueSync = value
				this._onChange()
			}
			// const rateCount = parseInt(rateMoveRange / (this.size / 2)) + 1
		},

		/**
		 * 触发动态修改
		 */
		_onChange() {

			this.$emit("input", this.valueSync);
			this.$emit("change", {
				value: this.valueSync
			});
		},
		/**
		 * 获取星星距离屏幕左侧距离
		 */
		_getSize() {
			// #ifndef APP-NVUE
			uni.createSelectorQuery()
				.in(this)
				.select('.uni-rate')
				.boundingClientRect()
				.exec(ret => {
					if (ret) {
						this._rateBoxLeft = ret[0].left
					}
				})
			// #endif
			// #ifdef APP-NVUE
			dom.getComponentRect(this.$refs['uni-rate'], (ret) => {
				console.log(ret);
			})
			// #endif
		}
	}
}
