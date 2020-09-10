<template>
  <view>
      <uni-field
        v-model="name"
        label="姓名"
        placeholder="请填写姓名"
        :error-message="errorMessage"
      ></uni-field>
      <uni-field
        v-model="mobile"
        label="手机号"
         labelWidth="120"
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
      <button type="error" @click="changeError">toggle errorMessage</button>
  </view>
</template>

<script>
export default {
   data() {
      return {
         name: '',
         mobile: '139 9999 9999',
         weixin: 'sskd',
         message: '',
         errorMessage: ''
      }
   },

   methods: {
      changeError () {
         this.errorMessage = this.errorMessage ? '' : '请填写对应内容'
      }
   }
    
}
</script>

<style>
page {
    background: #fff;
}
</style>