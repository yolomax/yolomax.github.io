---
layout: post
title: Git
category: server
comments: false
published: true
date: 2020-07-28
---

## <center>Markdown 常用命令</center>

### 注释一段文字

```markdown
[comment]: 被注释的内容
```


### 代码

* 行内代码用一对反引号
  ```markdown
  `print('hello world')`
  ```
  效果
  `print('hello world')`

* 多行代码用4个空格或者一个制表符，代码上方必须有空行

* 用三个反引号，且能指明高亮用的语言

  ```markdown

      ```python
      import numpy as np
      ```
  ```
  效果
  ```python
  import numpy as np
  ```

### 引用

在引用的文字前加>即可。引用也可以嵌套，如加两个>>三个>>>
n个...

```markdown
>这是引用的内容
>>这是引用的内容
>>>>>>>>>>这是引用的内容
```
效果

>这是引用的内容
>>这是引用的内容
>>>>>>>>>>这是引用的内容


### 流程图

```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&```