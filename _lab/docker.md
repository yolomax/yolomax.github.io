---
layout: post
title: Docker
category: Skills
comments: false
published: true
date: 2020-07-28
---

## <center>Docker 常用命令</center>

### 监控容器资源消耗
``` shell
docker stats # 查看所有的容器的消耗
docker stats <container_id>  #查看某容器的消耗
```

---

### 以非root用户启动容器

##### 为什么要用非root用户启动容器
   默认情况下，容器中的进程以 root 用户权限运行，并且这个 root 用户和宿主机中的 root 是同一个用户。所以大家直接启动容器，并在容器内部跑程序时，你在宿主机上用top等命令查看进程时，以及用nvidia-smi查看显卡使用时，显示的都是root用户在运行。

   这样会带来几个问题。1. 你在容器中写的文件，保存的文件的拥有者并不是你，而是root用户，当你的容器被销毁后，你在宿主机上是没有权限对这些文件进行操作的。2. 对于其他用户来说，他人无法通过nvidia-smi查看显卡是谁在使用，因为通过进程ID查到的是root用户在跑程序。这不方便同学之间进行显卡利用的沟通，也不方便管理员监管。当部分进程有问题时，管理员不知道找谁。

##### 怎么以非root用户启动容器。 

   ``` shell
   docker run --user $(id -u ${USER}):$(id -g ${USER})  <其他参数>
   ```

   通过 `--user $(id -u ${USER}):$(id -g ${USER})` 的参数可以指定以当前宿主机用户的身份启动容器。`–-user`是用来指定docker容器中用户的id的，`$(id -u ${USER}):$(id -g ${USER})` 是自动解析id命令返回的uid和组id，这样就不用自己去查询id了。

   所以相比于之间大家使用docker，唯一的改变就是在启动容器的时候加上`--user $(id -u ${USER}):$(id -g ${USER})`这一段话就可以了。

##### 如何以非root身份启动容器，但是能在容器中获得root权限。

要实现这个功能，需要在你当前镜像的dockerfile里面加上两端命令。再介绍完这两个命令之后我会给出一个完整的dockerfile帮助大家理解。

1. 第一段命令

   ``` shell
   apt-get update &&  apt-get install sudo
   ```

   可见这一段话的意思是安装sudo命令的，以方便你在获得管理员权限后能通过sudo操作。当然，如果你的当前镜像已经安装了sudo命令，可以不执行这一段话。可以通过在容器中执行sudo操作来试试自否有安装sudo命令。

2. 第二段命令

   ``` shell
   cp /etc/sudoers /etc/sudoers.new && \
   echo "%users ALL=(ALL:ALL) ALL" >> /etc/sudoers.new && \
   visudo -c -f /etc/sudoers.new && \
   cp /etc/sudoers.new /etc/sudoers && \
   rm /etc/sudoers.new
   ```

   这一段话的意思是给users组内的所有成员添加管理员权限

   加上这两段话后就可以构建镜像并启动容器了。

   dockerfile的例子 ： https://github.com/yolomax/docker/blob/pytorch1.6.0/pytorch


3. 用docker run 启动容器时也要加上一段参数 


   ``` shell
   docker run -v /etc/passwd:/etc/passwd:ro -v /etc/group:/etc/group:ro -v /etc/shadow:/etc/shadow:ro  <其他参数>
   ```

   这一段参数的意思是将宿主机上的用户组以及密码以只读的形式全部挂在到容器中

4. 下面我讲一个在容器中以管理员权限开启ssh服务的例子

   这样我就可以在容器中开启ssh服务，并让本机的pycharm通过ssh获得容器中的python解释器。

   在容器中我可以执行 <code>sudo /etc/init.d/ssh start</code>

   输完命令后系统会让你输入密码，因为我们已经将宿主机上的用户和密码都映射进来了，所以这里输入的密码就是你宿主机上的密码

