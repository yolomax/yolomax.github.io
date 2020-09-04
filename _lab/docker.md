---
layout: post
title: Docker
category: Skills
comments: false
published: true
date: 2020-07-28
---

- [以非root用户启动容器](#--root------)
    + [为什么要用非root用户启动容器](#------root------)
    + [怎么以非root用户启动容器。](#----root-------)
    + [如何以非root身份启动容器，但是能在容器中获得root权限。](#----root----------------root---)
- [启动容器](#----)
- [进入容器](#----)
- [批量删除已停止的容器](#----------)
- [监控容器资源消耗](#--------)

当你完成了下面教程的所有设置后能达到什么效果？

**用容器就像直接用宿主机一样，感受不到区别**！！！

可远程直接登录容器内部，在容器内也是宿主机的用户身份，却也可以在容器中用sudo管理员权限，能直接装各种包。

---

### 以非root用户启动容器

* ##### 为什么要用非root用户启动容器

   默认情况下，容器中的进程以 root 用户权限运行，并且这个 root 用户和宿主机中的 root 是同一个用户。所以大家直接启动容器，并在容器内部跑程序时，你在宿主机上用top等命令查看进程时，以及用nvidia-smi查看显卡使用时，显示的都是root用户在运行。

   这样会带来几个问题。1. 你在容器中写的文件，保存的文件的拥有者并不是你，而是root用户，当你的容器被销毁后，你在宿主机上是没有权限对这些文件进行操作的。2. 对于其他用户来说，他人无法通过nvidia-smi查看显卡是谁在使用，因为通过进程ID查到的是root用户在跑程序。这不方便同学之间进行显卡利用的沟通，也不方便管理员监管。当部分进程有问题时，管理员不知道找谁。

* ##### 怎么以非root用户启动容器。 

   ``` shell
   docker run --user $(id -u ${USER}):$(id -g ${USER})  <其他参数>
   ```

   通过 `--user $(id -u ${USER}):$(id -g ${USER})` 的参数可以指定以当前宿主机用户的身份启动容器。`–-user`是用来指定docker容器中用户的id的，`$(id -u ${USER}):$(id -g ${USER})` 是自动解析id命令返回的uid和组id，这样就不用自己去查询id了。

   所以相比于之间大家使用docker，唯一的改变就是在启动容器的时候加上`--user $(id -u ${USER}):$(id -g ${USER})`这一段话就可以了。

* ##### 如何以非root身份启动容器，但是能在容器中获得root权限。

   要实现这个功能，需要在你当前镜像的dockerfile里面加上两段命令。在介绍完这两个命令之后我会给出一个完整的dockerfile帮助大家理解。

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

      这样我就可以在容器中开启ssh服务，可以远程登录此容器，也可让本机的pycharm通过ssh获得容器中的python解释器。

      在容器中我可以执行 <code>sudo /etc/init.d/ssh start</code>

      输完命令后系统会让你输入密码，因为我们已经将宿主机上的用户和密码都映射进来了，所以这里输入的密码就是你宿主机上的密码

### 启动容器

下面讲一个完整的启动容器的命令的例子

``` shell
docker run --gpus all -itd --user $(id -u ${USER}):$(id -g ${USER}) --name='my_container' -p 30000:6006 -p 30001:22  --shm-size 8G -v /etc/passwd:/etc/passwd:ro -v /etc/group:/etc/group:ro -v /etc/shadow:/etc/shadow:ro -v /data4:/data -v /home/user_name:/home/user_name -w /home/user_name yolomax/pytorch:1.6.0 /bin/bash
```

我分别讲一下这里面参数的意思

* <code>--gpus all</code>指挂载所有GPU卡，这个一般不用动
* <code>-itd</code>以交互模式运行容器，并在后台运行，这个命令的详细内容可以百度docker的 -i, -t, -d这三个指令的分别的意思。加上-d后，启动容器后并不会立刻进到容器中，而是让容器后台运行，用的时候再连进去，给人的感觉比较像一个真正的主机，你可以在宿主机上开不同的命令窗口连到这个容器，分别跑实验。
* <code>--user $(id -u ${USER}):$(id -g ${USER}) </code>就是上面讲的以自己在宿主机上的用户身份启动容器。
* <code>--name='my_container'</code>非必选，给容器起别名，自己不设置的话docker也会自动分配一个，这个看个人喜好决定要不要设了。
* <code>-p 31094:6006</code>端口映射，这个不一定要加，看个人需求，我加了两个，把容器中的6006端口映射到了宿主机的30000端口，用于tensorboard深度学习网页可视化，22端口映射到30001，这样我通过宿主机的IP和此端口号，能ssh直接登录到容器内部，
* <code>--shm-size 8G</code>设定共享内存，当你的算法里面用到了多线程的时候就需要共享内存了，最直观的，如果你用Pytorch框架，num_worker设置的值大于0，就用了多线程读取数据，此时你不设置共享内存的话，算法就会卡着不动。共享内存不一定就设置为8G，看自己需求。
* <code>-v /etc/passwd:/etc/passwd:ro -v /etc/group:/etc/group:ro -v /etc/shadow:/etc/shadow:ro</code>非必选，是前面讲的映射宿主机的账户和密码到容器中
* <code>-v /data4:/data -v /home/user_name:/home/user_name</code>非必选，映射宿主机的文件夹到容器中，比如这里就是将宿主机的/data4映射到容器中的/data。挂载多个文件夹可以用多个-v，比如这里又加了一个，将/home下自己的文件夹映射了一下。
* <code>-w /home/user_name</code>非必选，指定工作目录，这样进入容器后，当前所在文件夹就是此目录下，这个按需设定。
* <code>yolomax/pytorch:1.6.0</code>指定容器基于的镜像
* <code>/bin/bash</code>启动容器后自动执行的命令，可选，可自定义，比如你可以设置为运行自己的算法脚本。需要注意的是，这个命令执行完后容器就死掉了。/bin/bash这个命令比较特别，是启动bash，这个进程是长期存在的，所以不会让容器死掉。所以一般建议直接执行这个，想要跑实验可以连进容器后在容器中执行。

### 进入容器
上一个章节讲的是启动容器，因为用的是<code>-itd</code>而不是<code>-it</code>，所以只会启动容器，并没有进入容器。下面讲怎么进去
``` shell
docker exec -it container_id /bin/bash
```
其中container_id是容器的名字或者id，如果你在启动容器时设置了名字，这里就可以直接用这个名字。<code>/bin/bash</code>的作用和意义与上一章节相同，可自定义。

### 批量删除已停止的容器
``` shell
docker rm `docker ps -a|grep Exited|awk '{print $1}'`
```

### 监控容器资源消耗
``` shell
docker stats # 查看所有的容器的消耗
docker stats <container_id>  #查看某容器的消耗
```


