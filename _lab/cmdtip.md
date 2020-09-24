---
layout: post
title: Command
category: server
comments: false
published: true
date: 2018-03-01
---

## <center>Ubuntu 用户常用命令</center>

### 修改密码
``` shell
passwd 你的用户名
```
    

### 保存密码
``` shell
# 可以免输密码
ssh-keygen # 创建密钥，只有第一次时才使用此命令，若之前创建过密钥就不用再执行此命令。Simply type enter all the way down
ssh-copy-id -i liuyh@192.168.17.240   # Enter password
```

### 查看当前目录已经使用总大小及当前目录下一级文件或文件夹各自使用的总空间大小
``` shell
du -h --max-depth=1
```

### 查找某PID的信息
``` shell
ps -q pid_num -f
```

## <center>Ubuntu 管理员常用命令</center>


### 修改root密码
``` shell
sudo passwd root
```

### 修改主机名
``` shell
sudo vi /etc/hostname  # 将其中的名字改为自己的名字
sudo vi /etc/hosts     # 将其中的名字改为自己的名字
```

### 修改用户名
``` shell
sudo vi /etc/passwd   #  找到原先的用户名，将其改为自己的用户名
sudo  vi /etc/shadow  # 找到原先用户名（所有的名字都要改），改为自己的用户名
# 将home目录下的用户目录改为自己的用户名：例如原先目录名为xxxx， 现要改为用户 yyyy。用命令 mv xxxx yyyy即可
```

### 冻结用户
让某一用户无法登陆，即冻结ssh登录，但无法阻止秘钥登录。

``` shell
passwd -l username   # 冻结
passwd -u username   # 解冻
```

完全冻结
``` shell
passwd -l username    # 冻结ssh登录
mv /home/username/.ssh/authorized_keys /home/username/.ssh/authorized_keys_bak  # 冻结秘钥登录，即将认证的秘钥文件改个名字，让系统找不到认证的秘钥
smbpasswd -d username  # 冻结samba账户
```

解冻
``` shell
passwd -u username
mv /home/username/.ssh/authorized_keys_bak /home/username/.ssh/authorized_keys
smbpasswd -e username
```
    

#### 管理员权限

* 添加管理员权限
    ``` shell
    sudo usermod -aG sudo 用户名
    ```

* 删除管理员权限
   ``` shell
   sudo gpasswd  -d  用户名  sudo
   ```
    

#### GPU

``` shell
sudo nvidia-persistenced --persistence-mode     # 设定持久模式，就是没人用GPU的时候，驱动不自动卸载，而是一直都处于加载状态.本次有效下次重启还需要重新设定。
sudo fuser -v /dev/nvidia*       # 查找占用GPU资源的PID
```


#### 自动挂载硬盘

插上硬盘后运行下面命令找到对应的所属

    sudo fdisk -l  
根据编号对对硬盘格式化

    sudo mkfs -t ext4 /dev/sdf

创建想要挂载的目标文件夹

    sudo mkdir /data5

加入开机自动挂载，编辑文件 `/etc/fstab`

    sudo vim /etc/fstab

文件中加入

    /dev/sdb  /data5  ext4  defaults     0 0

运行以下命令检查设置是否正确，无误后即可重启电脑

    sudo mount -a

    
