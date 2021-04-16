// 导入创建函数
import { createApp } from 'vue'

// 导入ui组件
import ElementPlus from 'element-plus'
// 导入ui组件的样式文件
import 'element-plus/packages/theme-chalk/src/base.scss'

// 导入根组件
import App from './App.vue'

// 导入路由
import router from '@/router'

// 创建vue实例
const app = createApp(App)

// 加载路由
app.use(router)

// 使用ui组件
app.use(ElementPlus)

// 将vue实例挂载到dom上
app.mount('#app')
