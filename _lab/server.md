---
layout: post
title: Server
category: Server
comments: false
published: true
date: 2020-08-24
---

### 环境管理

1. 实验室服务器仅提供nvidia显卡驱动更新服务，具体的实验环境请自行构建docker镜像。若不清楚如何使用docker,可以百度学习一下，上手很快，docker是个很好的工具。

2. 另外请务必注意，启动docker容器时一定要以普通用户的身份启动，否则相关容器会被管理员清理。如果需要管理员权限，也可以通过修改镜像的方式实现。具体如何以普通用户登录并获得管理员权限请参见 https://www.yolomax.com/lab/skills/docker/ 。