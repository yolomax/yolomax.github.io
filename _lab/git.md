---
layout: post
title: Git
category: server
comments: false
published: true
date: 2020-07-28
---

## <center>Git 常用命令</center>

### 同步到远程

    git push
    

### 同步到本机

* fetch+merger
      
      git fetch   # 将远程主机的最新内容拉到本地，但是不合并
      git merge FETCH_HEAD # 将拉取下来的最新内容合并到当前所在的分支中

* pull
      
      git pull # 远程分支与当前分支合并

* 丢弃在本地的所有改动与提交，到服务器上获取最新的版本历史，并将本地主分支指向它
        
      git fetch origin
      git reset --hard origin/master


### 工作区与缓存区

* 重置工作区 

  > git checkout .  # 会用暂存区全部文件替换工作区的文件

  > git checkout -- <file> # 会用暂存区指定的文件替换工作区的文件

  > git checkout HEAD . # 会用 HEAD 指向的分支中的全部文件替换暂存区和以及工作区中的文件

  > git checkout HEAD <file> # 会用 HEAD 指向的分支中的部分文件替换暂存区和以及工作区中的文件


* [清空工作区](https://www.jianshu.com/p/0b05ef199749)

    > git clean -n   # 是一次clean的演习, 告诉你哪些文件会被删除. 记住他不会真正的删除文件, 只是一个提醒

    > git clean -f   #删除当前目录下所有没有track过的文件. 他不会删除.gitignore文件里面指定的文件夹和文件, 不管这些文件有没有被track过

    > git clean -f <path>    # 删除指定路径下的没有被track过的文件

    > git clean -df    #  删除当前目录下没有被track过的文件和文件夹

    > git clean -xf    #  删除当前目录下所有没有track过的文件. 不管他是否是.gitignore文件里面指定的文件夹和文件


* 清空缓存区

    > git reset HEAD   #  暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响
      
    > git rm --cached <file>" 命令时，会直接从暂存区删除文件，工作区则不做出改变。


* 清空工作区和缓存区
 
  * chechout

        git checkout .   # 只能清空全部已修改的问题件, 但是对于新建的文件和文件夹无法清空
        git clean -df   # 删除当前目录下没有被track过的文件和文件夹
  
  * reset
      
        git reset --hard
        git clean -df


### [保存和还原当前Git分支的工作区](https://segmentfault.com/a/1190000023340938)

当前在dev分支上处理，此分支上工作尚未完成，但是现在主分支有急需解决的事情

    git stash # 保存当前工作区
    git checkout master
    # 处理主分支任务
    git checkout dev
    git stash list # 查看保存记录
    git stash pop # 还原工作区