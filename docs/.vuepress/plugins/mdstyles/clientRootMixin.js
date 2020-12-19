import Vue from "vue";

export default {
	updated() {
		// 等待dom加载完成之后执行
		this.$nextTick(() => {
			this.update();
		});
	},
	methods: {
		update() {
			console.log('执行一次');
			// 获取所有的dom，之后在所有的代码块上插入vue的组件
			const dom = Array.from(document.querySelectorAll(selector));
			dom.forEach(el => {
				if (/md-styles-box/.test(el.parentNode.className)) {
					return;
				}
				console.log(el.parentNode.className);
				let elem = document.createElement('div')
				elem.className = 'md-styles-box';
				el.parentNode.replaceChild(elem, el)

				let mdBoxHeader = document.createElement('div')
				mdBoxHeader.className = 'md-box-header'
				
				for(let i=0;i<3;i++){
					let mdBoxHeaderItem = document.createElement('div')
					mdBoxHeaderItem.className = 'md-box-header-item'
					mdBoxHeader.appendChild(mdBoxHeaderItem)
				}
				
				elem.appendChild(mdBoxHeader)
				elem.appendChild(el)
				console.log(elem);
			});
		}
	}
};
