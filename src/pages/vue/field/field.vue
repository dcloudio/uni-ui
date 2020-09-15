<template>
  <view>
      <uni-group 
         title="field 组件主要用于实现表单的输入与校验"
         :top="20"
      />

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
        <button v-if="true" type="primary" slot="right" size="mini">发送验证码</button>
     </uni-field>
     <uni-field
        v-model="weixin"
        label="微信号"
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
      <button type="error" @click="changeError" style="margin-top: 50px">toggle errorMessage</button>
  </view>
</template>

<script>
export default {
   data() {
      return {
         name: '',
         mobile: '139 9999 9999',
         weixin: 'test123',
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