# mpvue-vant

> mpvue+vant+scss 开发微信小程序

## Build Setup

```bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 引入vant组件库
git clone https://github.com/youzan/vant-weapp.git
组件放到新建文件夹下static/vant

# 页面使用vant组件
"usingComponents": {
    "van-row": "/static/vant/row/index",
    "van-col": "/static/vant/col/index"
},

# 安装scss预处理器
npm install node-sass sass-loader --save-dev


# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
