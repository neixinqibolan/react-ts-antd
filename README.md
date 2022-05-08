



# 目录结构

```
│  .gitignore                 // git忽略配置
│  config-overrides.js        // webpack自定义配置
│  package.json               // npm包管理所需模块及配置信息
│  paths.json                 // src路径配置
│  tsconfig.json              // typescript配置
│  yarn.lock                  // 自动锁定安装包版本       
├─public
│      favicon.ico            // 图标
│      index.html             // 入口html文件          
└─src
    │  App.tsx                // 路由组件 
    │  declaration.d.ts       // 依赖声明文件
    │  index.tsx              // 入口主文件
    │  react-app-env.d.ts     // 声明文件
    ├─assets                  // 存放公共图片
    ├─components              // 公共组件 
    │      404.tsx            // 错误页面
    │      Footer.tsx         // 底部模板组件
    │      Header.tsx         // 头部模板组件
    ├─router
    │      config.js          // 项目路由配置 
    │      index.js           // 单页面路由注册组件
    │      permissionAuth.js  // 登录权限控制组件
    ├─store                   // 全局store状态管理
    │  │  actionTypes.js      // 拆分actionType的类型定义常量
    │  │  index.js            // 创建store管理仓库  
    │  ├─actions              // 拆分action，将它封装到一个函数里面去管理
    │  │      auth.js         // 权限action单独管理
    │  │      index.js        // 合并多个不同action，统一对外输出
    │  │      user.js         // 用户action单独管理
    │  └─reducers             // 创建reducer，更新state数据操作
    │          index.js       // 合并多个不同reducer，统一对外输出
    │          user.js        // 创建用户reducer，更新state数据操作
    ├─styles
    │      base.less           // 基础样式  
    │      footer.less         // 底部样式
    │      header.less         // 头部样式
    │      home.less           // 首页样式
    │      login.less          // 登录样式
    ├─utils
    │      api.js              // 统一封装API接口调用方法
    │      network.js          // axios封装与拦截器配置
    │      url.js              // 自动部署服务器环境
    │      valid.js            // 统一封装公用模块方法
    └─views
            Home.tsx           // 首页
            Login.tsx          // 登录页面
```


# 技术栈
* create-react-app
* React v16.13
* react-router-dom v5.2
* redux v4.0
* react-redux v7.2
* react-thunk v2.3
* typescript v3.7
* antd v4.5
* axios v0.19
* react-persist v6.0
 
# 功能模块
* 登录（登出）
* 注册
* 记住密码
* 忘记密码（修改密码）
* todoList增删改查
* 点亮红星标记
* 查询条件筛选
* 错误页面




## 开发模式
```
yarn start
```
运行之后，访问地址：http://localhost:9000

## 生产环境打包
```
yarn build
```



