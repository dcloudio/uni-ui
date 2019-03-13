<template>
    <view class="page">
        <view class="example">
            <view class="example-title">默认样式</view>
            <uni-grid :options="data1" @click="onClick"></uni-grid>
            <view class="example-title">无外边框</view>
            <uni-grid :options="data3" show-out-border="false"></uni-grid>
            <view class="example-title">无所有框</view>
            <uni-grid :options="data3" show-border="false"></uni-grid>
            <view class="example-title">一行四个</view>
            <uni-grid :options="data2" show-out-border="false" column-num="4"></uni-grid>
            <view class="example-title">矩形案例</view>
            <uni-grid :options="data3" type="oblong"></uni-grid>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                data1: [{
                        image: '/static/c1.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c2.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c3.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c4.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c5.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c6.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c7.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c8.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c9.png',
                        text: 'Grid'
                    }
                ],
                data2: [{
                        image: '/static/c1.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c2.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c3.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c4.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c5.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c6.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c7.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c8.png',
                        text: 'Grid'
                    }
                ],
                data3: [{
                        image: '/static/c1.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c2.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c3.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c4.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c5.png',
                        text: 'Grid'
                    },
                    {
                        image: '/static/c6.png',
                        text: 'Grid'
                    }
                ]
            }
        },
        methods: {
            onClick(e) {
                console.log('点击grid:' + JSON.stringify(e));
            }
        }
    }
</script>
