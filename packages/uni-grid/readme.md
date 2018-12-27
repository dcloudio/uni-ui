### Grid 宫格

宫格组件，组件名：``uni-grid``，代码块： uGrid。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import {uniGrid} from "uni-ui"
export default {
    components: {uniGrid}
}
```


一般用法

```html
<uni-grid :data="[
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/shu.png',text:'圣诞树'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/lindang.png',text:'铃铛'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/laoren.png',text:'圣诞老人'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/liwu.png',text:'礼物'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/maozi.png',text:'帽子'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/shoutao.png',text:'手套'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/xueqiao.png',text:'雪橇'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/xunlu.png',text:'驯鹿'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/xuehua.png',text:'雪花'}]">
</uni-grid>
```

一行四个

```html
<uni-grid :data="[
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/shu.png',text:'圣诞树'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/lindang.png',text:'铃铛'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/laoren.png',text:'圣诞老人'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/liwu.png',text:'礼物'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/maozi.png',text:'帽子'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/shoutao.png',text:'手套'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/xueqiao.png',text:'雪橇'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/xunlu.png',text:'驯鹿'}]" 
    column-num="4">
</uni-grid>
```

无边框

```html
<uni-grid :data="[
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/shu.png',text:'圣诞树'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/lindang.png',text:'铃铛'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/laoren.png',text:'圣诞老人'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/liwu.png',text:'礼物'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/maozi.png',text:'帽子'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/shoutao.png',text:'手套'}]" 
    show-border="false">
</uni-grid>
```

矩形用法

```html
<uni-grid :data="[
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/shu.png',text:'圣诞树'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/lindang.png',text:'铃铛'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/laoren.png',text:'圣诞老人'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/liwu.png',text:'礼物'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/maozi.png',text:'帽子'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/shoutao.png',text:'手套'}]" 
    type="rect">
</uni-grid>
```

实际效果参考：[https://github.com/dcloudio/uni-ui](https://github.com/dcloudio/uni-ui)


**uniGrid 属性说明：**

|属性名|类型|默认值	|说明|
|---|----|---|---|
|data|Array&lt;Object&gt;|-|宫格布局数据，格式为：[{image:'xxx',text:'xxx'},{image:'xxx',text:'xxx'}]|
|type|String|oblong|宫格的类型，可取值：square（正方形）/oblong（长方形）|
|column-num|Number|3|每行有多少个|
|show-out-border|Boolean|true|是否显示外边框|
|show-border|Boolean|true|是否显示边框（如果为false，则show-out-border设置无效）|

**uniGrid 事件说明：**

|事件称名|说明|返回参数|
|---|----|---|
|click|点击 uniGrid 触发事件，返回参数为宫格下标|{index:Number}|