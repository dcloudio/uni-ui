<template>
	<!-- #ifdef APP-NVUE -->
	<text :style="styleObj" class="uni-icons" @click="_onClick">{{unicode}}</text>
	<!-- #endif -->
	<!-- #ifndef APP-NVUE -->
	<text :style="styleObj" class="uni-icons" :class="['uniui-'+type,customPrefix,customPrefix?type:'']" @click="_onClick">
		<slot></slot>
	</text>
	<!-- #endif -->
</template>

<script setup>
	import { computed } from 'vue';
	import { fontData } from './uniicons_file_vue.js';

	const getVal = (val) => {
		const reg = /^[0-9]*$/g
		return (typeof val === 'number' || reg.test(val)) ? val + 'px' : val;
	}

	// #ifdef APP-NVUE
	var domModule = weex.requireModule('dom');
	import iconUrl from './uniicons.ttf'
	domModule.addRule('fontFace', {
		'fontFamily': "uniicons",
		'src': "url('" + iconUrl + "')"
	});
	// #endif

	/**
	 * Icons 图标
	 * @description 用于展示 icons 图标
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=28
	 * @property {Number} size 图标大小
	 * @property {String} type 图标图案，参考示例
	 * @property {String} color 图标颜色
	 * @property {String} customPrefix 自定义图标
	 * @event {Function} click 点击 Icon 触发事件
	 */
	defineOptions({
		name: 'UniIcons'
	})

	const emit = defineEmits(['click'])

	const props = defineProps({
		type: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: '#333333'
		},
		size: {
			type: [Number, String],
			default: 16
		},
		customPrefix: {
			type: String,
			default: ''
		},
		fontFamily: {
			type: String,
			default: ''
		}
	})

	const icons = fontData

	const unicode = computed(() => {
		let code = icons.find(v => v.font_class === props.type)
		if (code) {
			return code.unicode
		}
		return ''
	})

	const iconSize = computed(() => {
		return getVal(props.size)
	})

	const styleObj = computed(() => {
		if (props.fontFamily !== '') {
			return `color: ${props.color}; font-size: ${iconSize.value}; font-family: ${props.fontFamily};`
		}
		return `color: ${props.color}; font-size: ${iconSize.value};`
	})

	const _onClick = (e) => {
		emit('click', e)
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	@import './uniicons.css';

	@font-face {
		font-family: uniicons;
		src: url('./uniicons.ttf');
	}

	/* #endif */
	.uni-icons {
		font-family: uniicons;
		text-decoration: none;
		text-align: center;
	}
</style>
