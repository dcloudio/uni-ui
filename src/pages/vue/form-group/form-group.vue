<template>
	<view class="uni-wrap">
		<scroll-view class="scroll" scroll-y>
			<view class="example-info">
				<text class="example-info-text"> uni-form-group 组件主要用于表单分组 </text>
			</view>
	        <uni-form-group title="field group" margin-top="20">
                <uni-field
                    v-model="name"
                    label="姓名"
                    placeholder="请填写姓名"
                    :error-message="errorMessage"
                ></uni-field>
                <uni-field
                    v-model="mobile"
                    label="手机号"
                    label-position="left"
                    placeholder="请填写手机号"
                    :error-message="errorMessage"
                    type="text"
                    :clearable="true"
                >
                </uni-field>
            </uni-form-group>


           <uni-form-group title="field group">
                <uni-field
                    v-model="name"
                    label="姓名"
                    placeholder="请填写姓名"
                    :error-message="errorMessage"
                ></uni-field>
                <uni-field
                    v-model="mobile"
                    label="手机号"
                    iconColor="#999"
                    label-position="left"
                    placeholder="请填写手机号"
                    :error-message="errorMessage"
                    type="text"
                    :clearable="true"
                >
                    <button v-if="true" type="primary" slot="right" size="mini">发送验证码</button>
                </uni-field>
            </uni-form-group>

            <uni-form-group title="field group">
                <uni-field
                    v-model="name"
                    label="姓名"
                    placeholder="请填写姓名"
                    :error-message="errorMessage"
                ></uni-field>
                <uni-field
                    v-model="mobile"
                    label="手机号"
                    left-icon="camera"
                    iconColor="#999"
                    label-position="left"
                    placeholder="请填写手机号"
                    :error-message="errorMessage"
                    type="text"
                    :clearable="true"
                >
                    <button v-if="true" type="primary" slot="right" size="mini">发送验证码</button>
                </uni-field>
                <uni-field
                    v-model="weixin"
                    label="微信号"
                    left-icon="camera"
                    label-position="left"
                    placeholder="请填写微信号"
                    :required="false"
                    :focus="true"
                    type="text"
                    :clearable="true"
                    :password="false" 
                    :disabled="false"
                    confirmType="good"
                    :error-message="errorMessage" 
                />
                <uni-field
                    v-model="message"
                    type="textarea"
                    label="家庭地址"
                    placeholder="请填写详细住址"
                    :error-message="errorMessage" 
                />
            </uni-form-group>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
                appear: false,
                name: '',
                mobile: '139 9999 9999',
                weixin: 'sskd',
                message: '',
                errorMessage: ''
			}
		},
		onReady() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
    @import '@/common/uni-nvue.scss';

	.uni-wrap {
		flex-direction: column;
		/* #ifdef H5 */
		height: calc(100vh - 44px);
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		flex: 1;
	}

	.scroll {
		flex-direction: column;
		flex: 1;
	}

	.example-body {
		padding: 0;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}
</style>
