<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize"
    status-icon>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script  setup>
import { reactive, ref, inject } from 'vue'
import { useRouter } from 'vue-router';
const $api = inject('$api')
const formSize = ref('default')
const router = useRouter()
const ruleFormRef = ref()
const ruleForm = reactive({
  username: 'lixiaolong',
  password: '123123',
})

const rules = reactive({
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl) => {

  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      $api.query.post('/login', ruleForm).then(res => {
        if (res.state == 'success') {
          ElNotification({
            message: '登录成功',
            type: 'success',
            showClose: false
          })
          router.push({
            name: "main",
            path: "/main"
          })
        } else {
          ElNotification({
            title: 'Error',
            message: '登录失败请重新尝试',
            type: 'error',
          })
        }

      }).catch(() => {
        ElNotification({
          title: 'Error',
          message: '请求失败',
          type: 'error',
        })
      })
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
