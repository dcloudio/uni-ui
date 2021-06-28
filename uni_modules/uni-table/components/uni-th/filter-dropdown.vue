<template>
	<view class="uni-filter-dropdown">
		<view class="dropdown-btn" @click="onDropdown">
			<view class="icon-select" :class="{active: canReset}" v-if="filterType == 'select'"></view>
			<view class="icon-search" :class="{active: canReset}" v-if="filterType == 'search'">
				<view class="icon-search-0"></view>
				<view class="icon-search-1"></view>
			</view>
		</view>
		<view class="uni-dropdown-cover" v-if="isOpened" @click="handleClose"></view>
		<view class="dropdown-popup dropdown-popup-right" v-if="isOpened" @click.stop>
			<view v-if="isSelect" class="list">
				<label class="flex-r a-i-c list-item" v-for="(item,index) in dataList" :key="index"
					@click="onItemClick($event, index)">
					<check-box class="check" :checked="item.checked" />
					<view class="checklist-content">
						<text class="checklist-text" :style="item.styleIconText">{{item[map.text]}}</text>
					</view>
				</label>
			</view>
			<view v-if="isSelect" class="flex-r opera-area">
				<view class="flex-f btn btn-default" :class="{disable: !canReset}" @click="handleSelectReset">{{resource.reset}}</view>
				<view class="flex-f btn btn-submit" @click="handleSelectSubmit">{{resource.submit}}</view>
			</view>
			<view v-if="isSearch" class="search-area">
				<input class="search-input" v-model="filterValue" />
			</view>
			<view v-if="isSearch" class="flex-r opera-area">
				<view class="flex-f btn btn-submit" @click="handleSearchSubmit">{{resource.search}}</view>
				<view class="flex-f btn btn-default":class="{disable: !canReset}" @click="handleSearchReset">{{resource.reset}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import checkBox from '../uni-tr/table-checkbox.vue'

	const resource = {
		"reset": "重置",
		"search": "搜索",
		"submit": "确定",
		"filter": "筛选"
	}

	const DropdownType = {
		Select: "select",
		Search: "search"
	}

	export default {
		name: 'FilterDropdown',
		components: {
			checkBox
		},
		options: {
			virtualHost: true
		},
		props: {
			filterType: {
				type: String,
				default: DropdownType.Select
			},
			filterData: {
				type: Array,
				default () {
					return []
				}
			},
			mode: {
				type: String,
				default: 'default'
			},
			map: {
				type: Object,
				default () {
					return {
						text: 'text',
						value: 'value'
					}
				}
			}
		},
		computed: {
			isSelect() {
				return this.filterType === DropdownType.Select
			},
			isSearch() {
				return this.filterType === DropdownType.Search
			},
			canReset() {
				if (this.isSearch) {
					return this.filterValue.length > 0
				}
				if (this.isSelect) {
					return this.checkedValues.length > 0
				}
				return false
			}
		},
		watch: {
			filters(newVal) {
				this._copyFilters()
			},
			indeterminate(newVal) {
				this.isIndeterminate = newVal
			}
		},
		data() {
			return {
				resource,
				enabled: true,
				isOpened: false,
				dataList: [],
				filterValue: '',
				checkedValues: []
			};
		},
		created() {
			this._copyFilters()
		},
		methods: {
			_copyFilters() {
				let dl = JSON.parse(JSON.stringify(this.filterData))
				for (let i = 0; i < dl.length; i++) {
					if (dl[i].checked === undefined) {
						dl[i].checked = false
					}
				}
				this.dataList = dl
			},
			openPopup() {
				this.isOpened = true
			},
			closePopup() {
				this.isOpened = false
			},
			handleClose(e) {
				this.closePopup()
			},
			onDropdown(e) {
				this.openPopup()
			},
			onItemClick(e, index) {
				let items = this.dataList
				let listItem = items[index]
				if (listItem.checked === undefined) {
					items[index].checked = true
				} else {
					items[index].checked = !listItem.checked
				}

				let checkvalues = []
				for (let i = 0; i < items.length; i++) {
					const item = items[i]
					if (item.checked) {
						checkvalues.push(item.value)
					}
				}
				this.checkedValues = checkvalues
			},
			handleSelectSubmit() {
				this.closePopup()
				this.$emit('change', {
					filter: this.checkedValues
				})
			},
			handleSelectReset() {
				if (!this.canReset) {
					return;
				}
				var items = this.dataList
				for (let i = 0; i < items.length; i++) {
					let item = items[i]
					this.$set(item, 'checked', false)
				}
				this.checkedValues = []
				this.handleSelectSubmit()
			},
			handleSearchSubmit() {
				this.closePopup()
				this.$emit('change', {
					filter: this.filterValue
				})
			},
			handleSearchReset() {
				if (!this.canReset) {
					return;
				}
				this.filterValue = ''
				this.handleSearchSubmit()
			}
		}
	}
</script>

<style lang="scss">
	.flex-r {
		display: flex;
		flex-direction: row;
	}

	.flex-f {
		flex: 1;
	}

	.a-i-c {
		align-items: center;
	}

	.j-c-c {
		justify-content: center;
	}

	.icon-select {
		width: 14px;
		height: 16px;
		border: solid 6px transparent;
		border-top: solid 6px #ddd;
		border-bottom: none;
		background-color: #ddd;
		background-clip: content-box;
		box-sizing: border-box;
	}

	.icon-select.active {
		background-color: #1890ff;
		border-top-color: #1890ff;
	}

	.icon-search {
		width: 12px;
		height: 16px;
		position: relative;
	}

	.icon-search-0 {
		border: 2px solid #ddd;
		border-radius: 8px;
		width: 7px;
		height: 7px;
	}

	.icon-search-1 {
		position: absolute;
		top: 8px;
		right: 0;
		width: 1px;
		height: 7px;
		background-color: #ddd;
		transform: rotate(-45deg);
	}

	.icon-search.active .icon-search-0 {
		border-color: #1890ff;
	}

	.icon-search.active .icon-search-1 {
		background-color: #1890ff;
	}

	.uni-filter-dropdown {
		position: relative;
		font-weight: normal;
	}

	.dropdown-popup {
		position: absolute;
		top: 100%;
		background-color: #fff;
		box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
		min-width: 150px;
		z-index: 1000;
	}

	.dropdown-popup-left {
		left: 0;
	}

	.dropdown-popup-right {
		right: 0;
	}

	.uni-dropdown-cover {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: transparent;
		z-index: 100;
	}

	.list {
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.list-item {
		padding: 5px 10px;
		text-align: left;
	}

	.list-item:hover {
		background-color: #f0f0f0;
	}

	.check {
		margin-right: 5px;
	}

	.search-area {
		padding: 10px;
	}

	.search-input {
		font-size: 12px;
		border: 1px solid #f0f0f0;
		padding: 2px 5px;
		min-width: 150px;
		text-align: left;
	}

	.opera-area {
		cursor: default;
		border-top: 1px solid #ddd;
		padding: 5px;
	}

	.opera-area .btn {
		font-size: 12px;
		border-radius: 3px;
		margin: 5px;
		padding: 4px 4px;
	}

	.btn-default {
		border: 1px solid #ddd;
	}
	.btn-default.disable {
		border-color: transparent;
	}

	.btn-submit {
		background-color: #1890ff;
		color: #ffffff;
	}
</style>
