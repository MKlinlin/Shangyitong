import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入node提供内置模块path；可以获取绝对路径
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      // @符号代表src目录
      '@':path.resolve(__dirname,'src')
    }
  },
  //配置代理跨域
  server:{
    proxy:{
      '/api':{
        target:'http://syt.atguigu.cn',
        changeOrigin:true,
      }
    }
  }
})
