const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader
} = require('customize-cra');

const path = require('path');

module.exports = override(
  fixBabelImports('import', { //配置按需加载
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@brand-primary': '#1cae82'
    }
  })
)