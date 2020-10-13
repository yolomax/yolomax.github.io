---
layout: post
title: Jekyll
category: Skills
comments: false
published: true
date: 2020-10-13
---

### 启动

```shell
jekyll server
```

### 启动并允许局域网访问

```shell
jekyll server --host 0.0.0.0
```

### docker 启动命令

```shell
docker run -itd  --name='my_jekyll' -p 30000:4000  --shm-size 8G -v /home/liuyh:/home/liuyh jekyll/jekyll:latest /bin/bash
```

```shell
docker exec -it my_jekyll /bin/bash
```
