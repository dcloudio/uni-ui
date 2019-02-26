<template>
    <view class="uni-swipe-action">
        <view class="uni-swipe-action__container" :class="!isMoving ? 'animtion' : ''" @touchstart="touchStart"
            @touchmove="touchMove" @touchend="touchEnd" @touchcancel="touchEnd" :style="{transform:transformX}">
            <view class="uni-swipe-action__content">
                <slot></slot>
            </view>
            <view class="uni-swipe-action__btn-group">
                <div v-for="(item,index) in options" :key="index" class="uni-swipe-action--btn" :style="item.style"
                    @click="bindClick(item,index)">
                    {{item.text}}
                </div>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: 'uni-swipe-action',
        props: {
            isDrag: {
                type: Boolean,
                default: true
            },
            isOpened: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            autoClose: {
                type: Boolean,
                default: false
            },
            text: {
                type: String,
                default: ''
            },
            options: Array
        },
        watch: {
        	isOpened(newValue, oldValue) {
        		this.isShowBtn = newValue ? true : false;
                this.endMove();
        	}
        },
        data() {
            return {
                moveLength: 0,
                isMoving: false,
                direction: '',
                startTime: 0,
                startX: 0,
                startY: 0,
                isShowBtn: false,
                touchMoveLength: 0,
                btnGroupWidth: 0,
                movedLength: 0
            }
        },
        // #ifdef H5
        mounted() {
            let view = uni.createSelectorQuery().select('.uni-swipe-action__btn-group');
            view.fields({
                size: true
            }, data => {
                this.btnGroupWidth = data.width;
            }).exec();
            if(this.isOpened === true){
                this.isShowBtn =true;
                this.endMove();
            }
        },
        // #endif
        // #ifndef H5
        onReady() {
            let view = uni.createSelectorQuery().select('.uni-swipe-action__btn-group');
            view.fields({
                size: true
            }, data => {
                this.btnGroupWidth = data.width;
            }).exec();
            if(this.isOpened === true){
                this.isShowBtn =true;
                this.endMove();
            }
        },
        // #endif
        computed: {
            transformX() {
                return `translateX(${this.moveLength}px)`
            }
        },
        methods: {
            bindClick(item, index) {
                if (this.autoClose === true) {
                    this.isShowBtn = false
                    this.endMove()
                }
                this.$emit('click', {
                    text: item.text,
                    style: item.style,
                    index: index
                })
            },
            touchStart(event) {
                this.startTime = event.timeStamp;
                this.startX = event.touches[0].pageX;
                this.startY = event.touches[0].pageY;
            },
            touchMove(event) {
                if (this.direction === 'Y' || this.disabled === true) {
                    return;
                }
                if (!this.isMoving && Math.abs(event.touches[0].pageY - this.startY) > Math.abs(event.touches[0].pageX -
                        this.startX)) { //纵向滑动
                    this.direction = 'Y';
                    return;
                }
                this.touchMoveLength = event.touches[0].pageX - this.startX;
                var moveLength = this.touchMoveLength + this.movedLength;
                if (!this.isDrag) {
                    this.direction = this.touchMoveLength > 0 ? 'right' : 'left';
                    this.isMoving = true;
                    return;
                }
                if (moveLength > 0) {
                    this.moveLength = 0;
                } else if (moveLength < -this.btnGroupWidth) {
                    this.moveLength = -this.btnGroupWidth;
                } else {
                    this.moveLength = moveLength;
                }
                if (!this.isMoving) {
                    this.direction = this.touchMoveLength > 0 ? 'right' : 'left';
                }
                this.isMoving = true;
            },
            touchEnd(event) {
                this.isMoving = false;
                if (!this.isDrag) {
                    if (this.direction == 'right') {
                        this.isShowBtn = false
                    } else {
                        this.isShowBtn = true
                    }
                    this.endMove()
                    return;
                }
                var moveTimeLength = event.timeStamp - this.startTime;
                if (50 < moveTimeLength && moveTimeLength < 300 && Math.abs(this.touchMoveLength) > 20) { //在这个时间里面，且滑动了一定的距离
                    if (this.direction == 'right') {
                        this.isShowBtn = false
                    } else {
                        this.isShowBtn = true
                    }
                    this.endMove()
                    return;
                }
                if (this.direction === 'right') {
                    this.isShowBtn = Math.abs(this.touchMoveLength) > this.btnGroupWidth / 2 ? false : true;
                    this.endMove()
                } else if (this.direction === 'left') {
                    this.isShowBtn = Math.abs(this.touchMoveLength) > this.btnGroupWidth / 2 ? true : false;
                    this.endMove()
                }
            },
            endMove() {
                this.touchMoveLength = 0;
                if (this.direction === 'Y' || this.disabled === true) {
                    this.direction = '';
                    return;
                }
                if (this.isShowBtn) {
                    this.moveLength = this.movedLength = -this.btnGroupWidth;
                    this.$emit('opened');
                } else {
                    this.moveLength = this.movedLength = 0;
                    this.$emit('closed');
                }
                this.direction = '';
            }
        }
    }
</script>

<style lang="scss">
    .uni-swipe-action {
        width: 100%;
        overflow: hidden;

        &__container {
            background-color: #FFFFFF;
            width: 200%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            &.animtion {
                transition: transform 350ms cubic-bezier(.165, .84, .44, 1);
            }
        }

        &__content {
            width: 50%;
        }

        &__btn-group {
            display: flex;
            flex-direction: row;
        }

        &--btn {
            padding: 0 32upx;
            color: #FFFFFF;
            font-size: 28upx;
            display: inline-flex;
            text-align: center;
            flex-direction: row;
            align-items: center;
        }
    }
</style>
