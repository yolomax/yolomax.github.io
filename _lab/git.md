---
layout: post
title: Git
category: Skills
comments: false
published: true
date: 2020-07-28
---

## <center>Git 常用命令</center>

### 同步到远程
``` shell
git push
```


### 同步到本机

* fetch+merger
  ``` shell
  git fetch   # 将远程主机的最新内容拉到本地，但是不合并
  git merge FETCH_HEAD # 将拉取下来的最新内容合并到当前所在的分支中
  ```
      
      

* pull
  ``` shell
  git pull # 远程分支与当前分支合并
  ```

* 丢弃在本地的所有改动与提交，到服务器上获取最新的版本历史，并将本地主分支指向它
  ``` shell
  git fetch origin
  git reset --hard origin/master
  ```

### gitignore
修改之后要先清理本地缓存，将文件改为未追踪状态

``` shell
  git rm -r --cached .
  git add .
  ```

### 工作区与暂存区

* 重置工作区 
  ``` shell
  git checkout . # 将当前目录下的内容回到最近一次 git commit或 git add时的状态，不影响暂存区。
  ```

  ``` shell
  git checkout HEAD . # 会用 HEAD 指向的分支中的全部文件替换暂存区和以及工作区中的文件
  ```

  ``` shell
  git checkout HEAD <file> # 会用 HEAD 指向的分支中的部分文件替换暂存区和以及工作区中的文件
  ```

  ``` shell
  git checkout branch_name # 不指定文件名，而是给出一个（本地）分支时，那么HEAD标识会移动到那个分支（也就是说，我们“切换”到那个分支了），然后暂存区域和工作目录中的内容会和HEAD对应的提交节点一致。参见 https://marklodato.github.io/visual-git-guide/index-zh-cn.html#checkout
  ```

* [清空工作区](https://www.jianshu.com/p/0b05ef199749)
  ``` shell
  git clean -n   # 是一次clean的演习, 告诉你哪些文件会被删除. 记住他不会真正的删除文件, 只是一个提醒
  ```

  ``` shell
  git clean -f   #删除当前目录下所有没有track过的文件. 他不会删除.gitignore文件里面指定的文件夹和文件, 不管这些文件有没有被track过
  ```

  ``` shell
  git clean -f <path>    # 删除指定路径下的没有被track过的文件
  ```

  ``` shell
  git clean -df    #  删除当前目录下没有被track过的文件和文件夹
  ```

  ``` shell
  git clean -xf    #  删除当前目录下所有没有track过的文件. 不管他是否是.gitignore文件里面指定的文件夹和文件
  ```

* 清理缓存区
  ``` shell
  git reset HEAD   #  暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响
  ```

  ``` shell
  git rm --cached <file>" 命令时，会直接从暂存区删除文件，工作区则不做出改变。
  ```

* 清空工作区和缓存区
 
  * chechout
    ``` shell
    git checkout . 
    git clean -df   # 删除当前目录下没有被track过的文件和文件夹
    ```

  * reset
    ``` shell
    git reset --hard
    git clean -df
    ```
      
        


### [保存和还原当前Git分支的工作区](https://segmentfault.com/a/1190000023340938)

当前在dev分支上处理，此分支上工作尚未完成，但是现在主分支有急需解决的事情

``` shell
git stash # 保存当前工作区
git checkout master
# 处理主分支任务
git checkout dev
git stash list # 查看保存记录
git stash pop # 还原工作区
```


### reset与checkout的切换分支时区别

reset是将HEAD和master分支同时指向你的目标分支
checkout只是将HEAD切换到你的目标分支，master分支还是原来的。


### [reset](https://www.cnblogs.com/keystone/p/10700617.html)

```shell
git reset --soft 
# soft参数告诉Git重置HEAD到另外一个commit，但也到此为止。如果你指定--soft参数，Git将停止在那里而什么也不会根本变化。这意味着index,working copy都不会做任何变化
```

```shell
git reset --mixed
# mixed是reset的默认参数，也就是当你不指定任何参数时的参数。它将重置HEAD到另外一个commit,并且重置index以便和HEAD相匹配，但是也到此为止。working copy不会被更改
```

```shell
git reset --hard
# hard参数将会blow out everything.它将重置HEAD返回到另外一个commit(取决于~12的参数），重置index以便反映HEAD的变化，并且重置working copy也使得其完全匹配起来。这是一个比较危险的动作，具有破坏性，数据因此可能会丢失！
```

```shell
git reset --hard commit_id
# 此命令可以用来回退到任意版本
```

```shell
git reset --hard HEAD^
# 回退到上一次commit的状态。
```


### [checkout]()

```shell
git checkout -- <file>
# 把<file>文件在工作区的修改全部撤销，这里有两种肯况。一种是<file>自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态。一种是<file>已经添加到暂存区后。又作了修改，现在，撤销修改就回到添加到暂存区后的状态。总之，就是让这个文件回到最近一次 git commit或 git add时的状态。此动作不会影响暂存区
```

### [git diff](https://www.jianshu.com/p/3098978dff26)

```shell
git diff
# 默认比较工作区与暂存区
```

```shell
git diff --cached  [<path>...] 
# 比较暂存区与最新本地版本库
```


```shell
git diff HEAD [<path>...]
# 比较工作区与最新本地版本库
```

```shell
git diff HEAD -- <file or path>
# 比较作区与最新本地版本库的指定文件或者文件夹
```