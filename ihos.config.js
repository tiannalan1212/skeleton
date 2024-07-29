module.exports = {
  // 各种环境的baseURL配置
  baseURL: {
    dev: '', 
    integration: '',
    pre: '',
    online: ''
  },
  // 自定义环境publicPath，默认配置oss路径
  publicPath: {
    integration: '',
    pre: '',
    online: ''
  },
  // 是否使用antd-mobile
  useAntdMobile: false,
  // 是否启用rem
  useRem:false,
  // 是否使用SaaS接口
  SaaSMode:false,
  
  favicon: '//cdn.myweimai.com/images/f2b5baf03e211895a9870d2769efbef6_16x16.ico'
}