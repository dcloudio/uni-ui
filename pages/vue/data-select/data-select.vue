<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用</text>
		</uni-card>
    <uni-section title="自定义 slot:content" subTitle="多选的时候,超过 2 个显示省略" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="multipleValue" mode="underline" multiple :localdata="range">
          <template v-slot:content="{selected}">
            <view v-for="item in selected.slice(0, 2)" :key="item.value" class="slot-content-item">
              {{item.text}}
            </view>
            <view v-if="selected.length > 2" class="slot-content-item">
              +{{selected.length - 2}} more
            </view>
          </template>
        </uni-data-select>
			</view>
		</uni-section>

		<uni-section title="本地数据 (多选)" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="multipleValue" mode="underline" multiple :localdata="range" @change="changeMultiple" @open="open" @close="close" @clear="clear"></uni-data-select>
			</view>
		</uni-section>
		<uni-section title="本地数据 (单选)" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
			</view>
		</uni-section>
		<uni-section title="禁用状态" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" :disabled="true" :localdata="range"></uni-data-select>
			</view>
		</uni-section>
		<!-- 		<uni-section title="云端数据" subTitle="连接云服务空间, 且存在相关的数据表才能生效(此处演示, 未连接云服务空间, 故不生效, 且有报错)" type="line">
			<uni-data-select collection="opendb-app-list" field="appid as value, name as text" v-mode="value" />
		</uni-section> -->
		<uni-section title="是否可清除已选项" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" :localdata="range" @change="change" :clear="false"></uni-data-select>
			</view>
		</uni-section>
		<uni-section title="配置左侧标题" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" :localdata="range" @change="change" label="应用选择"></uni-data-select>
			</view>
		</uni-section>
		<uni-section title="设置弹出位置" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select placement="top" v-model="value" :localdata="range" @change="change"
					label="应用选择"></uni-data-select>
			</view>
		</uni-section>
		<uni-section title="设置文字出现位置(center)" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select  align="center" v-model="value" :localdata="range" @change="change"
					label="应用选择"></uni-data-select>
			</view>
		</uni-section>
    <uni-section title="单选换行显示(wrap)" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="lineValue"  wrap :localdata="range" @change="change"
					label="换行显示"></uni-data-select>
			</view>
		</uni-section>
		<uni-section title="多选换行显示(wrap)" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="multipleValue" mode="underline" multiple wrap :localdata="range" @change="changeMultiple"
					label="换行显示"></uni-data-select>
			</view>
		</uni-section>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				value: 0,
        lineValue: 3,
				multipleValue: [1, 3, 4, 5],
				range: [{
					"value": 0,
					"text": "篮球运动锻炼",
					"disable": true
				}, {
					"value": 1,
					"text": "足球",
				}, {
					"value": 2,
					"text": "游泳健身"
				}, {
					"value": 3,
					"text": "跑步有氧运动",
				}, {
					"value": 4,
					"text": "网球"
				}, {
					"value": 5,
					"text": "羽毛球运动"
				}, {
					"value": 6,
					"text": "乒乓球运动"
				}]
			}
		},
		methods: {
			change(e) {
				console.log('单选值:', e);
			},
			changeMultiple(e) {
				console.log('多选值:', e);
			},
			open(){
				console.log("打开选择框")
			},
			close(){
				console.log("关闭选择框")
			},
			clear(){
				console.log("清除选择框")
			},
		}
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

  .slot-content-item {
    display: inline-block;
    margin-right: 5px;
    background-color: $uni-secondary-color;
    padding: 2px 5px;
    border-radius: 5px;
    color: #fff;
  }
</style>
