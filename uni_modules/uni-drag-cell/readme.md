# drag-cell

可拖动排序的组件，适用于标签排序、宫格排序等场景。

组件通过 `v-model` 绑定一个数组。
默认插槽负责渲染数组中的每一项，长按后进入拖拽态，拖动过程中会通过 `transform` 预览交换顺序，松手后再正式更新数据。

## 属性

- `modelValue`
  - 类型：`Array`
  - 说明：绑定的数据列表。
- `column`
  - 类型：`Number`
  - 默认值：`0`
  - 说明：列数。`0` 表示横向流式排列；大于 `0` 时表示按宫格布局排列。
- `showClose`
  - 类型：`Boolean`
  - 默认值：`false`
  - 说明：是否开启底部删除条。开启后，拖动到删除条并松手会删除该项。
- `showAppend`
  - 类型：`Boolean`
  - 默认值：`true`
  - 说明：是否显示 `append` 插槽对应的尾部占位。

## 插槽

- 默认插槽 `default`
  - 插槽参数：`{ item, index }`
  - 说明：渲染可拖拽项。
- 追加插槽 `append`
  - 说明：渲染在列表末尾的固定项。
  - 特性：
    - 不参与拖拽排序
    - 不会写入 `v-model`
    - 不会被删除
    - 适用于“新增按钮”“上传入口”等任意场景

## 事件

- `change`
  - 说明：数据顺序变化或删除后触发，返回最新数组。

## 使用说明

### 1. 普通拖拽排序

```vue
<uni-drag-cell v-model="tagList">
  <template #default="{ item, index }">
    <view>
      <text>{{ item }}</text>
    </view>
  </template>
</uni-drag-cell>
```

### 2. 尾部追加一个固定入口

`showAppend` 不是仅限九宫格图片场景的属性，而是通用能力。
只要你传入了 `append` 插槽，就可以用它在尾部放一个固定入口。

```vue
<uni-drag-cell v-model="tagList" :show-append="true">
  <template #default="{ item }">
    <view>
      <text>{{ item }}</text>
    </view>
  </template>
  <template #append>
    <view @click="addTag">
      <text>+</text>
    </view>
  </template>
</uni-drag-cell>
```

### 3. 九宫格图片选择

九宫格图片选择只是 `append` 的一个典型用法：
- 图片列表放在 `v-model` 中
- `append` 放一个 `+` 宫格
- 当数量达到上限时，将 `showAppend` 设为 `false`

## 开发注意事项

- 拖拽预览阶段使用 `transform` 改变视觉顺序。
- 松手后才会正式修改数组顺序。
- 数据量较大时，应注意外部列表更新的性能，避免不必要的整数组拷贝和重复响应式更新。