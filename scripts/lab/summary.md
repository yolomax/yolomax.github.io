# <center>Person Re-Identification</center>

新的论文改为在谷歌文档 [Person re-ID](https://docs.google.com/spreadsheets/d/e/2PACX-1vSZAKBk9tN23aeJKAFT-mcd9aACl9fKpM8_habG0rH7JpUWa6p3RvrTIut-0bRS_YrpcbWNzpBdbMLM/pubhtml?gid=0&single=true) 中总结（预览见下方），后续有时间的话会把旧总结迁移过去。

<iframe width="100%" height=500 src="https://docs.google.com/spreadsheets/d/e/2PACX-1vREJUgqeBNUVEZhfDvjYqVbnLh-6JvPXlHBDGRmFrZo4ISirOUSR2k-Kbm89_xsFxC3BZTcyL6lCwXb/pubhtml?gid=326217522&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

<details>
<summary>入门</summary>

#### 论文：

* An Improved Deep Learning Architecture for Person Re-identification
* Learning Deep Feature Representations with Domain Guided Dropout for Person Re-identification
* Gated Siamese Convolutional Neural Network Architecture for Huam Re-identification
* In Defense of the Triplet Loss for Person Re-identification
* Recurrent Convolutional Network for Video-based Person Re-identification
* Person Re-identification by Multi-Channel Parts-Based CNN with Improved Triplet Loss Function
* Eliminating Background-bias for Robust Person Re-identification
* Person Transfer GAN to Bridge Domain Gap for Person Re-Identification

#### 代码：

* deep ReID [[code](https://github.com/KaiyangZhou/deep-person-reid)]
* Baseline Code (with bottleneck) for Person-reID (pytorch) [[code](https://github.com/teslacool/Person_reID_baseline_pytorch)]

</details>


<details>
<summary>Image-based</summary>

| Name | Author | Conference & Year |Tag| Motivation |Feature|Metric|Detail|CUHK03|Dataset|
|:----:|:------:|:-----------------:|:----:|:-----------|:-----:|:----:|:-----|:----:|:------|
|Viewpoint Invariant Pedestrian Recognition with an Ensemble of Localized Features|Hai Tao<br>University of California, Santa Cruz|ECCV 2008|-|定义了一个特征空间，让机器学习算法去寻找最好的表达|Color Channels<br>Texture Filters(Schmid & Gabor)<br>Feature Regions<br>Feature Binning|L1 Distance|使用了AdaBoost|--|**VIPeR** 12|
|DeepReID: Deep Filter Pairing Neural Network for Person Re-identification| Xiaogang Wang<br>CUHK|CVPR 2014|-|1. 学习到的特征对能编码光照变化<br>2. 提出一个新的数据集|CNN|Softmax Score|网络输出为二分类，直接判断两者是否为同一个人|manually 20.65<br>detected 19.89|**CUHK01**(100 testID) 27.87|
|Person Re-identification with Discriminatively Trained Viewpoint Invariant Dictionaries|Richard J. Radke<br>RPI|ICCV 2015|Dictionary|学习一个字典，能同时学习 Probe 和 Gallery 的表达|Color Histograms<br>Schmid & Gabor Filters|Euclidean Distance|1. 用LFDA为特征降维<br>2. 训练时，在特征向量的稀疏表达上加上明确的限制去训练一个字典<br>3. 在测试时，从库图片中找出与探测图片，两者的稀疏表达在欧氏距离最近的一个|--|**PRID** 40.6<br>**iLIDS** 25.9|
|*An Improved Deep Learning Architecture for Person Re-identification* [[code](https://github.com/Ning-Ding/Implementation-CVPR2015-CNN-for-ReID)]|Tim K. Marks<br>MERL|CVPR 2015|Distance Metric|新的块匹配方法|CNN|Softmax Score|1. probe某区域块与同位置的邻域内gallery块皆做差分<br>2. 这样对于错位有一定的容忍性|manually 54.74<br>detected 44.96|**CUHK01** (100) 65 (486) 47.53<br>**VIPeR** 34.81|
|Deep Feature Learning with Relative Distance Comparison for Person Re-identification|Hongyang Chao<br>Sun Yat-sen University|PR 2015|Triplet Sample Strategy|基于深度学习的三路网络框架|CNN|Euclidean Distance|1. 在反向传播上做了优化，减少重复计算<br>2. 提供了构建Triplet三元组的方法|--|**iLIDS** 52.1<br> **VIPeR** 40.5|
|Learning Deep Feature Representations with Domain Guided Dropout for Person Re-identification [[code](https://github.com/Cysu/dgd_person_reid)]|Xiaogang Wang<br>CUHK|CVPR 2016|跨数据集|当在多个数据集上学习时，会发现有一些神经元跨域表达而一些神经元只会对指定的域有效|inception|Euclidean Distance|通过比较某个神经元被置零前后loss的变化得到其是否为域敏感|all 75.3|**CUHK01**(485 testID) 66.6<br>**PRID** 64|
|Deep Neural Networks with Inexact Matching for Person Re-identification [[code](https://github.com/InnovArul/personreid_normxcorr)]|Anurag Mittal<br>IITM|NIPS 2016|Distance Metric|用相关系数改进块相似性度量|CNN|Softmax Score|对于Probe图片，将区域块与Gallery相应位置整个条带上的块做相关性系数计算|manually 72.43<br>detected 72.04|**CUHK01** (100) 81.23 (486) 65.04<br>**GRID** 19.20|
|*Gated Siamese Convolutional Neural Network Architecture for Huam Re-identification*|Gang Wang<br>Nanyang Technology University|ECCV 2016|Multi-level Attention|提出一个门函数，通过对比图片的中层特征，能选择性增强精细的局部模式|CNN|Euclidean Distance|1. 双路结构，信息向上传播时会有门结构对特征进行选择<br>2. 门结构是用两者的特征差，借助高斯激活函数作为门值|detected SQ 61.8 MQ 68.1|**Market1501**<br>SQ R 65.88 mAP 39.55<br>MQ R 76.4 mAP 48.45<br>**VIPeR** 37.8|
|Semantics-Aware Deep Correspondence Structure Learning for Robust Person Re-identification|Zhongfei Zhang<br>Zhejiang University|IJCAL 2016|-|希望得到语义层面的图像表达|改编的GoogleNet|Softmax Score|1. 双路融合为一路<br>2. 融合时对两者特征图分别构建金字塔特征图<br>3. 两者同尺度的特征取Max操作<br>4. 网络最后为二分类|manually 80.2|**CUHK01**<br>(100 testID) 89.60<br>(486 testID) 76.54<br>**VIPeR**(316 testID) 44.62|
|Joint Learning of Single-image and Cross-image Representations for Person Re-identification|Lei Zhang<br>Sun Yat-sen University|CVPR 2016|-|将分类与验证相结合|三层CNN|Euclidean Distance+RankSVM|1. 可以应用到双路网络与三路网络|detected 52.17|**CUHK01**(100 testID) 71.80<br>**VIPeR** 35.76|
|Person Re-identification by Multi-Channel Parts-Based CNN with Improved Triplet Loss Function|Nanning Zheng<br>Xi'an JiaoTong University|CVPR 2016|Part|1. 多通道学习整个身体与局部肢体<br>2. 用新的Triplet loss 去加强学习效果|三层CNN|Euclidean Distance|1. Conv1对整个图提特征<br>2. 沿高度将Conv1分为四部分，分别用四个支路去学习局部特征<br>3. 再训练一个支路对Conv1直接学习<br>4. 五个支路输出特征级联<br>5. 不仅要求正样本对距离小于负样本对，还要求正样本对距离小于某个值|--|**iLIDS** 60.4<br>**PRID** 22.0<br>**VIPeR** 47.8<br>**CUHK01**(486 testID) 53.7|
|A siamese Long Short-Term Memory Architecture for Human Re-identification|Gang Wang<br>University of Sydney|ECCV 2016|上下文|通过上下文信息增强区分局部特征的能力|LOMO|Euclidean Distance|沿高度分为多个水平条带，并依次送入LSTM聚合|detected 57.3|**Market1501**<br>MQ R 61.6 mAP 35.3<br>**VIPeR** 42.4|
|End-to-End Comparative Attention Networks for Person Re-identification|Shucheng Yan<br>|TIP 2016|Attention|学习到注意力模型|AlexNet VGG|Euclidean Distance|CNN提取特征，再送入LSTM，用LSTM每一步的h学习mask矩阵，利用mask矩阵与原特征相乘得到有注意力的结果|manually 77.6<br>detected 69.2|**CUHK01** (100 testID) 87.2<br>**Market1501**<br>SQ R 60.3 mAP 35.9<br>MQ R 72.1 mAP 47.9<br>**VIPeR** 54.1|
|Multi-scale Triplet CNN for Person Re-identification [[pdf](https://dl.acm.org/ft_gateway.cfm?id=2967209&ftid=1796503&dwn=1&CFID=3631260&CFTOKEN=dd6359da7f53ea18-CBEDA62E-0B78-DAFF-40BA69C70047AEAE)]|Tao Mei<br>MSRA|MM 2016|Multi-scale|结合多尺度信息|AlexNet|Euclidean Distance|1. 整体为三路网络，修改的Triplet Loss外加正样本对的距离Loss<br>2. 多尺度信息体现在将原始图片下采样为两种尺度，加上原尺寸，共三种尺寸，分别训三个AlexNet，再融合|--|**Market1501**<br>SQ R 45.1<br>MQ 55.4|
|Spindle Net: Person Re-identification with Human Body Region Guided Feature Decomposition and Fusion|Xiaoou Tang<br>CUHK|CVPR 2017|Part|利用行人的身体关键点辅助识别|inception|Euclidean Distance|1. 将人的肢体分为不同的粒度去提取特征，三个大区域，四个小区域<br>2. 先用CPM对图片提取关节点，再根据关节点位置框出7个区域<br> 3. 在提取特征时考虑了不同粒度，融合不同粒度时也有先后之分|all 88.5|**CUHK01**(485 testID) 79.9<br>**PRID** 67<br>**VIPeR** 53.8<br>**3DPeS** 62.1<br>**iLIDS** 66.3<br>**Market1501** SQ R 76.9|
|Learning Deep Context-aware Features over Body and Latent Parts for Person Re-identification|Kaiqihuang<br>CRIPAC & NLPR, CASIA|CVPR 2017|Part|学习更好的基于整个身体和局部身体的特征|四层CNN|Euclidean Distance|1. 用不同膨胀率的卷积核构建类inception结构，可得到不同大小的感受野<br>2. 用google的STN网络学习抠图，得到身体划分，划分为三个部分<br>3. 整体与局部的特征级联的到最后的表达|manually 74.21<br>detected 67.99|**Market1501**<br>SQ R 80.31 mAP 57.53<br>MQ R 86.79 mAP 66.7<br>**MARS** SQ 71.77 MQ 83.03|
|Beyond Triplet Loss: a Deep Quadruplet Network for Person Re-identification|Kaiqi Huang<br>CRIPAC&NLPR,CASIA|CVPR 2017|Triplet Loss|四路网络+基于阈值的hard negative mining|CNN|Softmax Score|1. 测试时相当于二分类<br>2. 相对于三路网络增加了负样本与负样本的限制|manually 75.53|**CUHK01**<br>(486 testID) 62.55<br>(100 testID) 81<br>**VIPeR** 49.05|
|*A Multi-task Deep Network for Person Re-identification*|Kaiqihuang<br>CRIPAC & NLPR, CASIA|AAAI 2017|Multi-task |多任务框架，二分类模型与排序模型同时做，同时也考虑了跨数据集的半监督学习|CNN|Softmax Score|主体为三路网络，在其基础上，正对与负对也被用来训练一个二分类分支|manually 74.68|**CUHK01** (100) 78.5 (486) 59.67<br>**VIPeR** 47.47<br>**iLIDS** 58.38<br>**PRID** 31|
|Point to Set Similarity Based Deep Feature Learning for Person Re-identification|Nanning Zheng<br> Xi'an Jiaotong University|CVPR 2017|Loss|用点对集合来作为相似性度量|CNN|Euclidean Distance|1. P2S改进的Triplet Loss + Contrastive Loss<br>2. 身体局部与整体的不同尺度学习|--|**3DPeS** 71.16<br>**CUHK01** 77.34<br>**PRID** 70.71<br>**Market1501** SQ R 70.72 mAP 44.27<br>MQ R 85.78 mAP 55.73|
|Consistent-Aware Deep Learning for Person Re-identification in a Cammera Network|Jie Zhou<br>Tsinghua University|CVPR 2017|摄像头之间的关系|最大化整个网络的人物匹配，而不是每次只关注一个图片对或几个图片对|训练好的Domain Guide Model|Cosine Distance|1. 用网络提取的特征计算余弦距离，构建相似性矩阵C，行为一个摄像头下的人，列为另一个摄像头下的人<br>2. 构建C相对应的邻接矩阵，同一个人则为1否则为0<br>3. 训练时要最大化C与H的点点相乘，并使H的预测值与真实值误差尽可能小<br>4. C与H是交替优化的|--|**Market1501**<br>SQ R 73.84 mAP 47.11<br>MQ R 80.85 mAP 55.58|
|Person Re-identification by Deep Joint Learning of Multi-Loss Classification|Shaogang Gong<br>Queen Mary University of London|IJCAI 2017|Part|局部特征与整体特征一起学习|改编的ResNet|Euclidean Distance|1. 单路网络，作为多分类任务<br>2. 先在ImageNet上预训练，再在目标数据集上训练<br>3. 在两层公用结构之后便分为两部分，一部分是整体特征学习，另一部分是四个水平条带对应学习局部特征<br>5. 这两个部分各自有一个分类loss，并不融合,并用实验表明不融合更好<br>6. 测试时将两部分特征级联作为最后表达|manually 83.2<br>detected 80.6|**Market1501**<br>SQ ( R 85.1 ) ( mAP 65.5 )<br>MQ ( R 89.7 ) ( mAP 74.5 )<br>**CUHK01**<br>(100) SQ 87.0 MQ 91.2 <br>(486) SQ 69.8 MQ 76.7<br>**VIPeR** 50.2<br>**GRID** 37.5|
|*Deeply-Learned Part-Aligned Representations for Person Re-identification* [[code](https://github.com/zlmzju/part_reid)]|Jingdong Wang<br>MSRA|ICCV 2017|Part<br>Attention|学习对特征图加权，以此选出特征图中较为显著的区域|GoogleNet|Euclidean Distance|1. 用GoogleNet提取的特征 HxWxC,用一个卷积层学习k个HxW的特征图:M<br>2. M 可以视为mask,即为对原特征的不同部分的响应，用每个HxW响应对原HxWxC加权得到新的k个HxWxC<br>对于新的特征图，经过Global Average Pooling和全连接层得到固定长度表达|manually 85.4<br>detected 81.6|**Market1501** SQ R 81.0 mAP 63.4<br>**CUHK01**<br>(100) 88.5<br>(486) 75<br>**VIPeR** 48.7|
|Multi-scale Deep Learning Architectures for Person Re-identification|Xiangyang Xue<br>Fudan University|ICCV 2017|Multi-scale|利用多尺度特征来充分利用图片的细节信息，同时在级联多尺度信息时，利用加权做了选择筛选|GoogleNet修改版|Softmax Score|1. 整体为双路网路，两个分支各有一个分类Loss，中间是将两路的特征相减后取平方值，经一个全连接层得到最后表达，再接二分类。<br>2. 多尺度信息是利用不同大小的卷积核实现的，整体结构类似GoogleNet<br>3. 对于最后的特征，每个channel都学习一个对应的加权值。加权值是两个支路共享的,直接学习，未加先验和限制。<br>4. **从作者的实验中可以看出多尺度网络对于detected的图片效果依旧很好，可能图中只有小部分是人的，但是因为多尺度而能被网络注意到**|manually 76.87<br>detected 75.64|**CUHK01** (100)79.01<br>**VIPeR** 43.03|
|AlignedReID: Surpassing Human-Level Performance in Person Re-identification [[pdf](https://arxiv.org/pdf/1711.08184.pdf)] [[code](https://github.com/huanghoujing/AlignedReID-Re-Production-Pytorch)]|Jian Sun<br>Face++|Arxiv 2017|Distance Metric|用局部特征去帮助全局特征的学习|ResNet50-X|Euclidean Distance|1. triplet loss(in denfense of the triplet loss for ReID)<br>2. 局部特征是最后特征图水平方向GAP。全局特征是水平垂直都GAP<br>3. 比较两者局部特征使用了动态规划<br> 4. 训练时loss由全局特征距离与局部特征距离共同组成<br>5. 用两个这种网络协同学习<br>6. 测试时只是用全局特征算欧氏距离|manually 96.1|**Market1501** SQ R 94.0 mAP 91.2<br>**MARS** SQ R 87.5 mAP 85.6<br>**CUHK-SYSU** R 95.3 mAP 93.7|
|HydraPlus-Net: Attentive Deep Features for Pedestrian Analysis [[code](https://github.com/xh-liu/HydraPlus-Net)]|Lu Sheng<br>CUHK|ICCV 2017|Attention|不同语义层次的Attention|更改之后的Inception-v2|Cosine Distance|1. 一个主分支，三个旁分支，每个分支分别从不同的inception block得到的特征中提取attention map。然后给三个block的特征加mask。2. 需要分阶段训练，因为且产生attention的block之前的网络不微调|91.8|**VIPeR** 56.6<br>**Market1501** SQ R1 76.9|
|Deep Siamese Network with Multi-level Similarity Perception for Person Re-identification [[pdf](https://dl.acm.org/ft_gateway.cfm?id=3123452&ftid=1915024&dwn=1&CFID=851513252&CFTOKEN=41197890)] [[code](https://github.com/InnovArul/personreid_normxcorr)]|Yaowu Chen, Xian-Sheng Hua<br>Zhejiang University, Alibaba|MM 2017|-|在low-level上也加入对匹配的优化，组成多层次的优化网络|inception|Euclidean Distance + L2norm|1. 在第一个卷积层之后加入对低层次特征块的匹配的优化，用的结构主要是NIPS16那篇求相关性系数的方法。<br>2. 对正负样本块的相关性系数，设置阈值，做置零操作，主要是防止噪声块以及无区分性块的影响<br>3. 优化目标是使正样本先关系数最大化吗，负样本相关系数最小化<br>4. 前期不加low-level的匹配优化，训练稳定之后再加入low-level的优化。<be>5. 测试的时候并不需要low-level优化网络<br>6. **只对anchor图片计算分类损失**|manually 85.7<br>detected 83.6|**CUHK01** (100)79.3 (486)63.7<br>**Market1501** SQ R 81.9 mAP 63.6|
|*Deep Representation Learning with Part Loss for Person Re-Identification* [[pdf](https://arxiv.org/pdf/1707.00798.pdf)]|Qi Tain<br>UTSA|Arxiv 2017.06|Part|针对人的不同部位设置不同的loss，让得到的特征更有区分性|GoogleNet|--|1. 对于最后的特征图，找出每一个特诊图为响应最大的点的位置，并将这些点聚为k类。<br>2. 对于每一类的特征图，得到均值特征图，并标准化，大于0.5的点视为前景，最小的闭合矩形框作为 part bounding box.<br>3. 对于C个特征图，k个框，经过ROI Pooling,得到k个Cx4x4的特征，并分别训练k个part loss。<br>4. part loss同时也会提升全局特征表达。<br>5. 最后的特征表达是全局特征与局部特征级联|manually 82,75|**Market1501** SQ mAP 69.3 R1 88.2<br>**VIPeR** 56.65|
|*Harmonious Attention Network for Person Re-Identification* [[pdf](https://arxiv.org/pdf/1802.08122.pdf)]|Shaogang Gong<br>QMUL|CVPR 2018|Attention|在空间上，通道上做soft attention，又用STN选出T个区域做Hard的attention|Inception|L2norm + Euclidean Distance|1. 空间注意力：对通道取均值，只保留空间分辨率，在用一个卷积核,resize,缩放参数得到最后的空间注意力值。通道注意力：用的是squeeze-and-excitation结构。<br>2. 在每个Inception模块后面，用STN学习T个仿射变换矩阵，对此模块前面的特征图进行采样，得到T种特征图，分别对应T个分支。分支网络用单独的Inception结构训，每一模块之后都会加上STN对总网络此层的T个采样。最后通过级联全连接得到512维的特征。<br>3. 总网络的特征与分支网络的特征级联得到总的特征表达，为1024维。<br>4. 无数据增强和预训练。|(767/700)<br>manually R1 44.4 mAP 41.0<br>detected R1 41.7 mAP 38.6|**Market1501**<br>SQ R1 91.2 mAP 75.7<br>MQ R1 93.8 mAP 82.8<br>**DukeMTMC-ReID** R1 80.5 mAP 63.8|
|Multi-Channel Pyramid Person Matching Network for Person Re-Identification|Xi li<br>Zhejiang University&Alibaba|AAAI 2018|CNN+手工特征|分别学习语义表达和颜色纹理表达。语义表达用CNN，而颜色纹理基于手工特征，再输入到网络中，用两个全连接综合这两方面信息预测是否为同一个人|GoogleNet|Softmax Score|1. 语义部分，输入RGB信息，用Googlenet提取特征，再将两个人的特征级联起来以融合信息，用atrous卷积得到3种尺度的特征表达，将级联后的信息通过卷积和池化得到最后表达。<br>2. 颜色纹理表达与语义表达的处理在模型结构上相同，只是输入时手工特征。<br>3. 将语义特征与颜色纹理特征级联再通过全连接等进行分类。|manually 86.36<br>detected 81.88|**CUHK01** (100)93.45 (486)78.95<br>**VIPeR** 50.13<br>**PRID2011** 34<br>**iLIDS** 62.69|
|SVDNet for Pedestrian Retrieval|Shengjin Wang<br>Liang Zheng|ICCV 2017|-|去最后的全连接层权值矩阵的相关性，得到更高层度的正交性|CaffeNet or ResNet50|Euclidean distance|1. 用在倒数第二个全连接层<br>2. 步骤: 向网络中加入一个线性全连接层，并微调至收敛。将线性全连接层的权值矩阵进行SVD分解，<br>W = USV<br>用W和其自身的转置矩阵乘作为本征层。固定本征层，并微调网络至收敛。再不固定本征层，微调整个网络至收敛|detected R1 81.8 mAP 84.8|**Market1501** R1 82.3 mAP 62.1<br>**DukeMTMC-reID** R1 76.7 mAP 56.8|
|Dual Attention Matching Network for Context-Aware Feature Sequence based Person Re-Identification|Jason Kuen<br>NTUS|CVPR 2018|Attention|提出一个用多个序列算距离的方法|DenseNet-121|Euclidean distance|1. 序列的定义是特征图中将不同位置的特征视为一个序列。<br>2. 同一个图片内，利用attention用各个位置的特征的加权值代表自己，加权由转移网络根据此位置生成的特征和各个位置的特征的內积大小决定。<br>3. 不同图片之间的也可以用相似方法得到。<br>4. 最后的距离是特征距离取平均|-|**Market1501**SQ R1 91.42 mAP 76.62<br>**DukeMTMC**R1 81.82 mAP 64.58<br>**MARS**R1 78.74 mAP 62.26|
|Efficient and Deep Person Re-Identification using Multi-Level Similarity|Ngai-Man Cheung<br>SUTD|CVPR 2018|Distance Metric|多层次的相似性度量|六层CNN|Softmax Score与Cosine Distance的加权结果|1. 双路结构<br>2. 第二层与第三层输出的特征划分为三个水平条带，每个水平条带用一个STN提取一个关键patch，此三个块级联起来再经过两个卷积层得到的表达被用来接对比loss。<br>3. 用一个STN得到的特征在另一个特征图上做卷积得到相似性度量，级联三个个part的卷积得到的相似性度量得到此层特征之间的相似性度量。再级联多层特征的相似性度量，再用三层卷积得到最后的二分类结果。<br>4. 最后的距离是由二分类的结果与两侧用于对比损失函数的特征之间的距离的的加权值|manually 87.5<br>detected 86.45|**CUHK01** 88.2<br>**VIPeR** 50.10|
|Adversarially Occluded Samples for Person Re-identification|Kaiqi Huang<br>UCAS|CVPR 2018|Data Augmentation|对重要区域添加mask以让模型关注到其他的区域|IDE(ResNet)|Euclidean Distance|1. 先正常训练模型<br>2. 选择矩形区域区域遮挡，再用相同的配置训练模型<br>3. 选择方法：固定遮挡框的大小，划窗遮挡，对于导致正确标签预测概率降低的位置，以降低的数值为其重要性表达，各个位置的重要性标准化之后，以之为概率随机选择遮挡|detected(767) R1 54.56 mAP 56.09|**Market1501**<br>SQ R1 88.66 mAP 83.3<br>MQ R1 92.5 mAP 88.6<br>**DukeMTMC-reID** R1 84.11 mAP 78.19|
|Attention-Aware Compositional Network for Person Re-identification|Wanli Ouyang<br>The University of Sydney|CVPR 2018|Part Attention|利用关键点检测，得到不同部位的特征，并加权|GoogleNet|--|1.主要有两路，一路用于检测关键点，一路用于提特征，两路先分别训练，然后合起来训练。<br>2. pose分支现在MPII上预训练，输出关键点位置，part场，以及根据关键点划分的三个大块。part场是real time那篇预测两个关键点之间的矩形区域的，这里和划分出的三个大块一样，相当于一个mask用于对另一个支路的特征做掩模，通过各个mask掩模得到的特征pooling再级联起来，再加权(利用mask的响应以及特征学到)，然后就得到了最后的特征。|manually 91.39 detected 89.51|**CUHK01** 88.07<br>**Market1501**<br>SQ R1 88.69 mAP 82.96<br>MQ R1 92.16 mAP 87.32<br>**CUHK03-NP**<br>labeld R1 81.86 mAP 81.61<br>detected R1 79.14 mAP 78.37<br>**DukeMTMC-reID** R1 76.84 mAP 59.25<br>**SenseReID** 41.37|
|*Deep Group-shuffling Random Walk for Person Re-identification* [[code](https://github.com/YantaoShen/kpm_rw_person_reid)]|Xiaogang Wang<br>CUHK|CVPR 2018|re-ranking|将re-ranking嵌入到网络中|ResNet50|Euclidean Distance + reranking|1. 计算gallery之间的相似度以及query与gallery之间的相似度，并用随机游走更新query与gallery之间的相似度，并用此结果做预测以及计算loss<br>2. 将特征分为几组，每一组内计算各种相似度，组与组之间可以组合用于随机游走|manually mAP 94.0 R1 94.9|**Market1501** SQ mAP 82.5 R1 92.7<br>**DukeMTMC** mAP 66.4 R1 80.7|
|*Eliminating Background-bias for Robust Person Re-identification*|Xiaogang Wang<br>CUHK|CVPR 2018|Data Augmentation|探究背景的影响|Inception|Cosine Distance|1. 先在其他数据上预训练一个人的parsing的网络，可以提人体的掩模。固定参数，之后不再训练<br>2. 训练主分支<br>3. 对于一张图片，将掩模上下分为三个部分，分别对应头，上身，下身。二值化并对第一个inception的特征做mask。三个分支用单独的网络训练，此时主分支不变。<br>4. 主分支与三个支路一起训练。<br>数据增强：输入数据时，随机选择是否替换背景|all 92.5|**CUHK01** 82.5<br>**VIPeR** 51.9<br>**3DPeS** 65.6<br>**Market1501**SQ R1 81.2|
|End-to-End Deep Kronecker-Product Matching for Person Re-identification [[code](https://github.com/YantaoShen/kpm_rw_person_reid)]|Xiaogang Wang<br>CUHK|CVPR 2018|Distance Metric|构建匹配用的net，能起到对齐的效果|ResNet50|Softmax Score|1. 两张图片的特征x与y。分别计算各个空间位置的特征之间的內积，作为相似性度量，对于y中位置为(p,q)的点，利用x中(p,q)位置的特征与y中各个位置的相似性，做加权平均，得到y的(p,q)为位置重排的特征。对y重排之后，计算x与y的差值。利用x的特征算空间mask对差值加权。<br>2. 卷积加上采样，构建三种尺度，分别对三种尺度下两个特征做以上操作，最后特征级联得到最后预测|manually R1 93.4 mAP 89.2|**Market1501**<br>SQ R1 90.1 mAP 75.3<br>**DukeMTMC** R1 80.3 mAP 63.2|
|Human Semantic Parsing for Person Re-identification|Muhittin Gokmen<br>MEF|CVPR 2018|Part|human parsing|Inception-V3|-|一路产生parsing，一路提特征，然后做mask。用了很多re-id的数据集做辅助训练|manually R1 91.8|**Market1501**<br>SQ R1 94.63 mAP 90.96<br>**DukeMTMC-reID** R1 88.96 mAP 84.99|
|Mask-guided Contrastive Attention Model for Person Re-Identification|Wanli Ouyang<br>sydney|CVPR 2018|Part|检测行人轮廓，区分前景与背景|MGCAM|Re-ranking|1. 用预训练的FCN提取人的轮廓，用以区分前景和背景<br>2. 输入是RGB与mask的叠加，是4个通道<br>3. 一个主分支，一个body分支，一个背景分支。主分支第二个模块提出的特征被送到两个分支，送入之前用此分支学习到的mask区分前景与背景，分别mask。<br>4. mask用用真实mask作为label来帮助训练，此外要求主分支的特征与body分支的特征相近，与背景分支的距离相远|manually R1 50.14 mAP 50.21<br>detected R1 46.71 mAP 46.87|**Market1501**SQ R1 83.79 mAP 74.33<br>**MARS** R1 77.17 mAP 71.17|
|Resource Aware Person Re-identification across Multiple Resolutions|Vincent Chen<br>Tsinghua University|CVPR 2018|Multiple Resolutions|从网络的不同层提取不同语义的特征组成最后的特征，并可以设计规则提前结束，即直接利用低语义特征计算相似度，节省开支|ResNet50|-|1. 从ResNet50的四个阶段提取特征，分别过两个全连接，映射到一个128维的特征，训练四个加权参数，得到加权平均值，作为最后表达，其次四个特征也用triplet loss辅助训练。<br>2. 设计规则，通过判断阶段距离，决定是否继续提取特征。|manually R1 73.8 mAP 74.7<br>detected R1 70.6 mAP 71.6|**Market1501**SQ R1 90.9 mAP 86.7<br>**MARS** R1 85.1 mAP 81.9<br>**Duke** R1 84.4 mAP 80.0|
|Transferable Joint Attribute-Identity Deep Learning for Unsupervised Person Re-Identification|Wei Li<br>QMUL|CVPR 2018|Transfer Learning|通过ID与属性的融合学习，得到更好地跨数据集效果|MobileNet|Euclidean Distance|1. 源数据集有身份标签和属性标签，目标数据集没有标签<br>2. 网络有两个分支，一个提取属性特征，一个提取身份特征<br>3. encoder与decoder结构，先用encoder将身份特征嵌入到与属性特征相同的维度，然后在decoder。其中低维的身份特征经过sigmoid要与属性特征相似，用loss去限制。decoder出的身份特征要与原身份特征相似，同样用loss限制。<br>4. 扩展到目标数据集时，先提取属性特征作为伪标签去更新编解码结构和属性分支|-|**Market1501**SQ R1 58.2 mAP 26.5<br>**DukeMTMC** R1 44.3 mAP 23.0<br>**VIPeR** 38.5<br>**PRID** 34.8|
|Person Transfer GAN to Bridge Domain Gap for Person Re-Identification|Shiliang Zhang<br>Peking University|CVPR 2018|Transfer Learning<br>Background Change|提出新的数据集，用CyCleGAN变换背景|GoogleNet|-|1. 用预训练网络提取人的mask。然后训练CycleGAN，要求变换前后人物的方差要小。|-|-|
|Person Re-identification with Cascaded Pairwise Convolutions|Zhenzhong Chen<br>Wuhan University|CVPR 2018|Architecture|两个特征相互交织算出最后的相似性|CNN|-|两个特征分别经过一个卷积再相加，重复两次，分别得到两个融合之后的特征，以此类推|manually(100) 88.18<br>detected(100) 85.85|**CUHK01**(100) 93.04<br>**Market1501**SQ R1 83.07 mAP 69.48<br>**DukeMTMC-reID**R1 76.44 mAP 59.49|
|Multi-Level Factorisation Net for Person Re-Identification|Tao Xiang<br>QMUL|CVPR 2018|Architecture|Multi-level|CNN|Euclidean Distance|1. 多层block。每个block内有k个小块，小块的输入相同，并有单独一个小块学习k个加权值，得k个小块的加权平均，然后输出值与输入值相加得到block的输出。相当于跨层连接。最后每一block的加权值被级联起来也作为一个特征，与最后一个block的输出都经过一个映射，映射到同一维度取平均，再经过一个全连接得到最后的表达|detected(100) 82.8<br>manually(half) R1 54.7 mAP 49.2<br>detected(half) R1 52.8 mAP 47.8|**Market1501**<br>SQ R1 90.0 mAP 74.3<br>MQ R1 92.3 mAP 82.4<br>**DukeMTMC-reID** R1 81.0 mAP 62.8|
|Learning Discriminative Features with Multiple Granularity for Person Re-Identification [[code](https://github.com/levyfan/reid-mgn)]|Xi Zhou<br>SITU|Arxiv 2018.07|Part|分多个水平条带，整体特征与局部特征级联|ResNet50|-|1. 从ResNet50的res_conv4_1之后开始分为三个支路，这三个支路是ResNet50在res_conv4_1之后网络复制的，各个支路都是预训练的参数初始化，但是参数不共享<br>2. 第一个每一个支路都算一个全局特征，除此之外，第二个支路最后的特征分为上下两部分，得到两个块特征，第三个支路分为三个块。<br>3. 其中part特征各用一个分类损失函数训练，整体特征用triplet loss训练|manually R1 68.0 mAP 67.4<br>detected R1 66.8 mAP 66.0|**Market1501**<br>SQ R1 95.7 mAP 86.9<br>MQ R1 96.9 mAP 90.7<br>**DukeMTMC-reID** R1 88.7 mAP 78.4|
|Weighted Bilinear Coding over Salient Body Parts for Person Re-identification|Haibin Ling<br>Temple University|Arxiv 2018.04|Part Mask|用多个attention mask对空间加权|GoogleNet|-|1. 先获取一些列的attention mask。对特征进行加权，然后利用Bilinear coding获取最后的表达。<br>2. Bilinear coding是将一维向量的转置与自己相乘，得到各维度相互关联的特征。|manually R1 50.1 mAP 47.7<br>detected R1 43.9 mAP 42.1|**Market1501** SQ R1 84.5 mAP 68.7<br>**DukeMTMC-reID** R1 76.2 mAP 56.9|
|Person Re-identification with Deep Similarity-Guided Graph Neural Network|Xiaogang Wang<br>CUHK|ECCV 2018|1. Graph Neural Network<br>2. Distance Metric|借助GNN，获得更好的相似性度量|ResNet50|Softmax Score|1. 先预训练一个二分类网络，然后开始训练SGGNN。<br>2. 通过两层全连接得到辅助表达，再 利用二分类网络得到两个图片之间的相似性，归一化之后作为加权值，对辅助表达求加权平均值，然后对当前特征进行更新。得到最后表达之后再训练二分类|manually(100) R1 95.3 mAP 94.3|**Market1501** SQ R1 92.3 mAP 82.8<br>**DukeMTMC** SQ R1 81.1 mAP 68.2|
|In Defense of the Classification Loss for Person Re-identification|Yan Lu<br>MSRA|Arxiv 2018.09|Multi Branch|将特征分为几组，每一组接一个分类损失函数|PCB|Euclidean Distance|1. 提取特征，沿通道分为若干组，每一组分别接一个全连接（权值共享），再分别接分类损失函数（含全连接）。|detected(700) R1 61.6 mAP 54.8|**Market1501**SQ R1 93.5 mAP 79.8<br>**DukeMTMC** R1 84.7 mAP 68.1|
|FD-GAN: Pose-guided Feature Distilling GAN for Robust Person Re-identification|Hongsheng Li<br>CUHK|NIPS 2018|Pose GAN|希望获得不含有pose信息的图片特征，这样比较相似性时能减少姿态的干扰。|ResNet50|-|1. 给定一个pose和一个图片，生成此人的指定pose的图片，要求生成后的图片还是原来的人，生成后的图片的pose是指定的pose,相同人生成的指定的pose图片应当尽可能相似。<br>2. 测试时，只用image encoder提取到的特征|detected(100) R1 92.6 mAP 91.3|**Market1501** R1 90.5 mAP 77.7<br>**DukeMTMC-reID** R1 80.0 mAP 64.5|
|Mancs: A Multi-task Attentional Network with Curriculum Sampling for Person Re-identification|Xinggang Wang<br>HUST|ECCV 2018|Attention|渐进采样策略，由易到难。网络用了attention|ResNet50|Euclidean distance|1. attention是根据SeNet的思想改进过来的，由仅通道维度扩展到通道与空间维度。2. 渐进采样会给样本分配根据距离定义的采样概率。3. 使用了重排序|700 manually R1 69.0 mAP 63.9<br>detected R1 65.5 mAP 60.5<br>100 manually R1 93.8 detected R1 92.4|**Market1501** SQ R1 93.1 mAP 82.3<br>MQ R1 95.4 mAP 87.5<br>**DukeMTMC-reID** R1 84.9 mAP 71.8|
|Part-Aligned Bilinear Representations for Person Re-identification|Jingdong Wang<br>MSRA|ECCV 2018|Part|利用part帮助计算相似性|GoogleNet|Net|1. 用预训练的关键点检测器得到关键点相应图。计算两个人各个part相应图之间的相似性，用以加权特征描述之间的相似性|manually 91.5 detected 88.0|**Market1501**<br> SQ R1 93.4 mAP 89.9<br>MQ R1 95.4 mAP 93.1<br>**CUHK01** (100) R1 90.4 <br>(486) R1 80.7<br>**DukeMTMC**R1 88.3 mAP 83.9<br>**MARS** R1 85.1 mAP 83.9|

</details>



<details>
<summary>Video-based</summary>

## Video
| Name | Author | Conference & Year |Tag| Motivation |Feature|Fusion|Metric|Detail|iLIDS|PRID|MARS|
|:----:|:------:|:-----------------:|:---:|:----|:-----------|:-----:|:----:|:----:|:-----|:---:|:--:|:--:|
|Person Re-identification by Video Ranking|Shenjing Wang<br>Queen Mary University of London|ECCV 2014|Key frames|1. 能从有噪声的帧序列中选出关键帧<br> 2. 学习一个视频排序函数|HOG3D|不融合，放在特征池中，供比较.|1. 学习一个矩阵，矩阵与两人特征差的乘即代表距离<br>2. 将两人的特征两两比较距离，最大的距离代表最后的距离|1. 只取图片的下半部分，定义能量函数FEP，能量值随帧变化<br> 2. 对每个图，在极大值与极小值点前后取共10帧<br> |28.9|23.3|--|
|Sparse Re-ID: Block Sparsity for Person Re-identification|Richard J. Radke<br>RPI|CVPR 2015|Dictionary|Probe图片的特征向量可以近似看成<br>处于Gallery图片特征向量所处的embedding space|Color Histograms<br>Schmid & Gabor Filters|级联构成字典的一部分|Euclidean Distance|构建一个字典|24.9|35.1|---|
|A Spatio-temporal Appearance Representation for <br>Video-based Pedestrian Re-identification|Rui Huang<br>Shandong University & UCAS|ICCV 2015|时间对齐|1. 处理时间空间对齐问题 <br>2. 空间上按身体部位划分为不同的块<br>3. 时间上用FEP|Fiser vector|1. 空间上6部分特征级联得到帧表达<br>2. 时间上级联得到视频表达|最近邻分类器|1. 用傅里叶变换对FEP去噪 <br>2. 空间上按头，四肢，上身，将身体分为6个部分|44.3|64.1|--|
|Deep Recurrent Convolutional Networks for Video-based <br>Person Re-identification: An End-to-End Approach|Chunhua Shen<br>The University of Adelaide|Arxiv 2016|GRU|同时学习时间空间特征和相似性矩阵|四层卷积网络|GRU+average pooling|Euclidean Distance|GRU中用卷积操作代替了全连接层|42.6|49.8|--|
|Top-push Video-based Person Re-identification|Weishi Zheng<br>Sun Yat-sen University|CVPR 2016|Loss|不同的人有相似的表现而引发类间距离较小|HOG3D+color histograms+LBP|级联|马氏距离|学习马氏距离的矩阵M|56.33|56.74|--|
|Person Re-identification by Exploiting <br>Spatio-temporal Cues and Multi-view Metric Learning|Yuanyan Wang<br>Bejing Forestry University|IEEE SRL 2016|Distance Metric|提出新的时空特征及匹配方法|从标准化的光流能量图中提取LBP|级联|马氏距离|优化马氏距离中的W|69.13|66.78|--|
|Person Re-identification via Recurrent Feature Aggregation [[code](https://github.com/daodaofr/caffe-re-id)]|Xiaokang Yang<br>Shanghai Jioa Tong University|ECCV 2016|LSTM|用LSTM融合时间信息|LBP+HSV+lab color channels|LSTM融合后再级联各时间输出|RankSVM|对噪声鲁棒性强|49.3|64.1|--|
|*Recurrent Convolutional Network for Video-based Person Re-identification* [[code](https://github.com/niallmcl/Recurrent-Convolutional-Video-ReID)]|Paul Miller<br>Queen's University Belfast|CVPR 2016|RNN|利用CNN提取空间特征，RNN提取空间特征|CNN|RNN + average pooling|Euclidean Distance|Softmax Loss + Contrastive Loss|58|70|R1 40|
|Video-based Person Re-identification with Accumulative Motion Context|JiaShi Feng<br>Hefei University of Technology|TCSVT 2017|光流|用网络学习光流，并整合到网络中|CNN|RNN+average pooling|Euclidean Distance|1. 先用光流训练一个网络，让其能预测光流<br>2. 将光流网络加入到原网络中一起使用|65.3|78|--|
|Learning Compact Appearance Representation for Video-based Person Re-identification|Kan Liu<br>Shandong University|Arxiv 2017.02|Key frames|从若干帧中提取特征而不是使用整个视频|五层卷积网络|Max Pooling|Euclidean Distance|1. 利用对于不同视频段提取到的特征，可以得到两个人之间的平均距离和最小距离<br>2. FEP选取关键帧|60.4|83.3|--|
|See the Forest for the Trees: Joint Spatial and Temporal <br>Recurrent Neural Networks for Video-based Person Re-identification [[pdf](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8100200)]|Tieniu Tan<br>UCAS,CASIA,CEBSIT|CVPR 2017|-|能挑出关键帧并充分利用环境信息|CaffeNet|TAM+SRM|1. TAM输出特征间的标准化的欧氏距离<br>2.SRM输出的相似概率<br>3. 两个相似性度量的加权和 |1.时间循环网络对两个人各时间空间特征级联后的差值的六个方向用RNNN聚合，最后二分类，得到相似概率 <br>2. 时间上，每一步都接收所有时间的特征，学习加权值，得到特征的加权和，并将其送入RNN得到此时的表达，最终表达是各时间特征均值<br>3. 整体结构为三路与双路的结合|55.2|79.4|R1 70.6<br>mAP 50.7|
|*Quality Aware Network for Set to Set Recognition* [[code](https://github.com/sciencefans/Quality-Aware-Network)]|Wanli Ouyang<br>University of Sydney|CVPR 2017|Quality|能自动学到图片的质量并用以加权图片特征|GoogleNet|通过学习到的质量分数加权|Euclidean Distance|代码中的升级版本<br>1. 三路网络，Triplet Loss,每一路又有一个分类Loss,正样本对又构建Contrastive loss(相当于只有正样本情况)<br>2. 对于每一个支路，都由GoogleNet组成，其后便是分类loss。每个支路中还有一个QAN网络，用于产生质量分数<br>3. QAN是两层卷积网络加全连接层，全连接输出维度为3，结构CPCPF，直接由原始图片数据学得<br>4. GoogleNet中间特征中沿高度均分得到三个特征，每个特征再均值池化压缩h维度。每个支路的QAN输出的3个数值标准化后分别对其加权<br>5. 加权后的特征经过L2 Norm便得到最后表达，进入Triplet Loss与Contrastive Loss|68.0|90.3|--|
|Jointly Attentive Spatial-Temporal Pooling Networks for Video-based Person Re-identification [[pdf](http://openaccess.thecvf.com/content_ICCV_2017/papers/Xu_Jointly_Attentive_Spatial-Temporal_ICCV_2017_paper.pdf)] [[code](https://github.com/shuangjiexu/Spatial-Temporal-Pooling-Networks-ReID)]|Pan Zhou<br>Huazhong University of Science and Technology|ICCV 2017|-|在空间上与时间上都是注意力模型|三层CNN|RNN+注意力时间池化|Euclidean Distance|1. 双路结构，分类loss+Contrastive Loss<br>2. 对每一个支路，输入为原始图片加光流，对于每一帧的特征用SPP得到不同尺度的特征并级联，得到单帧表达<br>3. 将每一帧的表达依次送入RNN，每一步的输出为每一帧的最终表达<br>4. 利用注意力模型得到每一帧的加权值，利用加权求和得到视频表达|62|77|R1 44|
|A Two Stream Siamese Convolutional Neural Network For Person Re-identification|Dahjung Chuang<br>Purdue|ICCV 2017|-|将光流与RGB分开，分别在两个Siamese网络中|RNN+注意力时间池化|光流与RGB的Euclidean Distance|3层CNN|在RNN-ReID结构上，用两个相同结构的Siamese网络，分别提取RGB与光流中的特征，loss与特征是两者的加权|60|78|--|
|Region-based Quality Estimation Network for Large-scale Person Re-identification|Shaofan Cai<br>SenseTime|AAAI 2018|Quality|借助关键点检测，基于区域的质量估计，并提出新的视频数据集|GoogleNet|Region-based quality|Cosine Distance|1. 之前的数据集因为检测或跟踪失败而导致清洁度太低，人工标注的又对齐的太好<br>2. 新数据集特点：590000张图片，检测子检测，场景拥挤，年龄分布大<br>3. 用CPM检测关键点，产生上中下三个框，基于框预测三个框的质量分数<br>4. 对所有帧的同一个框的质量分数L1标准化，求特征加权和，最后级联三个框的特征|76.1|92.4|R1 77.83 mAP 71.14|
|Deep Cross-Modality Alignmeant for Multi-Shot Person Re-Identification [[pdf](https://dl.acm.org/ft_gateway.cfm?id=3123324&ftid=1914667&dwn=1&CFID=1028089922&CFTOKEN=46445411)]|Xiaokang Yang<br>Shanghai Jiao Tong University|MM 2017|数据扩增|现有的视频数据集较小，为了利用现有的基于图片的数据集，设计了伪序列生成的结构，利用一整图片生成一个视频|三层CNN|RNN + average pooling|Euclidean Distance|1. 视频生成主要是依靠随机的Crop，随机选择剪切起始的点。随机性是利用马尔可夫链蒙特卡罗方法从一个固定坐标开始，一步步走动。<br>2. 为了模拟遮挡等复杂因素，在第一个卷积层的结果上加入了Dropout。<br>3. 直接使用单张图片预训练反而会使效果变差|60|80|R1 63|
|Data Generation for Improving Person Re-identification [[pdf](https://dl.acm.org/ft_gateway.cfm?id=3123302&ftid=1914656&dwn=1&CFID=340927&CFTOKEN=4770ffe45b1e2b7e-BB310FC0-0D0B-C046-757DF131D08E8753)]|Zhiyong Gao<br>Shanghai Jiao Tong University|MM 2017|数据扩增|为了解决视频数据集不充分的问题，提出两种结构，一种针对类内，能生成可保持物体运动信息的视频，另一种针对类间，可替换背景。|三层CNN|RNN + average pooling|Euclidean Distance|1. 类内：[预测神经网络](https://arxiv.org/pdf/1605.08104.pdf)，结构是四层的网络，每一层分为四个基础部分：输入卷积模块，循环表达模块，输出预测模块，误差表达模块。训练时，先自顶向下求循化表达模块R的值，在自下而上更新其他值。输入为T帧视频，输出为生成的T-1帧视频。<br>2. 类间：[背景置换网络](https://arxiv.org/pdf/1611.07004.pdf)|66|79|--|
|Three-Stream Convolutional Networks for Video-based Person Re-Identification|Yi Pab<br>Southwest Jiaotong University|Arxiv 2017.11|-|降低空间分辨率有很多方法，最大值池化，均值池化，增加卷积步距等等，这些结构对特征的利用情况不同。基于这一点，作者设计了多支路结构的·网络，充分利用这些结构的特点。|四层CNN|RNN + average pooling|Euclidean Distance|1. 网络分三条支路，每个支路三层卷积，三个支路分别使用最大值池化，均值池化，增加卷积步距来降低分辨率。<br>2. 三条支路得到的特征大小相同，在宽度维度上拼接再经过一层卷积层和均值池化得到最后的表达，无全连接。<br>3. 作者经过试验表明，虽然可能某一条支路不如另一条支路效果好，但是共同使用时，依旧可以提升整体的性能。<br>4。 在宽度上叠加效果比在通道上叠加好。|67.5|79.7|45.6|
|Video Person Re-identification by Temporal Residual Learning|Hongyu Wang|Arxiv 2018.02.22|BiLSTM|利用STN做空间上的对齐，BiLSTM融合时间信息|GoogleNet|BiLSTM|L2norm + Euclidean Distance|1.只用分类来训练<br>2. 网络所有部分先用MARS预训练（主要是因为STN部分）|57.7|87.8|79.3|
|Diversity Regularized Spatiotemporal Attention for Video-based Person Re-identification|Xiaogang Wang<br>CUHK|CVPR 2018|Attention|空间与时间上的显著性|ResNet50(用图片reid数据集预训练)|加权平均|Cosine Distance|1. 对输入视频，均分为6份，训练时是从每一份随机取出一个，组成6帧的视频送入网络，测试时用每一份的第一个构成6帧视频代表整个视频<br>2. 用ResNet提取特征后，训练k个空间注意力网络，每一个网络输入是空间上各个位置的特征，每一个位置输出一个分值，这样每个注意力网络会对每个空间位置得到一个分值，用softmax做处理取到最显著的位置。相当于训了k个mask，加权后空间取平均，则每一帧图像得到的特征是(K,C)大小的。<br>3. 对于整个视频特征是(D,K,C)。训一个打分模型，对于每一个C打一个分数，共有D*K个，时间维度上取softmax。对特征加权后取平均得到(K,C)大小的最后的特征表达|80.2|93.2|R1 82.3<br>mAP 65.8|
|Multi-shot Pedestrian Re-identification via Sequential Decision Making [[code](https://github.com/TuSimple/rl-multishot-reid)]|Liqing Zhang<br>Shanghai Jiao Tong University|CVPR 2018|增强学习|用增强学习做redi，在效率与准确率之间做平衡|Inception-BN or AlexNet|增强学习|预测为同一个人与不同人的Q值得差|1。 先用预训练的网络训并提取图片的特征。<br>2. Action：判断两张图片为同一个人，不同人，未确定。Reward: 预测正确为1，预测错误或者到了最大步数结果还是未确定时为-1，未确定时为0.2。Q设置为rt 与下一步的Q的最大值之和。<br>3. 送入增强学习部分的数据是当前特征，记忆加权特征与根据当前特征计算的手工特征(差值欧氏距离，均值)，然后提特征网络与后面增强学习网络一起训练|60.2|85.2|71.2|
|Exploit the Unknown Gradually: One-Shot Video-Based Person Re-Identification by Stepwise Learning [[code](https://github.com/Yu-Wu/Exploit-Unknown-Gradually)]|Wanli Ouyang<br>The University of Sydney|CVPR 2018|One-Shot|逐渐给无标签数据添加伪标签|ResNet50|Average Pooling|Cosine Distance|1. 先用有标签数据训练一个模型。<br>2. 依次扩大训练数据的大小，每次增大m。每一步，对于给定的数据集大小，选择伪数据与真实数据特征欧氏距离最小，然后决定使用那些数据，并打上与之最近的数据的标签，并训练。<br>3.迭代进行直至用完数据。|-|-|R1 62.67 mAP 42.45<br>**DukeMTMC-VideoReID** R1 72.79 mAP 63.23|
|Video Person Re-identification with Competitive Snippet-similarity Aggregation and Co-attentive Snippet Embedding|Xiaogang Wang<br>CUHK|CVPR 2018|1. Attention<br>2. Distance Metric|将长视频等间距划分为短视频，短视频之间比较距离|ResNet50|加权平均|FC+sigmoid|1. 输入是RGB+光流，用ResNet50提取2048维的特征向量。<br>2. Co-attention embedding: value与key feature由全连接层生成，query feature是用LSTM聚合probe视频片段生成。query freature 也被用于gallery特征生成，即gallery的特征加权是与query相关的。|85.4|93.0|R1 86.3<br> mAP 76.1|
|SCAN: Self-and-Collaborative Attention Network for Video Person Re-identification|Xiaogang Wang<br>CUHK|Arxiv 2018.07|Distance Matric|self attention + collaborative attention|ResNet50|加权平均|Softmax Score|1. self attention: 用帧的特征与平均特征之间的关系建立加权值。<br>2. collaborative attention:用帧特征与其他视频平均特征的关系得到加权值。<br>3. 加权值经过softmax标准化，然后求和<br>4. 光流，不是直接级联，而是先经过一层卷积，然后与经过卷积后RGB图像的特征相加|w/o optical 81.3<br>w/ optical 88.0|w/o optical 92.0 <br>w/ 95.3|w/o optical R1 86.6 mAP 76.7<br>w/ optical R1 87.2 mAP 77.2|
|Video-based Person Re-identification via 3D Convolutional Networks and Non-local Attention|Zhouwang Yang<br>USTC|Arxiv 2018.07|3D Convolutional Network|ResNet50-3D + Non-local Attention|ResNet50-3D|加权平均|Euclidean Distance|ResNet50-3D(pretrained in Kinetics) + Non-local Attention|81.3|91.2|R1 84.3 mAP 77|
|Spatial-Temporal Synergic Residual Learning for Video Person Re-Identification|Pan Zhou<br>HUST|Arxiv 2018.07|Architecture|时间平滑+RNN跨层连接|CNN|RNN+Avg pooling|Euclidean Distance|1. 学习一个空间mask参数，作为相邻帧之间空间平滑。<br>2. RNN处理前后有跨层连接|70|88|R1 76.7|

</details>

<details>
<summary>Metric</summary>

## Metric
| Name | Author | Conference & Year | Motivation |Feature|Metric|Detail|Dataset|
|:----:|:------:|:-----------------:|:-----------|:-----:|:----:|:-----|:------|
|Relaxed Pairwise Learned Metric for Person Re-identification|Horst Bischof<br>Graz University of Technology|ECCV 2012|从不同摄像头下的采样中学习矩阵，注重摄像头之间的变换|Color + LBP|马氏距离|在距离度量学习前先对特征进行PCA降维|**VIPeR** 27<br>**PRID** 15|
|Deep Metric Learning for Practical Person Re-identification|Stan Z. Li<br> NLPR, CASIA|ICPR 2014|提出一个更通用的方式去从原始图片上学习距离度量|CNN|Cosine + Binomial Distance|1. 双路网络，当做二分类，输出相似度<br>2. 每一支路分为三个小支路，分别输入图片的上中下三部分，最后级联再经全连接得到最后表达|**VIPeR** 34.4<br>**PRID** 17.9|
|Multi-shot Re-identification with Random-Projection-Based Random Forests|Richard J. Radke<br>RPI|WACV 2015|基于视频的距离度量学习|Color Histograms<br>Schmid & Gabor Filters|随机森林输出的相似性值|1. 通过随机投影对图片的特征向量降维<br>2. 在投影出的亚空间中，基于对层面训练随机森林<br>3. 随机投影增加了随机森林的分类多样性<br>4. 融合多个视频帧的方法：计算两者所有图片对的相似性值，再取平均|**3DPeS** 43(估计)|
|*Person Re-identification by Local Maximal Occurrence Representation and Metric Learning* [[code](https://github.com/IrvingShu/XQDA)]|Stan Z. Li<br>NLPR|CVPR 2015|新的手工特征和距离学习方法|SILTP histograms<br>Color Bins|在kissme的基础上加入了低维投影|1. 选取特征时有一系列的子窗口，并对窗口特征做max pooling<br>为了获得多尺度信息，用了有三种大小的图片金字塔|**CUHK03** manually 52.20 detected 46.25<br>**VIPeR** 40.00<br>**GRID** 16.56|
|*Embedding Deep Metric for Person Re-identification: A Study Against Large Variations*|Stan Z. Li<br>NLPR|ECCV 2016|提供了新的正样本对采集方法以及距离度量的方法|CNN|Euclidean Distance|1. 构成正样本对时，应选取与样本距离小的一些图片，距离太大的样本对会有害训练<br>2. 用全连接层将马氏距离的学习转化为欧氏距离|**CUHK03** manually 61.32 detected 52.09<br>**CUHK01** (100) 86.59<br>**VIPeR** 40.91|
|Re-ranking Person Re-identification with k-reciprocal Encoding [[code](https://github.com/zhunzhong07/person-re-ranking)]|Shaozi Li<br>Xiamen University|CVPR 2017|对排序得到的结果再次处理重排|CaffeNet|Jaccard Distance + L2 Distance|1. 利用近邻关系组成集合，生成Jaccard Distance<br>2. 最后的距离是两种距离的加权和|**Market1501** SQ 77.11<br>**CUHK03** detected 61.6 manually 58.5<br>**MARS** 73.94<br>**PRW** 52.54|
|Scalable Person Re-identification on Supervised Smoothed Manifold [[pdf](https://arxiv.org/pdf/1703.08359.pdf)]|Qi Tian<br>UTSA|CVPR 2017|对获得的相似性矩阵再处理，获得平滑的流形相似性度量|LOMO,GOG,ELF6|欧氏距离及其他相似性度量方式|1. 通过转移矩阵不断迭代<br>2. 可以和其他距离度量方法协同使用，先提取特征，再进行距离度量学习，然后用这个方法优化相似性矩阵，得到最后的结果|**CUHK03**SQ manually 76.6 detected 72.7<br>**VIPeR** 53.73<br>**PRID450S** 72.98|

</details>

<details>
<summary>Loss</summary>

## Loss
| Name | Author | Conference & Year | Motivation |Feature|Metric|loss|Detail|Dataset|
|:----:|:------:|:-----------------:|:-----------|:-----:|:----:|:---|:-----|:------|
|Margin Sample Mining Loss: A Deep Learning Based Method for Person Re-identification [[pdf](https://arxiv.org/pdf/1710.00478.pdf)]|Chi Zhang<br>Megvii|Arxiv 2017.10|限制最大的正样本对距离小于最小的负样本对距离|ResNet50-X|标准化的欧式距离|对于整个batch，找到最大的正样本对距离，和最小的副样本对距离，让他们距离超过margin|输入为P个人，每人K个图片|**CUHK03** manually 87.5<br>**Market1501**<br>SQ R 88.9 mAP 76.7<br>**MARS**<br>SQ R 84.2 mAP 74.6|
|*In Defense of the Triplet Loss for Person Re-identification* [[code](https://github.com/VisualComputingInstitute/triplet-reid)]|Bastian Leibe<br>RWTH Aachen University|Arxiv 201711|在一个batch中，寻找最困难的正负样本组成三元组|ResNet50 or LuNet|欧氏距离|1. 一个batch中有P个人，每个人K张图片<br>2. 对每个人，每一张图片，在batch内寻找最困难的正样本与负样本计算triplet loss<br>3. 最后一共有PK个loss用于计算和平均|用了soft-margin|**CUHK03** manually 89.63 detected 87.58<br>**Market1501**<br>SQ R 86.67 mAP 81.07<br>MQ R 91.75 mAP 87.18<br>**MARS**<br>MQ R 81.21 mAP 77.43|
|Support Neighbor Loss for Person Re-identification|Yun Fu<br>Northeastern University|MM 2018|在近邻内部构建损失对|ResNet50|Euclidean Distance|Support Neighbor Loss|对于每个样本，得到其K近邻，在K近邻计算query与各个近邻的欧式距离，然后利用softmax，将此距离处理为概率，要求近邻内正样本的概率和越大越好。同时每个近邻内，最远正样本距离与最近正样本距离的差值要小，这样能让样本分布在query的周围||**Market1501**<br>SQ R1 88.27 mAP 73.43<br>MQ R1 92.13 mAP 80.26<br>**CUHK03**(100) manually R1 90.2 detected 88.0<br>**CUHK01**(486) R1 79.3 (100) R1 93.8|
|Hard-Aware Point-to-Set Deep Metric for Person Re-identification|Xiang Bail<br>Huazhong University of Science and Technology|ECCV 2018|对与triplet，正负样本根据距离加权|ResNet50|Euclidean Distance|Triplet Loss|对正负样本的距离采用多项式加权的形式|**Market1501**<br>SQ mAP 69.43 R1 84.59<br>MQ mAP 76.75 R1 90.20<br>**CUHK03** manually 90.4 detected 88.9<br>**DukeMTMC** mAP 60.64 R1 75.94|
|Tripletcenter loss for multi-view 3d object retrieval|Song Bai<br>HUST|CVPR 2018|将triplet loss与center loss结合在一起使用|-|-|Triplet-center loss|每一类有个随机初始化的类中心，对于一个batch中的一个样本，距离类中心的距离要比距离另一个类的类中心的距离小m|-|

</details>


<details>
<summary>Unsupervised</summary>

## Unsupervised
| Name | Author | Conference & Year | Motivation |Feature|Metric|Detail|Dataset|
|:----:|:------:|:-----------------:|:-----------|:------:|:----:|:-----|:------|
|Unsupervised Person Re-identification by Deep Learning Tracklet Association|Shaogang Gong<br>QMUL|ECCV 2018 oral|结合视频每一帧的时间标签和相机标签，尽可能降低同一个人的视频分配了不同的label的情况|||1. 同一时刻下，不同的采样ID不同，这是因为同一时刻人不会出现在不同位置。<br>2. 同一个camera下，过了一定的时间，重新分配标签。这是基于行人行走的速度，在经过一定时间后，便会出了摄像头的拍摄范围。<br>3. 对于带有tracking的数据集，要求采样时，选择场景空间中，同时出现且位置距离较远的目标。<br>4. 跨摄像头情况下，对于一个短视频，搜寻其他摄像头下的近邻视频，视为正样本，否则为负样本。并设计loss使得正样本距离变小，负样本距离变大|**CUHK03**(700) R1 44.7 mAP 31.2<br>**Market1501** R1 63.7 mAP 41.2<br>**DukeMTMC** R1 61.7 mAP 43.5<br>**PRID2011** R1 49.4 <br>**iLIDS-VID** R1 26.7<br>**MARS** R1 43.8 mAP 29.1|
|Domain Adaptation through Synthesis for Unsupervised Person Re-identification|Jean-Francois<br>ULAVAL|ECCV 2018|提出新的数据集，使用合成数据|-|-|扫描真人，生成模型，虚拟光源，使用合成的人来创建数据集|-|
|Generalizing A Person Retrieval Model Hetero- and Homogeneously|Liang Zheng<br>UTS|ECCV 2018|生成不同摄像头下的样本，可以当作正样本对|ResNet50|-|1. 目标数据集只知道训练集的摄像头ID。<br>2. 对于给定的目标图片，生成不同摄像头下的样本，这些便视为正样本对。<br>3. 对于目标数据集，训练集随机选取多张图片，每一张视为不同的行人，这样虽然可能会有两张图片属于同一个人的情况，但是目标数据集比较大的时候，影响比较小。|**DukeMTMC -> Market1501**<br>R1 62.2 mAP 31.4<br>**Market1501 -> DukeMTMC**<br>R1 46.9 mAP 27.2|
</details>

<details>
<summary>Person Search</summary>

## Person Search
| Name | Author | Conference & Year |Tag| Motivation |Feature|Detail|Dataset|
|:----:|:------:|:-----------------:|:---:|:----|:-----------|:-----:|:----:|:----:|:-----|:---:|:--:|:--:|
|RCAA: Relational Context-Aware Agents for Person Search|Yi Yang<br>UTS|ECCV 2018|增强学习|用增强学习得到候选框|ResNet50|-|-|
|Person Search by Multi-Scale Matching|Shaogang Gong<br>QMUL|ECCV 2018|多尺度|多尺度匹配，利用不同层次的特征|ResNet50|1. person detection: Faster-RCNN|**PRW** R1 65.0 mAP 38.7<br>**CUHK-SYSU** R1 88.5 mAP 87.2|

</details>

<details>
<summary>New Perspective</summary>

## New Perspective
| Name | Author | Conference & Year | Motivation |Feature|Metric|Detail|Dataset|
|:----:|:------:|:-----------------:|:-----------|:------:|:----:|:-----|:------|
|Recurrent Attention Models for Depth-Based Person Identification|Li FeiFei<br>Stanford University|CVPR 2016|数据集是人的深度信息，立体的，无RGB信息|--|--|因数据集较大，结合了循环注意力模型，自动选择下一个关注点|--|
|End-to-End Deep Learning for Person Search|Xiaogang Wang<br>CUHK|ECCV 2016|将检测与匹配结合起来做|Faster RCNN|Softmax Score|1. 分类的时候，一个batch只有少数图片，但整体类别很多，所以Softmax目标会很稀疏<br>2. 提出随机采样的Softmax loss，即每次随机选取Softmax神经元的一个子集|--|
|Person Search with Natural Language Description|Xiaogang Wang<br>CUHK|CVPR 2017|根据自然语言描述去搜索人物|VGG16|--|1. 单元级的注意力与单词级的门控制|--|
|Unlabeled Samples Generated by GAN Improve the Person Re-identification Baseline in vitro [[code](https://github.com/layumi/Person-reID_GAN)]|Liang Zheng<br>University of Technology Sydney|ICCV 2017|借助于GAN产生训练图片，缓解过拟合|ResNet|Cosine Distance|1. 用DCGAN产生图片，产生的图片不属于任何类，使用 label smoothing regularization (加权0.1)方法学习针。对于正常的真实图片，用交叉熵损失(加权1)学习|**Market1501**<br>SQ R1 83.97 mAP 66.07<br>MQ R1 88.42 mAP 76.10<br>**CUHK03** detected<br>R1 84.6 mAP 87.4<br>**DukeMTMC**<br>R1 67.68 mAP 47.13|
|Unsupervised Cross-dataset Person Re-identification by Transfer Learning of Spatio-temporal Patterns [[code](https://github.com/ahangchen/TFusion)]|Jianming Lv<br>South China University of Technology|CVPR 2018|-|-|-|-|-|
|Deep Spatial Feature Reconstruction for Partial Person Re-identification: Alignment-free Approach|Zhenan Sun<br>CASIA|CVPR 2018|部分人体找完整人体|CNN|Euclidean distance|将稀疏字典表达嵌入到网络中，完整人体特征视为字典，稀疏矩阵是要学习的权值，这些用以重建部分人体的特征|**Partial REID**MQ 53.67<br>**Partial-iLIDS** MQ 55.46|
|Person Search via Mask-Guided Two-Stream CNN Model|Wanli Ouyang, Ying Tai<br>The University of Sydney|ECCV 2018|检测出图片，然后利用原始图片与mask一起做|ResNet50|-|人的图片检测出来后，用mask将前景分出来，然后将包括背景的图片和前景图片的特征级联，用SEBlock做一次加权。|**CUHK-SYSU**(100) mAP 83.0 R1 83.7<br>**PRW** mAP 32.6 R1 72.1|
|Person Search in Videos with One Portrait Through Visual and Temporal Links|Dahua Lin<br>CUHK|ECCV 2018|给人脸寻找电影中的人|IDE...|-|-|-|

</details>

<details>
<summary>GAN</summary>

## GAN
| Name | Author | Conference & Year | Motivation |G & D|Feature|Metric|Detail|Dataset|
|:----:|:------:|:-----------------:|:-----------|:---:|:------:|:----:|:-----|:------|
|Unlabeled Samples Generated by GAN Improve the Person Re-identification Baseline in vitro [[code](https://github.com/layumi/Person-reID_GAN)]|Liang Zheng<br>University of Technology Sydney|ICCV 2017|借助于GAN产生训练图片，缓解过拟合|DCGAN|ResNet|Cosine Distance|1. 用DCGAN产生图片，产生的图片不属于任何类，使用 label smoothing regularization (加权0.1)方法学习针。对于正常的真实图片，用交叉熵损失(加权1)学习|**Market1501**<br>SQ R1 83.97 mAP 66.07<br>MQ R1 88.42 mAP 76.10<br>**CUHK03** detected<br>R1 84.6 mAP 87.4<br>**DukeMTMC**<br>R1 67.68 mAP 47.13|
|Camera Style Adaptation for Person Re-identification|Liang Zheng<br>UTS|CVPR 2018|做不同摄像头之间的数据增强|CycleGAN|ResNet50|Cosine Distance|1. 用CycleGAN，利用一个摄像头下的数据生成另一个摄像头下的数据。<br>2. 伪数据使用LSR Loss|**Market1501**<br>SQ R1 89.49 mAP 71.55<br>**DukeMTMC-reID** R1 78.32 mAP 57.61|
|Image-Image Domain Adaptation with Preserved Self-Similarity and Domain-Dissimilarity for Person Re-identitication|Liang Zhegn<br>UTS|CVPR 2018|利用CycleGAN学习两个数据集之间转换，帮助在目标数据集上无监督行人重识别|CycleGAN|IDE|Euclidean distance|1. 用CycleGAN学习两个数据集之间的风格转换，同时用一个双路网络限制正样本对与负样本对的距离，进行交替优化<br>2. 正样本对用转换前后的图片。<br>3. 双路网络能保留转换前后人的身份信息|**DukeMTMC-reID** R1 46.4 mAP 26.2<br>**Market-1501** R1 57.7 mAP 26.7|
|A Unified Generative Adversarial Framework for Image Generation and Person Re-identification|Lingyu Duan<br>NLPR|MM 2018|针对reID的GAN框架|ResNet50|Euclidean Distance|-|**Market1501**<br>SQ R1 92.81 mAP 82.67<br>MQ R1 93.62 mAP 84.5<br>**DukeMTMC-reID** R1 88.67 mAP 79.32<br>**CUHK03**(100) R1 89.53<br>**CUHK01**(486) R1 84.79|

</details>

<details>
<summary>Part</summary>

### Part
| Name | Author | Conference & Year | Motivation |Feature|Metric|Detail|Dataset|
|:----:|:------:|:-----------------:|:-----------|:------:|:----:|:-----|:------|
|GLAD: Global-Local-Alignment Descriptor for Pedestrian Retrieval|Qi Tian<br>UTSA|MM 2017|基于pose提取特征，并视为检索问题，在匹配时预分类库图片以加速|GoogleNet|Euclidean Distance|1. 网络整体为分类网络<br>2. 先用pose检测模型提取头，脖子，以及臀部这四个关键点，将人体分为上中下三个部分<br>3对各个部分以及整体，各用一个支路提取特征，网络权值共享，每个支路又有自己单独的分类loss<br>4. 在检索时，先实现将库图片分成不同的group，并pca降维，取整个group的特征的平均作为整个group的表达，再进行检索，加快速度，用的特征是将四个通道输出的特征级联|**Market1501** SQ R 89.9 mAP 73.9<br>MQ R 81.5 mAP 61.2<br>**CUHK03**<br>manually 85.0<br>detected 82.2<br>**VIPeR** 54.8|
|Pose Invariant Embedding for Deep Person Re-identification [[pdf](https://arxiv.org/pdf/1701.07732.pdf)]|Liang Zheng<br>UTS|Arxiv 2017|为解决行人匹配时的误对齐问题，加入关键点信息|AlexNet or ResNet50|L2norm + Euclidean Distance|1. 用CPM提取pose,10个关键点<br>2. 用关键点设置特征提取框，框根据位置做相应的仿射变换，所以框有可能是斜着提取的,再将各部分拼一块组成一张图片，即PoseBox<br>3. 当关键点的自信值小于某个门限时，会加入一些随机扰动<br>4. 单路三支流，分别输入原始图像，PoseBox，各个特征点的自信值<br>5. 各支路提取的特征级联后经过一个全连接得到最后表达<br>6. 三个Loss，最后特征表达一个分类Loss，原始图特征一个分类Loss,PoseBox一个分类Loss|**Market1501**<br>SQ R 79.33 mAP 55.95<br>**CUHK03**<br>detected R 67.10 mAP 71.32<br>**VIPeR** 27.44|
|Pose-driven Deep Convolutional model for Person Re-identification|Qi Tain<br>UTSA|ICCV 2017|借助关键点与仿射变换网络，得到局部特征|GoogleNet修改版|Euclidean Distance|1. 头部，上身，四肢，共六部分<br>2. 局部特征与全局特征通过网络融合|**CUHK03** manually 88.7 detected 78.29<br>**Market1501**SQ R1 84.14 mAP 63.41<br>**VIPeR** 51.27|
|Pose-Normalized Image Generation for Person Re-identification [[pdf](https://arxiv.org/pdf/1712.02225.pdf)] [[code](https://github.com/yanweifu/PN_GAN)]|Tao Xiang, Xiangyang Xue<br>QMUL & Fudan University|Arxiv 2017.12|给定图片和期望的Pose，利用GAN合成基于Pose的图片|ResNet50|Euclidean Distance|1. 生成部分根据给定的姿势修改图片<br>2. 生成部分输入包括：预训练的属性预检测子预测的属性，原始图片与姿势图片的级联<br>3. 网络结构由两部分组成，对于给定的图片由A网络提取原始特征，B网络提取给定的典型姿势生成的图片的特征，最终特征由这两种特征融合而成，融合是element-wise maximum。网络A与B的结构相同，但是不共享权值。|**CUHK03** detected 92.66<br>**Market1501**<br>SQ R1 95.52 mAP 89.94<br>MQ R1 95.90 mAP 91.37<br>**VIPeR** 78.17<br>**DukeMTMC**R1 91.47 mAP 81.39<br>**CUHK01** 86.22|
|Beyond Part Models: Person Retrieval with Refined Part Pooling (and A Strong Convolutional Baseline) [[code](https://github.com/syfafterzy/PCB_RPP_for_reID)]|UTSA<br>Qi Tian|Arxiv 2018.01|1. 一个更好地基于part的baseline。2.part pooling策略,防止均分时太过粗糙|ResNet50|Cosine Distance|1. PCB：将提取的特征图T,每个位置特征为f,所有f均分为6个水平条带，每一个均值池化得到part表达g，分别经过一个全连接得到h，用h去训练分类器。<br>2. RPP:训练分类器，输入为f，输出为这个位置的特征属于哪一个条带，最终的G将不用均值池化，而是通过所有f的概率加权得到<br>3.PCB+RPP：标准训练PCB。然后固定参数，加入RPP并训练RPP。最后全部参数一起训练。<br>4. 提升输入图片的大小或者降低网络模型中降采样的操作，以增大T的空间尺寸有利于提升性能|**Market1501** SQ R1 93.8 mAP 81.6<br>**DukeMTMC-reID** SQ R1 83.3 mAP 69.2<br>**CUHK03** detected R1 63.7 mAP 57.5|
当用肢体关键点框出感兴趣区域后，随之而来的一个问题便是有一些标志性的物体会被排除在外，比如包，雨伞等等

</details>

<details>
<summary>Attribute</summary>

### Attribute
| Name | Author | Conference & Year | Motivation |Feature|Metric|Detecter|Detail|Dataset|
|:----:|:------:|:-----------------:|:-----------|:-----:|:----:|:------:|:-----|:------|
|Person Re-identification by Attributes| Shaogang Gong<br>QMUL|BMVC 2012|用属性辅助识别，标注了VIPeR数据集|Color Channels<br>Texture Filters(Schmid & Gabor)|低维特征用巴氏距离，属性特征用欧氏距离|SVM|1. 属性检测子都是在VIPeR上训练的，其他数据集上直接用训好的检测子<br>2. 属性是可以高度依赖于视角或者人的姿态<br>3. 标注VIPeR时，分为三个大类：前方，后方，侧面<br>4. 对每个属性训练相应的检测子时确保三个角度的正样本都有，因此检测子有视角不变性<br>5. 属性的加权是在各个数据集上单独做的<br>6. 除了各个属性距离要加权，最后的属性距离与各种低维特征间也要加权求和<br>7. 在加入属性后，Rank1，VIPeR上准确率降低了一点，iLIDS上提升了，在Rank5上都提升了<br>**问题** 定义的一些与视角敏感的属性，应该会有损性能吧，因为不同的视角下，虽是同一个人，但是此属性却一个正一个负|**VIPeR** 16.5<br>**iLIDS** 52.1|
|*Deep Attributes Driven Multi-camera Person Re-identification*|Qi Tian<br>Peking University|ECCV 2016|利用行人属性辅助行人重识别|AlexNet|Cosine Distance|AlexNet|1. 第一阶段，用一个带属性的独立数据集训练网络，并用该网络为目标数据集初始化属性标签<br>2. 第二阶段，基于属性的Triplet Loss,将属性与ID结合起来训练，让同一个人的属性相似，不同人的属性相差较远<br>3. 第三阶段，为目标数据集重新标定属性标签，将独立属性数据及与此相结合，用其微调属性预测网络|**VIPeR** 43.5<br>**PRID** 22.6<br>**GRID** 22.4|
|Attributes-Based Re-identification|Gong, Shaogang<br>Queen Mary Unifying of London|Springer London 2014|将属性与Re-ID结合，标注了PRID数据集|Color Channels<br>Texture Filters(Schmid & Gabor)|加权欧氏距离|LIBSVM and investigate Linear, RBF, X2 and Intersection kernels|1. 一些属性在数据集中有很多正样本，但有的属性只有少数正样本<br>2. 对于每一个属性，用所有的正样本训练，负样本用相同数量的剩余数据的欠抽样<br>3. 用低层次特征训练属性分类器，由此将高维特征映射到低维的语义属性空间<br>4. 判断距离时，要分别计算各个属性或者低层次特征的距离，再给每个都分配一个加权值,最后使用加权后的距离<br>5. 当人工标出Probe图片的属性去匹配时（gallery还是用检测器得到属性），效果没有用检测器的好，可能是因为虽然检测器再标库的属性时会引入误差，但是在标Probe时也会引入相同的误差|**PRID** 41.5<br>**VIPeR** 21.4|
|Pedestrian Attribute Recognition At Far Distance|Xiaoou Tang<br>CUHK|MM 2014|标了一个远距离下行人属性数据集，任务是预测行人属性|Color Channels<br>Texture Filters(Schmid & Gabor)|--|ikSVM<br>MRF with Gaussian kernel<br>MRF with random forest|1. 用 Markov Random Field(MRF) 探索邻近图片间的上下文关系<br>2. MRF能量函数由 Unary Cost 和 Pairwise Cost组成<br>3. unary cost 利用预测属性分类概率（由ikSVM学习）的log函数构成<br>4. 用随机森林去学习Pairwise Cost|**PETA** 71.1|
|Re-id: Hunting Attributes in the wild|Shaogang Gong<br>QMUL|BMVC 2014|从网络上爬取图片，用以训练属性检测子，以解决大数据集标注属性的问题|BoG(属性) + 低层特征|加权欧氏距离|LDA|1. 用其他文章提供的行人检测子框出行人，并删去一些不合适的图<br>2. 每张图片的元数据要先预处理，再得到 BoW 表达<br>3. 再用 self-tuning Spectral Clustering 聚成若干类，视为潜在的属性,并用来训练LDA获得属性分类器|**VIPeR** 17<br>**GRID** 22<br>**PRID** 4<br>**CUHK01** 9|
|Multi-Task Learning with Low Rank Attribute Embedding for Person Re-identification|Qi Tian<br>Unifying of Texas at San Antonio|ICCV 2015|将属性特征与低层次特征结合起来帮助行人重识别|Color Channels<br>Texture Filters(Schmid & Gabor)|欧式距离|PRID，VIPeR : binary SVMs<br>iLIDS,SAIVT-SoftBio : MRFr|1. 这里的Task指的是不同的摄像头<br>2. 属性之间是相关的，故用一个低秩矩阵Z将原属性映射到一个Embedding空间，可以将一些缺失的属性补全|**iLIDS** 43.0<br>**PRID** 18.0<br>**VIPeR** 42.3|
|Improving Person Re-identification by Attribute and Identity Learning|Liang Zheng<br>University of Technology Sydney|Arxiv 2017|主要研究属性标签如何在大规模学习问题上帮助Re-ID|--|--|--|这里的属性主要是与ID层面的属性，比如性别，年龄，而不是持续时间短的，或属于外界环境的属性，比如打电话，骑自行车|--|

* 属性的正负样本之间的不平衡，以及有的属性正样本太少

</details>

<details>
<summary>Dataset</summary>

## Dataset
| Name |Syncopate| Author | Conference & Year | Motivation |Label method|Video or Image|Cammera|
|:----:|:-------:|:------:|:-----------------:|:-----------|:----------:|:------------:|:-----:|
|Person Re-identification in the Wild [[code](https://github.com/liangzheng06/PRW-baseline)]|PRW|LIang Zheng<br>UTS|CVPR 2017|提供一个端到端的大数据集，将行人检测与匹配一起做|hand|image|6|
|*MARS: A Video Benchmark for Large-Scale Person Re-identification* [[pdf](https://pdfs.semanticscholar.org/c038/7e788a52f10bf35d4d50659cfa515d89fbec.pdf)] [[code](https://github.com/liangzheng06/MARS-evaluation)]|MARS| Qi Tian<br>Tsinghua University|ECCV 2016|基于视频的检测子检测的Re-ID数据集，<br>并阐述了在大数据集下，分类网络要比双路或者三路网络更好|detected|Video|6|
|LVreID: Person Re-Identification with Long Sequence Videos|LVreID|Qi Tian<br>Peking University|Arxiv 2017.12.20|1. 跨季节，从一月到五月，共四天，每天三个小时，分别是早上中午晚上。<br>2. 视频序列长，平均长度是200帧。<br>3. 用SPP对时间维度做处理，得到固定的时间维度，再用卷积层融合。|detected|Video|13|

</details>

<details>
<summary>Skimmed</summary>

## Skimmed
| Name | Author | Conference & Year | Motivation |Detail|
|:----:|:------:|:-----------------:|:-----------|:-----|
|Learning Bidirectional Temporal Cues for Video-based Person Re-identification [[pdf](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7954700)]|Xuanyu He|IEEE TCSVT|利用双向循环神经网络，在RNN-CNN基础上改进|**iLIDS** 55.3<br>**PRID** 72,8|
|Easy Identification from Better Constraints: Multi-Shot Person Re-Identification from Reference Constraints|Ying Wu<br>CASA|CVPR 2018|Metric Learning|**iLIDS** 42<br>**PRID** 70.9|
|Group Consistent Similarity Learning via Deep CRF for Person Re-Identification|Xiaogang Wang<br>CUHK|CVPR 2018|考虑gallery之间的相关性，对probe与gallery之间的相似性优化|**Market1501**SQ R1 93.5 mAP 81.6<br>**DukeMTMC** R1 84.9 mAP 69.5<br>**CUHK03**<br>labeld R1 90.2<br>detected R1 88.8|
</details>

<details>
<summary>Utils</summary>

Multi-shot: In the multi-shot experiments, we return the
average similarity between the probe person image and multiple gallery images of an certain individual.

## Module
* Pyramid Matching
* atrous convolution
* RNN
* SPP

</details>

<details>
<summary>Code</summary>

### Projects
* deep ReID [[code](https://github.com/KaiyangZhou/deep-person-reid)]
* Baseline Code (with bottleneck) for Person-reID (pytorch) [[code](https://github.com/teslacool/Person_reID_baseline_pytorch)]
* Open reid [[code](https://github.com/Cysu/open-reid)]
* caffe-PersonReID [[code](https://github.com/agjayant/caffe-Person-ReID)]

### Released
* A Discriminatively Learned CNN Embedding for Person Re-identification [[official](https://github.com/layumi/2016_person_re-ID)] [[github](https://github.com/D-X-Y/caffe-reid)]
* Unsupervised Person Re-identification: Clustering and Fine-tuning [[code](https://github.com/hehefan/Unsupervised-Person-Re-identification-Clustering-and-Fine-tuning)]
* Pedestrian Alignment Network for Large-scale Person Re-identification [[code](https://github.com/layumi/Pedestrian_Alignment)]
* A Pose-Sensitive Embedding for Person Re-Identification with Expanded Cross Neighborhood Re-Ranking [[code](https://github.com/pse-ecn/pose-sensitive-embedding)]
* Joint Detection and Identification Feature Learning for Person Search [[code](https://github.com/ShuangLI59/person_search)]

</details>

# <center>Expansion</center>

<details>
<summary>Neural Networks Architecture</summary>

## Neural Networks Architecture
| Name | Author | Conference & Year | Motivation |Detail|
|:----:|:------:|:-----------------:|:-----------|:-----|
|Densely Connected Convolutional Networks|Kilian Q. Weinberger<br>Cornell University|CVPR 2017 (best)|卷积层间密集连接，特征图重用|1. 网络可以很深，分为很多个block<br>2. 每个block由多个卷积层构成，每一层的特征图都会送到该block内它后面的所有卷积层<br>3. block内每一层的通道数不能太大，block之间用1x1卷积压缩通道数|
|Sequeeze-and-Excitation Networks|Jie Hu<br>Momenta|Arxiv 2017|对channels进行加权|1. 要处理的特征X<br>2. 先Global Average Pooling,得到C维特征<br>3. C维特征经过一层全连接，为降低参数数量，输出为 C/r 维，r为超参数<br>4. 经过relu，再经过一层全连接，输出C维<br>5. 对原特征各通道相乘加权，得到处理后的表达|
|Rethinking the Inception Architecture for Computer Vision [[pdf](https://arxiv.org/pdf/1512.00567.pdf)]|Jonathon Shlens<br>Google|CVPR 2016|降低计算量|1.  基于大滤波器尺寸分解卷积：分解到更小的卷积；空间分解为不对称卷积。<br>2. 利用辅助分类器，辅助分类器中含有BN或者dropout时主分类器效果会更好。辅助分类器起到正则化的作用。<br> 3. 有效的网格尺寸减少|

</details>


<details>
<summary>Interesting Work</summary>

## Interesting Work
| Name | Author | Conference & Year | Motivation |Detail|
|:----:|:------:|:-----------------:|:-----------|:-----|
|DeepFace: Closing the Gap to Human-Level Performance in Face Verification|Lior Worf<br>Tel Aviv University|CVPR 2014|联合对齐与表达操作|1. 用3D Face来对齐<br>2. 9层网络提特征|
|Deep Learning Face Representation by Joint Identification-Verification|Xiaoou Tang<br>CUHK|NIPS 2014|用multi-task加强特征学习|双路，每一路都有一个Softmax classification loss。两路联合有一个Contrastive loss。|
|Deep Learning Face Representation from Predicting 10000 Classes|Xiaoou Tang<br>CUHK|CVPR 2014|用网络提取高层次特征|最后的特征表达维度只有160维|
|Two-Stream Convolutional Networks for Action Recognition in Videos|Andrew Zisserman<br>Oxford|NIPS 2014|双路结构处理时空信息|网络一个支路输入图片另一个支路输入光流|
|*Recurrent Models of Visual Attention*|Koray Kavukcuoglu<br>Google DeepMind|NIPS 2014|每次只看图片的一小块，网络会自动寻找下一次观察的点|1. 主体为RNN，每次输入整个图片和观察点坐标<br>2. 每一步输出两个分支，一个分类，另一个预测下一个位置<br>3. 使用增强学习，每一步分类对了reward为1，否则为0|
|Large-scale Video Classification with Convolutional Neural Networks| Li FeiFei<br>Stanford University|CVPR 2014|利用多分辨率与漏斗状网络结构来更好的利用局部时空信息|1. 语境流：从低分辨率帧中学习特征<br>2. 中央流：从帧的中心部分的高分辨率区学习特征|
|FlowNet： Learning Optical Flow with Convolutional Networks|Vladimir Golkov<br>Technical University of Munich|ICCV 2015|用网络提取光流|通过一系列的卷积与反卷积操作|
|Deep Captioning with Multimodal Recurrent Neural Networks|Junhua Mao<br>UCLA|ICLR 2015|用多模型RNN去处理自然图片说明|1. 为语言和图片分别构建模型，然后融合两者的信息<br>2. RNN的每一步输入都是某一单词的语言模型的输出<br>3. 每一步的RNN输出，语言模型输出，图像模型输出三者分别通过三个矩阵投影到一个共同的空间，再元素级相加得到融合后的表达|
|*Learning Spatiotemporal Features with 3D Convolutional Networks*|Manohar Paluri<br>Facebook AI Research|ICCV 2015|3D卷积核去处理视频|3D卷积核能有效学习时间与空间特征|
|MatchNet: Unifying Feature and Metric Learning for Patch-Based Matching|Alexander C. Berg<br>University of North Carolina at Chapel Hill|CVPR 2015|块匹配与特征学习一起做|两个支路通过全连接融合为一路，全连接层则相当于距离度量|
|Deep Mutual Learning|Huchuan Lu<br>Dalian University of Technology, China|Arxiv 201706|两个网络相互学习|1. 两个网络都对同一个输入做预测，各有一个分类loss，同时两者之间有一个二者输出的概率分布的KL距离的loss。<br>2. 优化时，交替优化，直至收敛|
|Online Video Deblurring via Dynamic Temporal Blending Network|Micheal Hirsch<br>Seoul National University|CVPR 2017|图片去噪|1. 采用循环结构<br>2. Encoder + Dynamic blending + Decoder|
|Coherent Online Video Style Transfer|Gang Hua<br>MSRA|ICCV 2017|视频风格转换|1. 相邻两帧之间提取光流<br>2. 每一帧用encoder获得特征，用光流对前一帧wrap。利用wrap之后的结果与当前帧的特征的差值学习mask，用mask更新特征，最后对当前帧特征解码|
|Temporal Segment Networks: Towards Good Practices for Deep Action Recognition|Xiaoou Tang<br>CUHK|ECCV 2016|长范围时间结构建模|TSN使用从整个视频中稀疏地采样一系列短片段，每个片段都将给出其本身对于行为类别的初步预测，从这些片段的“共识”来得到视频级的预测结果。|

</details>


<details>
<summary>Pose Estimation</summary>

## Pose Estimation
| Name | Author | Conference & Year | Motivation |Detail|
|:----:|:------:|:-----------------:|:-----------|:-----|
|Convolutional Pose Machines| Yaser Sheikh<br>CMU|CVPR 2016|用很深的网络不断调整预测|1. 整体类似RNN,分为很多步<br>2. 第一步输入是用七层网络提取的各个关节点的自信图<br>3. 之后的每个阶段是一样的model，是5层卷积网，输入为前一阶段的自信图以及对原始图提取的特征<br>4. 每一阶段都会额外增加一个loss,是预测与真实自信图的误差，用以减轻梯度消失问题|
|Thin-Slicing Network: A Deep Structured Model for Pose Estimation in Videos|Otmar Hilliges<br>ETH Zurich|CVPR 2017|能端到端的训练，能同时表达交界处以及他们之间的时空关系|1. 先训练CPM，再与后面的网络结合起来优化<br>2. 对于前后帧，用弹簧能量模型定义变形损失|
|Realtime Multi-Person 2D Pose Estimation using Part Affinity Fileds|Yaser Sheikh<br>CMU|CVPR 2017|定义新的表达来更好的处理多人关节点估计|1. PAF是同一个人两个相邻关节点之间的向量场，有方向<br>2. 网络分为两路，一路用CPM预测自信图，另一路预测PAF<br>3.PAF主要解决多人情况下关节点的划分问题|

</details>

<!--

<details>
<summary>Super-Resolution</summary>

## Super-Resolution
| Name | Author | Conference & Year | Motivation |Detail|
|:----:|:------:|:-----------------:|:-----------|:-----|
|Image Super-Resolution Using Deep Convolutional Networks|Xiaoou Tang<br>CUHK|2016 TPAMI|用CNN处理超分辨|三层CNN结构，先将低分辨率图片上采样到期望的大小，然后经过三个卷积层，中间无下采样，输出的为处理的高分辨率图片，与label的差值平方和为loss|
|Real-Time Single Image and Video Super-Resolution Using an Efficient Sub-Pixel Convolutional Neural Network|Wezhe Shi<br>Twitter|CVPR 2016|将upscale放到最后一层，降低了计算量|输入为低分辨率图片，在最后一层，通道数为原图通道数的降采样比例的平方倍，这样相当于用不同的通道去学upscale时不同位置的值，将结果重排一下就是高分辨率图了。|
|Perceptual Losses for Real-Time Style Transfer and Super-Resolution|Li FeiFei|ECCV 2016|不使用per-pixel的loss|不直接要求重建的高清图片与真实高清图片的像素相似，而是要求用网络提取的特征相似，这样能获得更好的视觉上的提升|
|Frame-Recurrent Video Super-Resolution|Matthew Brown<br> Google|CVPR 2018|不使用划窗，降低计算量|1. 前一帧与当前帧级联学习光流。<br>2. 利用光流对前一帧的预测的高分辨率图片做warping(即利用光流的值得到前一帧像素应该向何处偏移)。<br>3. 利用重新估算的当前帧高分辨率图片结合当前帧得到最后的估计|

</details>
-->


<details>
<summary>Machine Learning</summary>

## Machine Learning
| Name | Author | Conference & Year | Motivation |Detail|
|:----:|:------:|:-----------------:|:-----------|:-----|
|Local Fisher Discriminant Analysis for Supervised Dimensionality Reduction|Masashi Sugiyama<br>Tokyo Institute pf Technology|ICML 2006|传统Fisher Discriminant分析对于从若干独立簇中的类的采样没有区分性|考虑数据的内部结构，将FDA于LPP结合|
|A Spatial-Temporal Descriptor Based on 3D-Gradients|Cordelia Schmid<br>INRIA Grenoble|BMVC 2008|基于视频的时空描述子|将一个cell中的累加梯度值量化到中二十面体的面中心方向|
|*Large Scale Metric Learning from Equivalence Constraints*|Horst Bischof<br>Graz University of Technology|CVPR 2012|从统计推理的角度学习距离度量，不依赖于复杂的算法|利用最大似然估计得到马氏距离度量矩阵|
|EpicFlow: Edge-Preserving Interpolation of Correspondences for Optical Flow|Cordelia Schmid<br>Inria|CVPR 2015|更好地处理冲突与运动边界的光流估计|1. 从稀疏匹配的边缘保留插值的密匹配<br>2. 用密匹配初始化的方差能量最小化|

</details>



<details>
<summary>Links</summary>

# Links
* [KaiyangZhou](https://github.com/KaiyangZhou/deep-person-reid)
* [fangchengjin](http://blog.fangchengjin.cn/reid-overview.html)
* [handong](https://handong1587.github.io) 的 [Summary](https://github.com/handong1587/handong1587.github.io/blob/master/_posts/deep_learning/2015-10-09-re-id.md)
* [数据集总结](http://robustsystems.coe.neu.edu/sites/robustsystems.coe.neu.edu/files/systems/projectpages/reiddataset.html)
* [State of the art on the MARS dataset](http://www.liangzheng.com.cn/Project/state_of_the_art_mars.html)
* [新的总结](https://docs.google.com/spreadsheets/d/16bpvB9ZVBkqr-H8pG9cSeFrsgpVjfm7J2WZI3A5M53U/edit?usp=sharing)

</details>


<div align="right">Updated Date: 2018/12/17</div>
