---
layout: post
title: Server
category: server
comments: false
published: true
date: 2020-08-24
---

### 环境管理

1. 实验室服务器仅提供nvidia显卡驱动更新服务，具体的实验环境请自行构建docker镜像。若不清楚如何使用docker,可以百度学习一下，上手很快，docker是个很好的工具。

2. **另外请务必注意，启动docker容器时一定要以普通用户的身份启动，否则相关容器会被管理员清理。如果需要管理员权限，也可以通过修改镜像的方式实现。具体如何以普通用户登录并获得管理员权限请参见** https://www.yolomax.com/lab/skills/docker/ 。


### 外网访问

外网访问需要根据实验室提供的外网IP和外网端口。
``` shell
ssh -p 端口号 username@目标服务器IP
```

### SAMBA 访问服务器

Samba是一种方便的在Linux和Windows下传送文件的协议和软件，在WIndows环境下，在文件管理器中，输入\\192.168.104.12就可以访问服务器。 初始密码同ssh登录时的密码，可以在服务器的命令行下用smbpasswd来修改密码。


### VNC 访问服务器图形界面

**仅限内网使用，外网无法使用**

SSH连接到服务器，在命令行执行vncserver -geometry 1920x1080来创建会话，输出的最下面的 :n(n为一个整数)就是你创建的会话ID，初次执行vncserver需要创建一个VNC登录密码。
在VNC Viewer里面，填入服务器地址+会话ID，如192.168.104.12:23，输入上一步创建的密码就可以登陆图像界面
如果会话卡死或不响应了， 可以用vncserver -kill :n来删除之前创建的编号为n的会话，然后重新执行vncserver -geometry 1920x1080即可。
如果忘记自己的VNC密码了，可以执行vncpasswd来重新设置密码

