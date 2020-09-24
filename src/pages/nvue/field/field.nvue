<template>
  <view>
      <uni-group 
         title="field 组件主要用于实现表单的输入与校验"
         :top="20"
      />
      <uni-group title="带输入框 " margin-top="20">
         <uni-field
            :input-border="true"
            v-model="name"
            label="姓名"
            placeholder="请填写姓名"
            :error-message="errorMessage"
         />
         <uni-field
            :input-border="true"
            v-model="mobile"
            label="手机号"
            label-position="left"
            placeholder="请填写手机号"
            :error-message="errorMessage"
            type="text"
            :clearable="true"
         />
	   </uni-group>
      <uni-group title="不带输入框 " margin-top="20">
         <uni-field
            v-model="name"
            label="姓名"
            placeholder="请填写姓名"
            :error-message="errorMessage"
         />
         <uni-field
            v-model="mobile"
            label="手机号"
            label-position="left"
            placeholder="请填写手机号"
            :error-message="errorMessage"
            type="text"
            :clearable="true"
         />
	   </uni-group>
      <uni-group title="label 在上" margin-top="20">
         <uni-field
            v-model="name"
            label="姓名"
            label-position="top"
            placeholder="请填写姓名"
            :error-message="errorMessage"
         />
         <uni-field
            label-position="top"
            v-model="mobile"
            label="手机号"
            placeholder="请填写手机号"
            :error-message="errorMessage"
            type="text"
            :clearable="true"
         />
	   </uni-group>
      <uni-group title="label 在左" margin-top="20">
         <uni-field
            v-model="name"
            label="姓名"
            placeholder="请填写姓名"
            :error-message="errorMessage"
         />
         <uni-field
            v-model="mobile"
            label="手机号"
            placeholder="请填写手机号"
            :error-message="errorMessage"
            type="text"
            :clearable="true"
         />
	   </uni-group>
	   <uni-group title="带右侧按钮 和 textarea" margin-top="20">
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
            v-model="message"
            type="textarea"
            label="家庭地址"
            placeholder="请填写详细住址"
            :error-message="errorMessage" 
         />
	   </uni-group>
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

</style>