<!--
 * @Author: 肖玲
 * @Date: 2024-02-25 00:29:28
 * @LastEditTime: 2024-02-26 14:55:25
 * @LastEditors: 肖玲
 * @Description:
 * @FilePath: /react-webpack/readme.md
 * 文件备注
-->

1.babel:javaScript 编译器
负责把 ES6、ES7 等高版本的 js 编译成低版本的 js,供浏览器运行
负责把 react 语法（jsx）编译成 js

2、npm 镜像源
查看：npm config get registry 或者 npm config list
临时切换：npm --registry https://registry.npm.taobao.org info underscore （淘宝镜像）
永久切换：npm config set registry https://registry.npm.taobao.org（官方镜像）
查看：npm info underscore
（cnpm 同上）
注意：
淘宝镜像原地址 2024 年 1 月 22 日已过期
现已更换镜像地址为https://registry.npmmirror.com

其他镜像源
npm 官方原始镜像 https://registry.npmjs.org/
淘宝最新 NPM 镜像 https://registry.npmmirror.com
阿里云 NPM 镜像 https://npm.aliyun.com
腾讯云 NPM 镜像 https://mirrors.cloud.tencent.com/npm/
华为云 NPM 镜像 https://mirrors.huaweicloud.com/repository/npm/
网易 NPM 镜像 https://mirrors.163.com/npm/
中科院大学开源镜像站 http://mirrors.ustc.edu.cn/
清华大学开源镜像站 https://mirrors.tuna.tsinghua.edu.cn/
