# vue-template

Vue 移动端单页面开发模板

Webpack4 + Babel7 + Typescript + JSX

- 代码检查：ESLint
- 路由管理：Vue Route
- 状态管理：Vuex
- 移动端适配方案：Flexible rem
- HTTP：Axios

## Usage

```
git clone https://github.com/axuebin/vue-template.git
```

```
cd vue-template
npm install
npm run dev
npm run build
```

## 项目结构

```
├── compile // webpack 配置文件
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── src
│   ├── App.tsx
│   ├── api // api 文件夹，管理请求相关
│   │   ├── api.ts // api path
│   │   └── service.ts // api service
│   ├── assets // 静态文件
│   │   ├── img // 静态图片
│   │   └── style // 样式
│   │       └── index.scss // 全局样式
│   ├── components // 组件
│   │   └── CommonTitle
│   │       └── index.vue // vue 文件，不用 jsx 的写法
│   ├── index.html // html 模板
│   ├── index.ts // 入口文件
│   ├── lib
│   │   ├── axios.ts // 封装一下 axios
│   │   └── utils.ts // 工具
│   ├── route.ts // 路由管理
│   ├── routes // 路由页面
│   │   ├── index
│   │   │   ├── index.scss
│   │   │   └── index.tsx // jsx 写法
│   │   └── test
│   │       ├── index.scss
│   │       └── index.tsx
│   ├── store // store 文件夹
│   │   ├── index.ts
│   │   └── modules // 分 module 管理 store
│   │       └── global.ts // 全局 store
│   ├── types // 库定义
│   │   ├── index.d.ts
│   │   └── vue.d.ts
│   └── mock // 本地接口 mock 文件
│       ├── index.ts
├── package-lock.json
├── package.json
├── postcss.config.js // postcss 配置文件
├── tsconfig.json // ts 配置文件
└── README.md
```