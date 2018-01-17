# Image
| Name | Author | Conference & Year | Motivation |Feature|Metric|Detail|CUHK03|Dataset|
|:----:|:------:|:-----------------:|:-----------|:-----:|:----:|:-----|:----:|:------|
|Viewpoint Invariant Pedestrian Recognition with an Ensemble of Localized Features|Hai Tao<br>University of California, Santa Cruz|ECCV 2008|定义了一个特征空间，让机器学习算法去寻找最好的表达|Color Channels<br>Texture Filters(Schmid & Gabor)<br>Feature Regions<br>Feature Binning|L1 Distance|使用了AdaBoost|--|**VIPeR** 12|
|DeepReID: Deep Filter Pairing Neural Network for Person Re-identification| Xiaogang Wang<br>CUHK|CVPR 2014|1. 学习到的特征对能编码光照变化<br>2. 提出一个新的数据集|CNN|Softmax Score|网络输出为二分类，直接判断两者是否为同一个人|manually 20.65<br>detected 19.89|**CUHK01**(100 testID) 27.87|
|Person Re-identification with Discriminatively Trained Viewpoint Invariant Dictionaries|Richard J. Radke<br>RPI|ICCV 2015|学习一个字典，能同时学习 Probe 和 Gallery 的表达|Color Histograms<br>Schmid & Gabor Filters|Euclidean Distance|1. 用LFDA为特征降维<br>2. 训练时，在特征向量的稀疏表达上加上明确的限制去训练一个字典<br>3. 在测试时，从库图片中找出与榻侧图片，两者的稀疏表达在欧氏距离最近的一个|--|**PRID** 40.6<br>**iLIDS** 25.9|
|*An Improved Deep Learning Architecture for Person Re-identification*|Tim K. Marks<br>MERL|CVPR 2015|新的块匹配方法|CNN|Softmax Score|1. probe某区域块与同位置的邻域内gallery块皆做差分<br>2. 这样对于错位有一定的容忍性|manually 54.74<br>detected 44.96|**CUHK01** (100) 65 (486) 47.53<br>**VIPeR** 34.81|
|Deep Feature Learning with Relative Distance Comparison for Person Re-identification|Hongyang Chao<br>Sun Yat-sen University|PR 2015|基于深度学习的三路网络框架|CNN|Euclidean Distance|1. 在反向传播上做了优化，减少重复计算<br>2. 提供了构建Triplet三元组的方法|--|**iLIDS** 52.1<br> **VIPeR** 40.5|
|Learning Deep Feature Representations with Domain Guided Dropout for Person Re-identification|Xiaogang Wang<br>CUHK|CVPR 2016|当在多个数据集上学习时，会发现有一些神经元跨域表达而一些神经元只会对指定的域有效|inception|Euclidean Distance|通过比较某个神经元被置零前后loss的变化得到其是否为域敏感|all 75.3|**CUHK01**(485 testID) 66.6<br>**PRID** 64|
|Deep Neural Networks with Inexact Matching for Person Re-identification|Anurag Mittal<br>IITM|NIPS 2016|用相关系数改进块相似性度量|CNN|Softmax Score|对于Probe图片，将区域块与Gallery相应位置整个条带上的块做相关性系数计算|manually 72.43<br>detected 72.04|**CUHK01** (100) 81.23 (486) 65.04<br>**GRID** 19.20|
|*Gated Siamese Convolutional Neural Network Architecture for Huam Re-identification*|Gang Wang<br>Nanyang Technology University|ECCV 2016|提出一个门函数，通过对比图片的中层特征，能选择性增强精细的局部模式|CNN|Euclidean Distance|1. 双路结构，信息向上传播时会有门结构对特征进行选择<br>2. 门结构是用两者的特征差，借助高斯激活函数作为门值|detected SQ 61.8 MQ 68.1|**Market 1501**<br>SQ rank 65.88 map 39.55<br>MQ rank 76.4 map 48.45<br>**VIPeR** 37.8|
|Semantics-Aware Deep Correspondence Structure Learning for Robust Person Re-identification|Zhongfei Zhang<br>Zhejiang University|IJCAL 2016|希望得到语义层面的图像表达|改编的GoogleNet|Softmax Score|1. 双路融合为一路<br>2. 融合时对两者特征图分别构建金字塔特征图<br>3. 两者同尺度的特征取Max操作<br>4. 网络最后为二分类|manually 80.2|**CUHK01**<br>(100 testID) 89.60<br>(486 testID) 76.54<br>**VIPeR**(316 testID) 44.62|
|Joint Learning of Single-image and Cross-image Representations for Person Re-identification|Lei Zhang<br>Sun Yat-sen University|CVPR 2016|将分类与验证相结合|三层CNN|Euclidean Distance+RankSVM|1. 可以应用到双路网络与三路网络|detected 52.17|**CUHK01**(100 testID) 71.80<br>**VIPeR** 35.76|
|Person Re-identification by Multi-Channel Parts-Based CNN with Improved Triplet Loss Function|Nanning Zheng<br>Xi'an JiaoTong University|CVPR 2016|1. 多通道学习整个身体与局部肢体<br>2. 用新的Triplet loss 去加强学习效果|三层CNN|Euclidean Distance|1. Conv1对整个图提特征<br>2. 沿高度将Conv1分为四部分，分别用四个支路去学习局部特征<br>3. 再训练一个支路对Conv1直接学习<br>4. 五个支路输出特征级联<br>5. 不仅要求正样本对距离小于负样本对，还要求正样本对距离小于某个值|--|**iLIDS** 60.4<br>**PRID** 22.0<br>**VIPeR** 47.8<br>**CUHK01**(486 testID) 53.7|
|A siamese Long Short-Term Memory Architecture for Human Re-identification|Gang Wang<br>University of Sydney|ECCV 2016|通过上下文信息增强区分局部特征的能力|LOMO|Euclidean Distance|沿高度分为多个水平条带，并依次送入LSTM聚合|detected 57.3|**Market 1501**<br>MQ rank 61.6 map 35.3<br>**VIPeR** 42.4|
|End-to-End Comparative Attention Networks for Person Re-identification|Shucheng Yan<br>|TIP 2016|学习到注意力模型|AlexNet VGG|Euclidean Distance|CNN提取特征，再送入LSTM，用LSTM每一步的h学习mask矩阵，利用mask矩阵与原特征相乘得到有注意力的结果|manually 77.6<br>detected 69.2|**CUHK01** (100 testID) 87.2<br>**Market 1501**<br>SQ rank 60.3 map 35.9<br>MQ rank 72.1 map 47.9<br>**VIPeR** 54.1|
|Multi-scale Triplet CNN for Person Re-identification|Tao Mei<br>MSRA|MM 2016|结合多尺度信息|AlexNet|Euclidean Distance|1. 整体为三路网络，修改的Triplet Loss外加正样本对的距离Loss<br>2. 多尺度信息体现在将原始图片下采样为两种尺度，加上原尺寸，共三种尺寸，分别训三个AlexNet，再融合|--|**Market 1501**<br>SQ rank 45.1<br>MQ 55.4|
|Spindle Net: Person Re-identification with Human Body Region Guided Feature Decomposition and Fusion|Xiaoou Tang<br>CUHK|CVPR 2017|利用行人的身体关键点辅助识别|inception|Euclidean Distance|1. 将人的肢体分为不同的粒度去提取特征，三个大区域，四个小区域<br>2. 先用CPM对图片提取关节点，再根据关节点位置框出7个区域<br> 3. 在提取特征时考虑了不同粒度，融合不同粒度时也有先后之分|all 88.5|**CUHK01**(485 testID) 79.9<br>**PRID** 67<br>**VIPeR** 53.8<br>**3DPeS** 62.1<br>**iLIDS** 66.3<br>**Market 1501** SQ rank 76.9|
|Learning Deep Context-aware Features over Body and Latent Parts for Person Re-identification|Kaiqihuang<br>CRIPAC & NLPR, CASIA|CVPR 2017|学习更好的基于整个身体和局部身体的特征|四层CNN|Euclidean Distance|1. 用不同膨胀率的卷积核构建类inception结构，可得到不同大小的感受野<br>2. 用google的STN网络学习抠图，得到身体划分，划分为三个部分<br>3. 整体与局部的特征级联的到最后的表达|manually 74.21<br>detected 67.99|**Market 1501**<br>SQ rank 80.31 map 57.53<br>MQ rank 86.79 map 66.7<br>**MARS** SQ 71.77 MQ 83.03|
|Beyond Triplet Loss: a Deep Quadruplet Network for Person Re-identification|Kaiqi Huang<br>CRIPAC&NLPR,CASIA|CVPR 2017|四路网络+基于阈值的hard negative mining|CNN|Softmax Score|1. 测试时相当于二分类<br>2. 相对于三路网络增加了负样本与负样本的限制|manually 75.53|**CUHK01**<br>(486 testID) 62.55<br>(100 testID) 81<br>**VIPeR** 49.05|
|*A Multi-task Deep Network for Person Re-identification*|Kaiqihuang<br>CRIPAC & NLPR, CASIA|AAAI 2017|多任务框架，二分类模型与排序模型同时做，同时也考虑了跨数据集的半监督学习|CNN|Softmax Score|主体为三路网络，在其基础上，正对与负对也被用来训练一个二分类分支|manually 74.68|**CUHK01** (100) 78.5 (486) 59.67<br>**VIPeR** 47.47<br>**iLIDS** 58.38<br>**PRID** 31|
|Point to Set Similarity Based Deep Feature Learning for Person Re-identification|Nanning Zheng<br> Xi'an Jiaotong University|CVPR 2017|用点对集合来作为相似性度量|CNN|Euclidean Distance|1. P2S改进的Triplet Loss + Contrastive Loss<br>2. 身体局部与整体的不同尺度学习|--|**3DPeS** 71.16<br>**CUHK01** 77.34<br>**PRID** 70.71<br>**Market 1501** SQ rank 70.72 map 44.27<br>MQ rank 85.78 map 55.73|
|Consistent-Aware Deep Learning for Person Re-identification in a Cammera Network|Jie Zhou<br>Tsinghua University|CVPR 2017|最大化整个网络的人物匹配，而不是每次只关注一个图片对或几个图片对|训练好的Domain Guide Model|Cosine Distance|1. 用网络提取的特征计算余弦距离，构建相似性矩阵C，行为一个摄像头下的人，列为另一个摄像头下的人<br>2. 构建C相对应的邻接矩阵，同一个人则为1否则为0<br>3. 训练时要最大化C与H的点点相乘，并使H的预测值与真实值误差尽可能小<br>4. C与H是交替优化的|--|**Market 1501**<br>SQ rank 73.84 map 47.11<br>MQ rank 80.85 map 55.58|
|Person Re-identification by Deep Joint Learning of Multi-Loss Classification|Shaogang Gong<br>Queen Mary University of London|IJCAI 2017|局部特征与整体特征一起学习|改编的ResNet|Euclidean Distance|1. 单路网络，作为多分类任务<br>2. 先在ImageNet上预训练，再在目标数据集上训练<br>3. 在两层公用结构之后便分为两部分，一部分是整体特征学习，另一部分是四个水平条带对应学习局部特征<br>5. 这两个部分各自有一个分类loss，并不融合,并用实验表明不融合更好<br>6. 测试时将两部分特征级联作为最后表达|manually 83.2<br>detected 80.6|**Market 1501**<br>SQ ( rank 85.1 ) ( map 65.5 )<br>MQ ( rank 89.7 ) ( map 74.5 )<br>**CUHK01**<br>(100) SQ 87.0 MQ 91.2 <br>(486) SQ 69.8 MQ 76.7<br>**VIPeR** 50.2<br>**GRID** 37.5|
|*Deeply-Learned Part-Aligned Representations for Person Re-identification* [[code](https://github.com/zlmzju/part_reid)]|Jingdong Wang<br>MSRA|ICCV 2017|学习对特征图加权，以此选出特征图中较为显著的区域|GoogleNet|Euclidean Distance|1. 用GoogleNet提取的特征 HxWxC,用一个卷积层学习k个HxW的特征图:M<br>2. M 可以视为mask,即为对原特征的不同部分的响应，用每个HxW响应对原HxWxC加权得到新的k个HxWxC<br>对于新的特征图，经过Global Average Pooling和全连接层得到固定长度表达|manually 85.4<br>detected 81.6|**Market 1501** SQ rank 81.0 map 63.4<br>**CUHK01**<br>(100) 88.5<br>(486) 75<br>**VIPeR** 48.7|
|Multi-scale Deep Learning Architectures for Person Re-identification|Xiangyang Xue<br>Fudan University|ICCV 2017|利用多尺度特征来充分利用图片的细节信息，同时在级联多尺度信息时，利用加权做了选择筛选|GoogleNet修改版|Softmax Score|1. 整体为双路网路，两个分支各有一个分类Loss，中间是将两路的特征相减后取平方值，经一个全连接层得到最后表达，再接二分类。<br>2. 多尺度信息是利用不同大小的卷积核实现的，整体结构类似GoogleNet<br>3. 对于最后的特征，每个channel都学习一个对应的加权值。加权值是两个支路共享的,直接学习，未加先验和限制。<br>4. **从作者的实验中可以看出多尺度网络对于detected的图片效果依旧很好，可能图中只有小部分是人的，但是因为多尺度而能被网络注意到**|manually 76.87<br>detected 75.64|**CUHK01** (100)79.01<br>**VIPeR** 43.03|
|AlignedReID: Surpassing Human-Level Performance in Person Re-identification|Jian Sun<br>Face++|Arxiv 2017|用局部特征去帮助全局特征的学习|Resnet50-X|Euclidean Distance|1. triplet loss(in denfense of the triplet loss for ReID)<br>2. 局部特征是最后特征图水平方向GAP。全局特征是水平垂直都GAP<br>3. 比较两者局部特征使用了动态规划<br> 4. 训练时loss由全局特征距离与局部特征距离共同组成<br>5. 用两个这种网络协同学习<br>6. 测试时只是用全局特征算欧氏距离|manually 96.1|**Market 1501** SQ rank 94.0 map 91.2<br>**MARS** SQ rank 87.5 map 85.6<br>**CUHK-SYSU** rank 95.3 map 93.7|
|[Deep Siamese Network with Multi-level Similarity Perception for Person Re-identification](https://dl.acm.org/ft_gateway.cfm?id=3123452&ftid=1915024&dwn=1&CFID=851513252&CFTOKEN=41197890)|Yaowu Chen, Xian-Sheng Hua<br>Zhejiang University, Alibaba|MM 2017|在low-level上也加入对匹配的优化，组成多层次的优化网络|inception|Euclidean Distance + L2norm|1. 在第一个卷积层之后加入对低层次特征块的匹配的优化，用的结构主要是NIPS16那篇求相关性系数的方法。<br>2. 对正负样本块的相关性系数，设置阈值，做置零操作，主要是防止噪声块以及无区分性块的影响<br>3. 优化目标是使正样本先关系数最大化吗，负样本相关系数最小化<br>4. 前期不加low-level的匹配优化，训练稳定之后再加入low-level的优化。<be>5. 测试的时候并不需要low-level优化网络<br>6. **只对anchor图片计算分类损失**|manually 85.7<br>detected 83.6|**CUHK01** (100)79.3 (486)63.7<br>**Market 1501** SQ rank 81.9 map 63.6|
---

# Video
| Name | Author | Conference & Year | Motivation |Feature|Fusion|Metric|Detail|iLIDS|PRID|MARS|
|:----:|:------:|:-----------------:|:-----------|:-----:|:----:|:----:|:-----|:---:|:--:|:--:|
|Person Re-identification by Video Ranking|Shenjing Wang<br>Queen Mary University of London|ECCV 2014|1. 能从有噪声的帧序列中选出关键帧<br> 2. 学习一个视频排序函数|HOG3D|不融合，放在特征池中，供比较.|1. 学习一个矩阵，矩阵与两人特征差的乘即代表距离<br>2. 将两人的特征两两比较距离，最大的距离代表最后的距离|1. 只取图片的下半部分，定义能量函数FEP，能量值随帧变化<br> 2. 对每个图，在极大值与极小值点前后取共10帧<br> |28.9|23.3|--|
|Sparse Re-ID: Block Sparsity for Person Re-identification|Richard J. Radke<br>RPI|CVPR 2015|Probe图片的特征向量可以近似看成<br>处于Gallery图片特征向量所处的embedding space|Color Histograms<br>Schmid & Gabor Filters|级联构成字典的一部分|Euclidean Distance|构建一个字典|24.9|35.1|---|
|A Spatio-temporal Appearance Representation for <br>Video-based Pedestrian Re-identification|Rui Huang<br>Shandong University & UCAS|ICCV 2015|1. 处理时间空间对齐问题 <br>2. 空间上按身体部位划分为不同的块<br>3. 时间上用FEP|Fiser vector|1. 空间上6部分特征级联得到帧表达<br>2. 时间上级联得到视频表达|最近邻分类器|1. 用傅里叶变换对FEP去噪 <br>2. 空间上按头，四肢，上身，将身体分为6个部分|44.3|64.1|--|
|Deep Recurrent Convolutional Networks for Video-based <br>Person Re-identification: An End-to-End Approach|Chunhua Shen<br>The University of Adelaide|Arxiv 2016|同时学习时间空间特征和相似性矩阵|四层卷积网络|GRU+average pooling|Euclidean Distance|GRU中用卷积操作代替了全连接层|42.6|49.8|--|
|Top-push Video-based Person Re-identification|Weishi Zheng<br>Sun Yat-sen University|CVPR 2016|不同的人有相似的表现而引发类间距离较小|HOG3D+color histograms+LBP|级联|马氏距离|学习马氏距离的矩阵M|56.33|56.74|--|
|Person Re-identification by Exploiting <br>Spatio-temporal Cues and Multi-view Metric Learning|Yuanyan Wang<br>Bejing Forestry University|IEEE SRL 2016|提出新的时空特征及匹配方法|从标准化的光流能量图中提取LBP|级联|马氏距离|优化马氏距离中的W|69.13|66.78|--|
|Person Re-identification via Recurrent Feature Aggregation|Xiaokang Yang<br>Shanghai Jioa Tong University|ECCV 2016|用LSTM融合时间信息|LBP+HSV+lab color channels|LSTM融合后再级联各时间输出|RankSVM|对噪声鲁棒性强|49.3|64.1|--|
|*Recurrent Convolutional Network for Video-based Person Re-identification* [[code](https://github.com/niallmcl/Recurrent-Convolutional-Video-ReID)]|Paul Miller<br>Queen's University Belfast|CVPR 2016|利用CNN提取空间特征，RNN提取空间特征|CNN|RNN + average pooling|Euclidean Distance|Softmax Loss + Contrastive Loss|58|70|Rank1 40|
|Video-based Person Re-identification with Accumulative Motion Context|JiaShi Feng<br>Hefei University of Technology|Arxiv 2017|用网络学习光流，并整合到网络中|CNN|RNN+average pooling|Euclidean Distance|1. 先用光流训练一个网络，让其能预测光流<br>2. 将光流网络加入到原网络中一起使用|65.3|78|--|
|Learning Compact Appearance Representation for Video-based Person Re-identification|Kan Liu<br>Shandong University|Arxiv 2017.02|从若干帧中提取特征而不是使用整个视频|五层卷积网络|Max Pooling|Euclidean Distance|1. 利用对于不同视频段提取到的特征，可以得到两个人之间的平均距离和最小距离<br>2. FEP选取关键帧|60.4|83.3|--|
|See the Forest for the Trees: Joint Spatial and Temporal <br>Recurrent Neural Networks for Video-based Person Re-identification|Tieniu Tan<br>UCAS,CASIA,CEBSIT|CVPR 2017|能挑出关键帧并充分利用环境信息|CaffeNet|TAM+SRM|1. TAM输出特征间的标准化的欧氏距离<br>2.SRM输出的相似概率<br>3. 两个相似性度量的加权和 |1.时间循环网络对两个人各时间空间特征级联后的差值的六个方向用RNNN聚合，最后二分类，得到相似概率 <br>2. 时间上，每一步都接收所有时间的特征，学习加权值，得到特征的加权和，并将其送入RNN得到此时的表达，最终表达是各时间特征均值<br>3. 整体结构为三路与双路的结合|55.2|79.4|Rank1 70.6<br>Map 50.7|
|*Quality Aware Network for Set to Set Recognition* [[code](https://github.com/sciencefans/Quality-Aware-Network)]|Wanli Ouyang<br>University of Sydney|CVPR 2017|能自动学到图片的质量并用以加权图片特征|GoogleNet|通过学习到的质量分数加权|Euclidean Distance|代码中的升级版本<br>1. 三路网络，Triplet Loss,每一路又有一个分类Loss,正样本对又构建Contrastive loss(相当于只有正样本情况)<br>2. 对于每一个支路，都由GoogleNet组成，其后便是分类loss。每个支路中还有一个QAN网络，用于产生质量分数<br>3. QAN是两层卷积网络加全连接层，全连接输出维度为3，结构CPCPF，直接由原始图片数据学得<br>4. GoogleNet中间特征中沿高度均分得到三个特征，每个特征再均值池化压缩h维度。每个支路的QAN输出的3个数值标准化后分别对其加权<br>5. 加权后的特征经过L2 Norm便得到最后表达，进入Triplet Loss与Contrastive Loss|68.0|90.3|--|
|Jointly Attentive Spatial-Temporal Pooling Networks for Video-based Person Re-identification [[code](https://github.com/shuangjiexu/Spatial-Temporal-Pooling-Networks-ReID)]|Pan Zhou<br>Huazhong University of Science and Technology|ICCV 2017|在空间上与时间上都是注意力模型|三层CNN|RNN+注意力时间池化|Euclidean Distance|1. 双路结构，分类loss+Contrastive Loss<br>2. 对每一个支路，输入为原始图片加光流，对于每一帧的特征用SPP得到不同尺度的特征并级联，得到单帧表达<br>3. 将每一帧的表达依次送入RNN，每一步的输出为每一帧的最终表达<br>4. 利用注意力模型得到每一帧的加权值，利用加权求和得到视频表达|62|77|Rank1 44|
|A Two Stream Siamese Convolutional Neural Network For Person Re-identification|Dahjung Chuang<br>Purdue|ICCV 2017|将光流与RGB分开，分别在两个Siamese网络中|RNN+注意力时间池化|光流与RGB的Euclidean Distance|3层CNN|在RNN-ReID结构上，用两个相同结构的Siamese网络，分别提取RGB与光流中的特征，loss与特征是两者的加权|60|78|--|
|Region-based Quality Estimation Network for Large-scale Person Re-identification|Shaofan Cai<br>SenseTime|Arxiv 2017.11|借助关键点检测，基于区域的质量估计，并提出新的视频数据集|GoogleNet|Region-based quality|Cosine Distance|1. 之前的数据集因为检测或跟踪失败而导致清洁度太低，人工标注的又对齐的太好<br>2. 新数据集特点：590000张图片，检测子检测，场景拥挤，年龄分布大<br>3. 用CPM检测关键点，产生上中下三个框，基于框预测三个框的质量分数<br>4. 对所有帧的同一个框的质量分数L1标准化，求特征加权和，最后级联三个框的特征|76.1|92.4|Rank1 77.83 Map 71.14|
|[Deep Cross-Modality Alignmeant for Nulti-Shot Person Re-Identification](https://dl.acm.org/ft_gateway.cfm?id=3123324&ftid=1914667&dwn=1&CFID=1028089922&CFTOKEN=46445411)|Xiaokang Yang<br>Shanghai Jiao Tong University|MM 2017|
---

# Metric
| Name | Author | Conference & Year | Motivation |Feature|Metric|Detail|Dataset|
|:----:|:------:|:-----------------:|:-----------|:-----:|:----:|:-----|:------|
|Relaxed Pairwise Learned Metric for Person Re-identification|Horst Bischof<br>Graz University of Technology|ECCV 2012|从不同摄像头下的采样中学习矩阵，注重摄像头之间的变换|Color + LBP|马氏距离|在距离度量学习前先对特征进行PCA降维|**VIPeR** 27<br>**PRID** 15|
|Deep Metric Learning for Practical Person Re-identification|Stan Z. Li<br> NLPR, CASIA|ICPR 2014|提出一个更通用的方式去从原始图片上学习距离度量|CNN|Cosine + Binomial Distance|1. 双路网络，当做二分类，输出相似度<br>2. 每一支路分为三个小支路，分别输入图片的上中下三部分，最后级联再经全连接得到最后表达|**VIPeR** 34.4<br>**PRID** 17.9|
|Multi-shot Re-identification with Random-Projection-Based Random Forests|Richard J. Radke<br>RPI|WACV 2015|基于视频的距离度量学习|Color Histograms<br>Schmid & Gabor Filters|随机森林输出的相似性值|1. 通过随机投影对图片的特征向量降维<br>2. 在投影出的亚空间中，基于对层面训练随机森林<br>3. 随机投影增加了随机森林的分类多样性<br>4. 融合多个视频帧的方法：计算两者所有图片对的相似性值，再取平均|**3DPeS** 43(估计)|
|*Person Re-identification by Local Maximal Occurrence Representation and Metric Learning* [[code](https://github.com/IrvingShu/XQDA)]|Stan Z. Li<br>NLPR|CVPR 2015|新的手工特征和距离学习方法|SILTP histograms<br>Color Bins|在kissme的基础上加入了低维投影|1. 选取特征时有一系列的子窗口，并对窗口特征做max pooling<br>为了获得多尺度信息，用了有三种大小的图片金字塔|**CUHK03** manually 52.20 detected 46.25<br>**VIPeR** 40.00<br>**GRID** 16.56|
|*Embedding Deep Metric for Person Re-identification: A Study Against Large Variations*|Stan Z. Li<br>NLPR|ECCV 2016|提供了新的正样本对采集方法以及距离度量的方法|CNN|Euclidean Distance|1. 构成正样本对时，应选取与样本距离小的一些图片，距离太大的样本对会有害训练<br>2. 用全连接层将马氏距离的学习转化为欧氏距离|**CUHK03** manually 61.32 detected 52.09<br>**CUHK01** (100) 86.59<br>**VIPeR** 40.91|
|Re-ranking Person Re-identification with k-reciprocal Encoding [[code](https://github.com/zhunzhong07/person-re-ranking)]|Shaozi Li<br>Xiamen University|CVPR 2017|对排序得到的结果再次处理重排|CaffeNet|Jaccard Distance + L2 Distance|1. 利用近邻关系组成集合，生成Jaccard Distance<br>2. 最后的距离是两种距离的加权和|**Market 1501** SQ 77.11<br>**CUHK03** detected 61.6 manually 58.5<br>**MARS** 73.94<br>**PRW** 52.54|
|Scalable Person Re-identification on Supervised Smoothed Manifold|Qi Tian<br>UTSA|CVPR 2017|对获得的相似性矩阵再处理，获得平滑的流形相似性度量|LOMO,GOG,ELF6|欧氏距离及其他相似性度量方式|1. 通过转移矩阵不断迭代<br>2. 可以和其他距离度量方法协同使用，先提取特征，再进行距离度量学习，然后用这个方法优化相似性矩阵，得到最后的结果|**CUHK03**SQ manually 76.6 detected 72.7<br>**VIPeR** 53.73<br>**PRID450S** 72.98|
---
# Loss
| Name | Author | Conference & Year | Motivation |Feature|Metric|loss|Detail|Dataset|
|:----:|:------:|:-----------------:|:-----------|:-----:|:----:|:---|:-----|:------|
|Margin Sample Mining Loss: A Deep Learning Based Method for Person Re-identification|Chi Zhang<br>Megvii|Arxiv 2017.10|限制最大的正样本对距离小于最小的负样本对距离|Resnet50-X|标准化的欧式距离|对于整个batch，找到最大的正样本对距离，和最小的副样本对距离，让他们距离超过margin|输入为P个人，每人K个图片|**CUHK03** manually 87.5<br>**Market 1501**<br>SQ rank 88.9 map 76.7<br>**MARS**<br>SQ rank 84.2 map 74.6|
|In Defense of the Triplet Loss for Person Re-identification [[code](https://github.com/VisualComputingInstitute/triplet-reid)]|Bastian Leibe<br>RWTH Aachen University|Arxiv 201711|在一个batch中，寻找最困难的正负样本组成三元组|Resnet50 or LuNet|欧氏距离|1. 一个batch中有P个人，每个人K张图片<br>2. 对每个人，每一张图片，在batch内寻找最困难的正样本与负样本计算triplet loss<br>3. 最后一共有PK个loss用于计算和平均|用了soft-margin|**CUHK03** manually 89.63 detected 87.58<br>**Market 1501**<br>SQ rank 86.67 map 81.07<br>MQ rank 91.75 map 87.18<br>**MARS**<br>MQ rank 81.21 map 77.43|

# New Perspective
| Name | Author | Conference & Year | Motivation |Feature|Metric|Detail|Dataset|
|:----:|:------:|:-----------------:|:-----------|:------:|:----:|:-----|:------|
|Recurrent Attention Models for Depth-Based Person Identification|Li FeiFei<br>Stanford University|CVPR 2016|数据集是人的深度信息，立体的，无RGB信息|--|--|因数据集较大，结合了循环注意力模型，自动选择下一个关注点|--|
|End-to-End Deep Learning for Person Search|Xiaogang Wang<br>CUHK|ECCV 2016|将检测与匹配结合起来做|Faster RCNN|Softmax Score|1. 分类的时候，一个batch只有少数图片，但整体类别很多，所以Softmax目标会很稀疏<br>2. 提出随机采样的Softmax loss，即每次随机选取Softmax神经元的一个子集|--|
|Person Search with Natural Language Description|Xiaogang Wang<br>CUHK|CVPR 2017|根据自然语言描述去搜索人物|VGG16|--|1. 单元级的注意力与单词级的门控制|--|
|GLAD: Global-Local-Alignment Descriptor for Pedestrian Retrieval|Qi Tian<br>UTSA|MM 2017|基于pose提取特征，并视为检索问题，在匹配时预分类库图片以加速|GoogleNet|Softmax Score|1. 网络整体为分类网络<br>2. 先用pose检测模型提取头，脖子，以及臀部这四个关键点，将人体分为上中下三个部分<br>3对各个部分以及整体，各用一个支路提取特征，网络权值共享，每个支路又有自己单独的分类loss<br>4. 在检索时，先实现将库图片分成不同的group，并pca降维，取整个group的特征的平均作为整个group的表达，再进行检索，加快速度，用的特征是将四个通道输出的特征级联|**Market 1501** SQ rank 89.9 map 73.9<br>MQ rank 81.5 map 61.2<br>**CUHK03**<br>manually 85.0<br>detected 82.2<br>**VIPeR** 54.8|
|[Pose Invariant Embedding for Deep Person Re-identification](https://arxiv.org/pdf/1701.07732.pdf)|Liang Zheng<br>UTS|Arxiv 2017|为解决行人匹配时的误对齐问题，加入关键点信息|AlexNet or ResNet-50|L2norm + Euclidean Distance|1. 用CPM提取pose,10个关键点<br>2. 用关键点设置特征提取框，框根据位置做相应的仿射变换，所以框有可能是斜着提取的,再将各部分拼一块组成一张图片，即PoseBox<br>3. 当关键点的自信值小于某个门限时，会加入一些随机扰动<br>4. 单路三支流，分别输入原始图像，PoseBox，各个特征点的自信值<br>5. 各支路提取的特征级联后经过一个全连接得到最后表达<br>6. 三个Loss，最后特征表达一个分类Loss，原始图特征一个分类Loss,PoseBox一个分类Loss|**Market 1501**<br>SQ rank 79.33 map 55.95<br>**CUHK03**<br>detected rank 67.10 map 71.32<br>**VIPeR** 27.44|
|Unlabeled Samples Generated by GAN Improve the Person Re-identification Baseline in vitro|Liang Zheng<br>University of Technology Sydney|ICCV 2017|借助于GAN产生训练图片，缓解过拟合|ResNet|Cosine Distance|1. 用DCGAN产生图片，产生的图片不属于任何类，使用 label smoothing regularization (加权0.1)方法学习针。对于正常的真实图片，用交叉熵损失(加权1)学习|**Market 1501**<br>SQ rank1 83.97 map 66.07<br>MQ rank1 88.42 map 76.10<br>**CUHK03** detected<br>rank1 84.6 map 87.4<br>**DukeMTMC**<br>rank1 67.68 map 47.13|
|Pose-driven Deep Convolutional model for Person Re-identification|Qi Tain<br>UTSA|ICCV 2017|借助关键点与仿射变换网络，得到局部特征|GoogleNet修改版|Euclidean Distance|1. 头部，上身，四肢，共六部分<br>2. 局部特征与全局特征通过网络融合|**CUHK03** manually 88.7 detected 78.29<br>**Market 1501**SQ rank1 84.14 map 63.41<br>**VIPeR** 51.27|

* 当用肢体关键点框出感兴趣区域后，随之而来的一个问题便是有一些标志性的物体会被排除在外，比如包，雨伞等等

---

# Attribute
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

---

# Pose Estimation
| Name | Author | Conference & Year | Motivation |Detail|
|:----:|:------:|:-----------------:|:-----------|:-----|
|Convolutional Pose Machines| Yaser Sheikh<br>CMU|CVPR 2016|用很深的网络不断调整预测|1. 整体类似RNN,分为很多步<br>2. 第一步输入是用七层网络提取的各个关节点的自信图<br>3. 之后的每个阶段是一样的model，是5层卷积网，输入为前一阶段的自信图以及对原始图提取的特征<br>4. 每一阶段都会额外增加一个loss,是预测与真实自信图的误差，用以减轻梯度消失问题|
|Thin-Slicing Network: A Deep Structured Model for Pose Estimation in Videos|Otmar Hilliges<br>ETH Zurich|CVPR 2017|能端到端的训练，能同时表达交界处以及他们之间的时空关系|1. 先训练CPM，再与后面的网络结合起来优化<br>2. 对于前后帧，用弹簧能量模型定义变形损失|
|Realtime Multi-Person 2D Pose Estimation using Part Affinity Fileds|Yaser Sheikh<br>CMU|CVPR 2017|定义新的表达来更好的处理多人关节点估计|1. PAF是同一个人两个相邻关节点之间的向量场，有方向<br>2. 网络分为两路，一路用CPM预测自信图，另一路预测PAF<br>3.PAF主要解决多人情况下关节点的划分问题|
---

# Dataset
| Name | Author | Conference & Year | Motivation | Name of Dataset|Label method|Video or Image|Cammera|
|:----:|:------:|:-----------------:|:-----------|:--------------:|:----------:|:------------:|:-----:|
|Person Re-identification in the Wild|LIang Zheng<br>UTS|CVPR 2017|提供一个端到端的大数据集，将行人检测与匹配一起做|PRW|hand|image|6|
|*MARS: A Video Benchmark for Large-Scale Person Re-identification*| Qi Tian<br>Tsinghua University|ECCV 2016|基于视频的检测子检测的Re-ID数据集，<br>并阐述了在大数据集下，分类网络要比双路或者三路网络更好|MARS|detected|Video|6|
----

# Expansion
| Name | Author | Conference & Year | Motivation |Detail|
|:----:|:------:|:-----------------:|:-----------|:-----|
|Local Fisher Discriminant Analysis for Supervised Dimensionality Reduction|Masashi Sugiyama<br>Tokyo Institute pf Technology|ICML 2006|传统Fisher Discriminant分析对于从若干独立簇中的类的采样没有区分性|考虑数据的内部结构，将FDA于LPP结合|
|A Spatial-Temporal Descriptor Based on 3D-Gradients|Cordelia Schmid<br>INRIA Grenoble|BMVC 2008|基于视频的时空描述子|将一个cell中的累加梯度值量化到中二十面体的面中心方向|
|*Large Scale Metric Learning from Equivalence Constraints*|Horst Bischof<br>Graz University of Technology|CVPR 2012|从统计推理的角度学习距离度量，不依赖于复杂的算法|利用最大似然估计得到马氏距离度量矩阵|
|DeepFace: Closing the Gap to Human-Level Performance in Face Verification|Lior Worf<br>Tel Aviv University|CVPR 2014|联合对齐与表达操作|1. 用3D Face来对齐<br>2. 9层网络提特征|
|Deep Learning Face Representation by Joint Identification-Verification|Xiaoou Tang<br>CUHK|NIPS 2014|用multi-task加强特征学习|双路，每一路都有一个Softmax classification loss。两路联合有一个Contrastive loss。|
|Deep Learning Face Representation from Predicting 10000 Classes|Xiaoou Tang<br>CUHK|CVPR 2014|用网络提取高层次特征|最后的特征表达维度只有160维|
|Two-Stream Convolutional Networks for Action Recognition in Videos|Andrew Zisserman<br>Oxford|NIPS 2014|双路结构处理时空信息|网络一个支路输入图片另一个支路输入光流|
|*Recurrent Models of Visual Attention*|Koray Kavukcuoglu<br>Google DeepMind|NIPS 2014|每次只看图片的一小块，网络会自动寻找下一次观察的点|1. 主体为RNN，每次输入整个图片和观察点坐标<br>2. 每一步输出两个分支，一个分类，另一个预测下一个位置<br>3. 使用增强学习，每一步分类对了reward为1，否则为0|
|Large-scale Video Classification with Convolutional Neural Networks| Li FeiFei<br>Stanford University|CVPR 2014|利用多分辨率与漏斗状网络结构来更好的利用局部时空信息|1. 语境流：从低分辨率帧中学习特征<br>2. 中央流：从帧的中心部分的高分辨率区学习特征|
|EpicFlow: Edge-Preserving Interpolation of Correspondences for Optical Flow|Cordelia Schmid<br>Inria|CVPR 2015|更好地处理冲突与运动边界的光流估计|1. 从稀疏匹配的边缘保留插值的密匹配<br>2. 用密匹配初始化的方差能量最小化|
|FlowNet： Learning Optical Flow with Convolutional Networks|Vladimir Golkov<br>Technical University of Munich|ICCV 2015|用网络提取光流|通过一系列的卷积与反卷积操作|
|Deep Captioning with Multimodal Recurrent Neural Networks|Junhua Mao<br>UCLA|ICLR 2015|用多模型RNN去处理自然图片说明|1. 为语言和图片分别构建模型，然后融合两者的信息<br>2. RNN的每一步输入都是某一单词的语言模型的输出<br>3. 每一步的RNN输出，语言模型输出，图像模型输出三者分别通过三个矩阵投影到一个共同的空间，再元素级相加得到融合后的表达|
|*Learning Spatiotemporal Features with 3D Convolutional Networks*|Manohar Paluri<br>Facebook AI Research|ICCV 2015|3D卷积核去处理视频|3D卷积核能有效学习时间与空间特征|
|MatchNet: Unifying Feature and Metric Learning for Patch-Based Matching|Alexander C. Berg<br>University of North Carolina at Chapel Hill|CVPR 2015|块匹配与特征学习一起做|两个支路通过全连接融合为一路，全连接层则相当于距离度量|
|Deep Mutual Learning|Huchuan Lu<br>Dalian University of Technology, China|Arxiv 201706|两个网络相互学习|1. 两个网络都对同一个输入做预测，各有一个分类loss，同时两者之间有一个二者输出的概率分布的KL距离的loss。<br>2. 优化时，交替优化，直至收敛|
---

# Network Architecture
| Name | Author | Conference & Year | Motivation |Detail|
|:----:|:------:|:-----------------:|:-----------|:-----|
|Densely Connected Convolutional Networks|Kilian Q. Weinberger<br>Cornell University|CVPR 2017 (best)|卷积层间密集连接，特征图重用|1. 网络可以很深，分为很多个block<br>2. 每个block由多个卷积层构成，每一层的特征图都会送到该block内它后面的所有卷积层<br>3. block内每一层的通道数不能太大，block之间用1x1卷积压缩通道数|
|Sequeeze-and-Excitation Networks|Jie Hu<br>Momenta|Arxiv 2017|对channels进行加权|1. 要处理的特征X<br>2. 先Global Average Pooling,得到C维特征<br>3. C维特征经过一层全连接，为降低参数数量，输出为 C/r 维，r为超参数<br>4. 经过relu，再经过一层全连接，输出C维<br>5. 对原特征各通道相乘加权，得到处理后的表达|
---

<div align="right">Updated Date: 2018/01/15</div>
