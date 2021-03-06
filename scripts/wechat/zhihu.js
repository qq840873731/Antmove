const path = require('path')
const WechatPlugin = require('@antmove/wx-alipay')
const transformFramework = require('../../src/index.js')

const outputPath = path.join(__dirname, '../../dist/zhihu')
const inputDirPath = path.join(__dirname, '../../examples/wx-zhihu')

const App = transformFramework()

App
  .use(WechatPlugin, {
    entry: inputDirPath,
    dist: outputPath,
    type: 'wx-alipay',
    component2: true,
    scope: true,
    type: 'wx-alipay',
    component: false,
  })
  .start()
