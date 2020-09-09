<template>
  <view>
      <uni-field
        label="姓名"
        label-align="right"
        placeholder="请填写name"
      ></uni-field>
      <uni-field
        v-model="mobile"
        label="手机号"
        left-icon="camera"
        iconColor="red"
        label-position="left"
        label-align="right"
        placeholder="请填写手机号"
        placeholderStyle="color: blue"
        :required="false"
        type="text"
        :clearable="true"

     >
        <button v-if="true" slot="right" size="mini" type="success">发送验证码</button>
     </uni-field>
     <uni-field
        v-model="weixin"
        label="微信号"
        left-icon="camera"
        label-position="left"
        label-align="right"
        placeholder="请填写手机号"
        placeholderStyle="color: blue"
        :required="false"
        :focus="true"
        type="text"
        :clearable="true"
        :password="false" 
        labelWidth="100"
        :disabled="false"
        maxlength="5"
        confirmType="good"
     />
     <uni-field
        type="textarea"
        label="家庭地址"
        placeholder="请填写详细住址"
        label-align="right"
     />
  </view>
</template>

<script>
export default {
    data() {
        return {
            mobile: '139 9999 9999',
            weixin: 'sskd'
        }
    }
    
}
</script>

<style>
page {
    background: #fff;
}
</style>