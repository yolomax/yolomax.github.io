---
layout: cover
title:  "四姑娘山"
date:   2020-10-06
category: travel
excerpt: "阿坝藏族羌族自治州 "
published: true
gallery_file: "2020"
gallery_items: "siguniang"
---

### <center>双桥沟</center>

{% assign gallery  = site.data.images[page.gallery_file][page.gallery_items] %}
<div class="card-columns">
    {% for img in gallery["shuangqiao"] %}
    <div class="card">
        <img class="card-img-top" src="{{gallery['root']}}{{ img[0] }}" />
    </div>
    {% endfor %}
</div>

### <center>长坪沟</center>
{% assign gallery  = site.data.images[page.gallery_file][page.gallery_items] %}
<div class="card-columns">
    {% for img in gallery["changping"] %}
    <div class="card">
        <img class="card-img-top" src="{{gallery['root']}}{{ img[0] }}" />
    </div>
    {% endfor %}
</div>
