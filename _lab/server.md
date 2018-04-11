---
layout: post
title: manage
category: server
comments: false
published: true
date: 2018-03-29
---

# 目录
1. [GPU服务器资源列表](#GPU资源)
2. [Windows服务器](#Windows服务器)
3. [用户分配列表](#用户分配列表)
4. [外网访问](#外网访问)
5. [新集群使用](#新集群使用)

## GPU服务器资源列表 {#GPU资源}

| 名称 | IP | 内存 |CPU 核数目|显卡型号|显存大小|
|:----:|:----:|:----:|:-------:|:-------:|:-------:|
|Ti-Thr|192.168.6.31|512G|40|1080 Ti|4x11G|
|Ti-Fou|192.168.6.32|512G|40|1080 Ti|4x11G|
|Ti-Fiv|192.168.6.33|512G|40|1080 Ti|4x11G|
|Ti-One|192.168.6.34|512G|40|1080 Ti|4x11G|
|Ti-Two|192.168.6.35|512G|40|1080 Ti|4x11G|
|244|192.168.6.36|64G|24|K40|2x12G|
|232|192.168.6.232|64G|40|K80|4x12G|

## Windows服务器 {#Windows服务器}

| IP | 系统 | 内存 |CPU 核数目|
|:----:|:----:|:----:|:-------:|
|192.168.2.221|Windows server 2008 R2 Standard|32G|24|
|192.168.2.223|Windows server 2008 R2 Standard|32G|24|
|192.168.2.224|Windows server 2008 R2 Standard|32G|24|

## 用户分配列表 {#用户分配列表}

| 名称 | 用户 |
|:----:|:----:|
|Ti-Thr|蒲俊福 朱阳春 刘一丁 谢乔康 周浩 贺一纯 尹宇飞|
|Ti-Fou|周争光 何奕霖 王敏 朱小天 祝金华|
|Ti-Fiv|王云峰 黄杰 张一帆 席茂 魏承承 胡鹤臻|
|Ti-One|黄江雷 王家喻 黄志华 刘战东 赵恒锐|
|Ti-Two|林丰 邓家俊 方远强 刘一衡 赵芳沅 姚鑫|
|244|郭老师 周晓强 李星泽 徐宇飞 陈鑫 孙婧雯|
|232|吕玥 张之昊 王宁 王前前 蒋磊 欧阳剑波 陈铮|

## 外网访问 {#外网访问}
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


## 新集群使用 {#新集群使用}
详细信息戳 [http://mccipc.ustc.edu.cn](http://mccipc.ustc.edu.cn)


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
