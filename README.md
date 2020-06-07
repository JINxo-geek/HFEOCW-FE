

# 基于PWA和人因工程的效率管理应用


## 项目介绍
- 信息化办公已经成为当今普遍现象，长期待在电脑前办公浮现出了各种弊端，在忙碌的工作中很难意识到自己的办公环境存在什么问题，所以迫切需要一个能帮助改善的方法。本文利用渐进式增强WEB应用（简称PWA）更强大的传播普及性，结合人因工程的知识原理来使机器和环境能够适应人的需求,从而帮助更多的人提高工作和生成效率,保障人的健康、安全和舒适。具体方法为设计并开发一款渐进式增强WEB应用程序，在程序中引导人进行符合人因工程学的工作环境的部署,并搭配番茄种和任务清单等效率辅助功能,管理人的环境部署及任务时间安排,提高办公效率。目的是让使用该应用程序的用户的人机环境系统达到一个理想状态,从而能够高效健康地工作。


## 项目使用
- 下载前后端项目后进行npm install安装，命令在package.json里都有。
- 后端需要建立.env文件，照着.env.example配置一些信息。
- 前端src下有个env.tsx文件，写了后端地址。
- 另外如果不使用https,html上的一个http转https的meta标签可以去了，serviceworker也可以不用。将其剥离出去就行。
- 我部署项目使用的是docker,后端项目基于pm2镜像制作，前端项目基于nginx制作。https是申请的免费证书。自签名证书浏览器不认的。

## 项目结构

- 前端主要使用react,redux,thunk完成主要逻辑，pwa部分靠workbox。
- 目录结构：
``` 
|─api     ------- 后端请求
├─assets  ------- 资源文件
│  ├─images 
│  └─style  ----- 公用样式
├─components ---- 公用组件
│  ├─CityPicker
│  ├─hooks   ---- 自定义钩子
│  ├─Loader
│  ├─Nav
│  ├─Search
│  ├─Tabs
│  ├─Upload
│  └─Virtualize
├─routes      ---- 路由组件
│  ├─Cart 
│  ├─Home
│  │  └─components
│  │      ├─HomeHeader
│  │      ├─HomeProduct
│  │      └─HomeSlider
│  ├─Login
│  ├─ProductDetail
│  ├─Profile
│  │  └─component
│  │      └─ProfileCollection
│  ├─ProfileCollection
│  ├─ProfileEdit
│  ├─ProfileForget
│  ├─ProfileHistory
│  ├─ProfilePackage
│  ├─ProfileReceive
│  ├─ProfileReceiveAdd
│  ├─Register
│  ├─Search
│  └─Settle
│      └─components
│          └─AddressSelect
├─store 
│  ├─actions  ----派发action
│  └─reducers ----reducer逻辑
├─typings   ------ 声明文件
└─utils      -----公用函数
```
- 后端主要使用express完成。
- 目录结构：

```
├─controllers  ---控制器
├─exceptions  --- 错误处理
├─middlewares ----中间件
├─models      ----模型
├─public       ---静态资源
│  ├─detail
│  ├─images
│  │  └─uploads --上传目录
│  ├─products
│  └─sliders
└─utils        --- 通用逻辑
```

