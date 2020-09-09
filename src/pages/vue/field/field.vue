<template>
  <view>
      <uni-field
        v-model="name"
        label="姓名"
        placeholder="请填写姓名"
        error-message="请填写姓名"
        label-position="top"
      ></uni-field>
      <uni-field
        v-model="mobile"
        label="手机号"
        left-icon="camera"
        iconColor="#999"
        label-position="left"
        placeholder="请填写手机号"
        error-message="请填写姓名"
        
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
        placeholder="请填写微信号"
        :required="false"
        :focus="true"
        type="text"
        :clearable="true"
        :password="false" 
        :disabled="false"
        maxlength="5"
        confirmType="good"
        error-message="请填写微信号"
     />
     <uni-field
        v-model="message"
        type="textarea"
        label="家庭地址"
        placeholder="请填写详细住址"
     />
  </view>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            mobile: '139 9999 9999',
            weixin: 'sskd',
            message: ''
         }
    }
    
}
</script>

<style>
page {
    background: #fff;
}
</style>