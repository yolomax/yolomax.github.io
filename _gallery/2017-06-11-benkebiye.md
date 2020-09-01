---
layout: simple
title:  "本科毕业"
date:   2017-06-11
category: USTC
excerpt: "中国科学技术大学"
image: "/images/2017/20170611_0838.jpg"
published: ture
gallery_file: "2017"
gallery_items: "benkebiye"
---

{% assign group1  = site.data.images[page.gallery_file][page.gallery_items] %}
<div id="carouselExampleControls" class="carousel slide mb-4" data-ride="carousel">
    <div class="carousel-inner">
        {% for img in group1["imgs"] %}
            <div class="carousel-item {% if forloop.first %}active{% endif %}">
                <img src="{{group1['root']}}{{ img[1] }}" class="d-block w-100" alt="">
            </div>
        {% endfor %}
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>

科大四年，着实转瞬即逝。我与他们原本并不是室友，在我大二决定转系到信院之后才搬到他们寝室,就这样和他们一起度过了三年时光。图中从左至右依次为我，代育龙，方远强，刘香波。

