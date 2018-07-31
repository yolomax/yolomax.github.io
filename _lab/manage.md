---
layout: post
title: manage
category: server
comments: false
published: true
date: 2018-03-29
---

多数内容由云峰师兄贡献，如有错误请联系我更改。

# 目录
1. [GPU服务器资源列表](#gpu)
2. [Windows服务器](#windows)
3. [用户分配列表](#user)
4. [服务器使用指南](#server)
5. [新集群使用指南](#cluster)
6. [实验室硬件管理](#hardware)

## GPU服务器资源列表 {#gpu}

| 名称 | IP | 内存 |CPU 核数目|显卡型号|显存大小|
|:----:|:----:|:----:|:-------:|:-------:|:-------:|
|Ti-Thr|192.168.6.31|512G|40|1080 Ti|4x11G|
|Ti-Fou|192.168.6.32|512G|40|1080 Ti|4x11G|
|Ti-Fiv|192.168.6.33|512G|40|1080 Ti|4x11G|
|Ti-One|192.168.6.34|512G|40|1080 Ti|4x11G|
|Ti-Two|192.168.6.35|512G|40|1080 Ti|4x11G|
|244|192.168.6.36|256G|24|K40|2x12G|
|232|192.168.6.232|512G|40|K80|4x12G|

## Windows服务器 {#windows}

| IP | 系统 | 内存 |CPU 核数目|
|:----:|:----:|:----:|:-------:|
|192.168.2.221|Windows server 2008 R2 Standard|32G|24|
|192.168.2.223|Windows server 2008 R2 Standard|32G|24|
|192.168.2.224|Windows server 2008 R2 Standard|32G|24|

## 用户分配列表 {#user}

| 名称 | 用户 |管理员|
|:----:|:----:|:----:|
|Ti-Thr|蒲俊福 朱阳春 刘一丁 谢乔康周浩 ( 贺一纯 尹宇飞 )|蒲俊福|
|Ti-Fou|周争光 王敏 朱小天 郭老师 ( 祝金华 )|周争光 刘一衡|
|Ti-Fiv|张一帆 席茂 魏承承 胡鹤臻|周浩 刘一衡 胡鹤臻|
|Ti-One|黄江雷 王家喻 刘战东 赵恒锐 ( 刘竞泽 )|蒲俊福 刘一衡 王宁 黄江雷|
|Ti-Two|林丰 邓家俊 方远强 刘一衡 赵芳沅 姚鑫 李星泽|刘一衡 邓家俊 蒲俊福 王宁|
|232|张之昊 王宁 王前前 蒋磊 欧阳剑波 陈铮|蒲俊福 刘一衡 王宁|
|244|周晓强 徐宇飞 孙婧雯|蒲俊福 刘一衡|

## 实验室服务器使用指南 {#server}
一些基础命令 [[link](https://www.yolomax.com/lab/server/cmdtip/)]

### 内网访问
在Windows的Xshell或者CygWin或者Linux环境的命令行中，执行如下的命令就可以连接到服务器：
```
ssh username@192.168.6.232   # 访问232服务器。
```

### Samba 访问服务器
Samba是一种方便的在Linux和Windows下传送文件的协议和软件，在WIndows环境下，在文件管理器中，输
入<code>\\192.168.104.12</code>就可以访问服务器。 初始密码同ssh登录时的密码，可以在服务器的命令行下用<code>smbpasswd</code>来修改密码。

### VNC 访问服务器图形界面
两台新加的服务器都安装了VNC服务，可以用VNC Viewer等VNC 客户端来连接到服务器的图形化界面，用来操作MATLAB的图形
化界面，或者显示图像等。具体的使用方式如下：
1. SSH连接到服务器，在命令行执行<code>vncserver -geometry 1920x1080</code>来创建会话，输出的最下面的 <code>:n</code>(n为一个整数)就是你创建
的会话ID，初次执行<code>vncserver</code>需要创建一个VNC登录密码。
2. 在VNC Viewer里面，填入服务器地址+会话ID，如<code>192.168.104.12:23</code>，输入上一步创建的密码就可以登陆图像界面
3. 如果会话卡死或不响应了， 可以用<code>vncserver -kill :n</code>来删除之前创建的编号为n的会话，然后重新执行<code>vncserver -geometry 1920x1080</code>即可。
4. 如果忘记自己的VNC密码了，可以执行<code>vncpasswd</code>来重新设置密码

### 外网访问
两种常用访问方法
* 有大实验室集群账号的，可以先通过集群外网端口登录到集群，再通过内网访问各个独立服务器。集群外网地址：
 ```
ssh -p 39099 username@202.38.69.241
 ```

* 我们实验室只有244服务器有外网的SSH端口，所以对于别的服务器用户，需要到244跳转，再连到别的服务器。公网IP地址是 202.38.69.241 , 端口号为 36036 ，具有244账号（没有的可以联系我来开）的同学可以如下命令连到244服务器：
```
ssh -p 36036 username@202.38.69.241
```

连到集群或者244后，就可以使用SSH通过内网地址来连接到别的服务器：
```
ssh username@192.168.6.33
```

### 硬盘使用说明
新加的机器都是5块4T的硬盘，除了一块安装系统外，别的4块分别挂载为 /data1 、 /data2 、 \data3 、 /data4 ，请大家尽量将大的数据data盘上，避免影响系统的正常使用。

### OpenCV说明
新加的两台机器OpenCV安装的是3.3.0版本，安装在 <code>/usr/local/</code>目录下，可在 <code>/usr/local/include/</code>下查看头文件，
在 <code>/usr/local/lib/</code>下查看 <code>*.so</code> 文件，具体OpenCV的版本可以用如下命令查看：
```
$ pkg-config --modversion opencv
3.3.0
```

### CUDA和CuDNN说明
CUDA安装8.0版本，目录为<code>/usr/local/cuda</code>, CuDNN安装的是6.0.21版本，放在 <code>/usr/local/cuda/lib64</code>目录下，目前各个库已经
都支持该版本。
如果需要特定版本的CuDNN，可以这样操作：
1. 复制<code>/usr/local/cuda/</code>到你自己的目录（如<code>/data1/username/cuda</code>），删除其中的 <code>lib64</code>目录下的所有以 <code>libdudnn</code>开头的文
件和<code>include</code>目录中的<code>cudnn.h</code>文件
2. 从[这里](https://developer.nvidia.com/cudnn)下载特定版本的CuDNN
3. 解压下载的压缩包，将解压得到的<code>cudnn.h</code>文件放置到你复制后的cuda的<code>include</code>目录下，将所有其余的文件放到<code>lib64</code>目录下
4. 编辑<code>~/.bashrc</code>文件，修改<code>LD_LIBRARY_PATH</code>环境变量，将其中的<code>/usr/local/cuda/lib64</code>替换成你自己的目录
(如<code>/data1/username/cuda/lib64</code>)
5. 在命令行执行<code>source ~/.bashrc</code>来使修改生效
如果在编译Caffe的时候要用自己路径下的CUDA和CuDNN，将<code>Makefile.config</code>中的28行左右的<code>CUDA_DIR</code>改成你自己的cuda目录（如<code>/data1/username/cuda</code>）

### 深度学习库使用说明
四台服务器上均已经安装Caffe, TensorFlow, Torch, Pytorch， Keras这几个框架，为了节省空间，建议使用系统默认安装的库，如果有特殊版本需求，可以再自己编译或用pip安装。

#### Caffe 使用说明
默认的Caffe目录是<code>/data1/public/caffe</code>， 已经编译了命令行工具和Python接口，使用时可以这样使用：

命令行工具：
```
#bash 脚本
#设置caffe可执行命令的路径
CAFFE_BIN=/data1/public/caffe/build/tools/caffe
#运行命令行的Caffe训练命令
CAFFE_BIN train --solver=/path/to/your/sover.prototxt
```
运行Python接口
```
import sys
sys.insert(0, '/data1/public/caffe/python')
import caffe #如果没报错，后面就可以正常使用Caffe的Python接口了
```
自己编译Caffe

如果要自己编译Caffe，推荐的方法是将<code>/data1/public/caffe/Makefile.config</code>复制到你的Caffe目录下，然后进行编译即可：
```
$ cp /data1/public/caffe/Makefile.config /path/to/your/caffe
$ make -j40
$ make pycaffe
```

#### Torch使用说明
Torch安装在<code>/data1/public/torch</code>目录下，登录后在命令行输入<code>th</code>即可进入交互界面，如果进入不了的话，将下面这句话加入你的<code>~/.bashrc</code>文件，再执行<code>source ~/.bashrc</code>就可以正常使用torch了：
```
#注意点后面有个空格
. /data1/public/torch/install/bin/torch-activate
```

#### TensorFlow, Pytorch, Keras使用说明
这三个库都是基于Python的，两台机器都装了Python 2 和Python 3 的最新版本。
使用Keras或者TensorFlow的时候，可以在命令前面加<code>CUDA_VISIBLE_DEVICES=x ,x=0,1,2,3</code>来设置只用哪一块卡，以避免占用所有
的卡：
```
# 只用第0块GPU卡
$ CUDA_VISIBLE_DEVICES=0 python train_net.py
```
如果要安装特定版本的python包，可以使用<code>--user</code>选项来安装到自己的<code>~/.local</code>目录下，不需要管理员权限。可以用<code>package_name==x.y.z</code>来指定下载特定的版本：
```
# 下载 2.0.1版本的Keras包到自己的目录
$ pip install --user keras==2.0.1
```

## 新集群使用指南 {#cluster}
详细信息戳 [http://mccipc.ustc.edu.cn](http://mccipc.ustc.edu.cn)。里面有更细致的要求以及常用的一些命令，比如查看任务状态，查看资源使用情况等等。

PBS任务脚本样例
```
# /ghome/liuyh/task/task_a.pbs             # 脚本文件的位置
#PBS -N a_r_1                              # 此任务的名称，自己拟定，主要是方便在任务列表中查看
#PBS -o /ghome/liuyh/ignore/task_a.out
#PBS -e /ghome/liuyh/ignore/task_a.err     # .out 与 .err用于保存程序运行过程中输出的信息，不是实时保存的，经常是任务结束之后才保存。建议自己用logging或者别的来记录日志文件
#PBS -l nodes=1:gpus=2:D                   # 指明想申请多少张卡用于计算，现在的集群支持，单卡(1:S)，双卡(2:D)，四卡(4:Q)，八卡(8:E)。
#PBS -r y

cd $PBS_0_WORKDIR
echo Time is 'date'
echo Directory is $PWD
echo This job runs on following nodes:
cat $PBS_NODEFILE


log_name=$(date +%F-%H-%M-%S)

startdocker -D /gdata/liuyh -P /ghome/liuyh -s vision/models/r_1/train_test.py bit:5000/liuyh_deepo_lmdb_visdom   #-D挂载数据目录，-P挂载脚本目录, -s指明脚本。-P与-s组成完整脚本路径，即/ghome/liuyh/vision/models/r_1/train_test.py。最后的那个是指明使用哪个镜像，这个根据需要选择。
```

注意：
更换申请的卡的数量时只需更改最后的hpus,不需要改变nodes。比如从双卡变为四卡：
```
#PBS -l nodes=1:gpus=2:D    =>   #PBS -l nodes=1:gpus=4:Q
```

## 实验室硬件管理 {#hardware}

| 名称 | 参数 |数量 | 借出 |
|:----:|:----:|:----:|:----:|
|内存条|8G DDR4 2133HZ|16|-|
