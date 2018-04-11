---
layout: post
title: Tip
category: server
comments: false
published: true
date: 2018-03-01
---

## <center>Ubuntu 用户常用命令</center>

#### 修改密码
    passwd 你的用户名

#### 保存密码
    # 可以免输密码
    ssh-keygen #Simply type enter all the way down
    ssh-copy-id -i liuyh@192.168.17.240   # Enter password

#### 查看当前目录已经使用总大小及当前目录下一级文件或文件夹各自使用的总空间大小
    du -h --max-depth=1


## <center>Ubuntu 管理员常用命令</center>


#### 修改root密码
    sudo passwd root

#### 修改主机名
    sudo vi /etc/hostname将其中的名字改为自己的名字
    sudo vi /etc/hosts将其中的名字改为自己的名字

#### 修改用户名
    sudo vi /etc/passwd找到原先的用户名，将其改为自己的用户名
    sudo  vi /etc/shadow找到原先用户名（所有的名字都要改），改为自己的用户名
    将home目录下的用户目录改为自己的用户名：例如原先目录名为xxxx， 现要改为用户 yyyy。用命令 mv xxxx yyyy即可

#### 添加管理员权限
    sudo usermod -aG sudo 用户名
