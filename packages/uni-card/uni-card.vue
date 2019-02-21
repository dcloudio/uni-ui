<template>
    <view class="uni-card" :class="isFull === true || isFull === 'true' ? 'uni-card--full' : ''" @click="onClick">
        <view class="uni-card__header" v-if="title">
            <view class="uni-card__header-extra-img-view" v-if="thumbnail">
                <image class="uni-card__header-extra-img" :src="thumbnail"></image>
            </view>
            <view class="uni-card__header-title-text">{{title}}</view>
            <view class="uni-card__header-extra-text" v-if="extra">{{extra}}</view>
        </view>
        <view class="uni-card__content uni-card__content--pd">
            <slot />
        </view>
        <view class="uni-card__footer" v-if="note">{{note}}</view>
    </view>
</template>

<script>
    export default {
        name: "uni-card",
        props: {
            title: String, //标题
            extra: String, //扩展信息
            note: String, //Tips
            thumbnail: String, //缩略图
            isFull: { //内容区域是否通栏
                type: [Boolean, String],
                default: false
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
    $card-extra-width: 30%;
    $uni-spacing-marign:24upx;

    @mixin text-omit {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .uni-card {
        margin-left: $uni-spacing-marign;
        margin-right: $uni-spacing-marign;
        background: $uni-bg-color;
        box-shadow: none;
        position: relative;
        display: flex;
        flex-direction: column;

        &:after {
            content: '';
            position: absolute;
            transform-origin: center;
            box-sizing: border-box;
            pointer-events: none;
            top: -50%;
            left: -50%;
            right: -50%;
            bottom: -50%;
            border: 1px solid $uni-border-color;
            border-radius: $uni-border-radius-lg;
            transform: scale(.5);
        }

        &__footer,
        &__header {
            position: relative;
            display: flex;
            flex-direction: row;
            padding: $uni-spacing-col-base;
            align-items: center;
        }

        &__header {
            &:after {
                position: absolute;
                bottom: 0;
                right: 0;
                left: 0;
                height: 1px;
                content: '';
                -webkit-transform: scaleY(.5);
                transform: scaleY(.5);
                background-color: $uni-border-color;
            }

            &-title {
                flex: 1;
                margin-right: $uni-spacing-col-base;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;

                &-text {
                    font-size: $uni-font-size-lg;
                    flex: 1;
                    @include text-omit;
                }
            }

            &-extra {
                &-img-view {
                    display: flex;
                }

                &-img {
                    height: $uni-img-size-sm;
                    width: $uni-img-size-sm;
                    margin-right: $uni-spacing-col-base;
                }

                &-text {
                    flex: 0 0 auto;
                    width: $card-extra-width;
                    margin-left: $uni-spacing-col-base;
                    font-size: $uni-font-size-base;
                    text-align: right;
                    @include text-omit;
                }
            }

        }

        &__content {
            &--pd {
                padding: $uni-spacing-col-base;
            }
        }

        &__footer {
            justify-content: space-between;
            color: $uni-text-color-grey;
            font-size: $uni-font-size-sm;
            padding-top: 0;
        }

        &--full {
            margin: 0;
        }
    }
</style>
