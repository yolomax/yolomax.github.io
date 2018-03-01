---
layout: post
title: Environment
category: utiles
comments: false
published: true
date: 2018-03-01
---

## 整体流程
1. [安装Ubuntu系统](#ubuntu)
2. [安装CUDA及cuDNN](#cuda)
3. [安装Miniconda](#miniconda)
4. 在conda里面创建虚拟环境，并安装选择的深度学习平台.
5. [安装Pycharm](#pycharm)
6. 额外的小工具（非必要选项）
 * cygwin：Windows SSH客户端：[[link](http://blog.csdn.net/chunleixiahe/article/details/55666792)]
 * JuicSSH：安卓 SSH客户端：
 * Ubuntu 中文输入法 [[link](http://blog.csdn.net/u011795345/article/details/53041707)]
 * Sharelatex：在线Latex编写，避免本地配置的麻烦，而且免费，更新快，自动云端保存。 [[link](https://www.sharelatex.com)]


## ubuntu {#ubuntu}
* windows中分出一定的空间给ubuntu，分出的空间是未分配状态。
* ubuntu安装时分两个区：根 /，和swap区。home若挂载在其他地方也可以单独分出来。

## CUDA {#cuda}
1. **根据自己选择的深度学习框架的支持情况**，下载相应的CUDA安装包，用<code>.run</code>格式（选择Base Installer下载）。[[link](https://developer.nvidia.com/cuda-downloads)]
2. 先进入文本模式：<code>CTRL+ALT+F1</code>。再依次执行
       sudo service lightdm stop
       sudo sh cuda_9.1.85_387.26_linux.run   #创建软连接，关闭x服务,不安装Opengl,不安装Samples
       sudo service lightdm restart
3. 添加环境变量
    export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}
    export LD_LIBRARY_PATH=/usr/local/cuda/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
4. 重启
5. 下载cuDNN并解压，下载需要注册，并注意选择与CUDA相应的版本。 [[link](https://developer.nvidia.com/cudnn)]
6. 将解压出的文件拷贝到CUDA相应的目录中（CUDA默认的安装目录是<code>/usr/local/cuda</code>）

## Miniconda {#miniconda}
 * conda建议安装到 <code>/opt</code>
 * conda会默认保存安装包，用<code>conda clean -t</code>自动删除
 * 利用conda安装需要的平台
 * conda中找不到某些包时可以使用pip安装

## Pycharm {#pycharm}
* 远程调试：非必要选项，可使用远程服务器上配好的的环境，配置了这个其实是可以不用配置本地环境的。[[link](https://www.jianshu.com/p/79df9ac88e96)]


 # Bug fixed
  * conda 安装包出现网络连接问题时，可以先下载，然后离线安装