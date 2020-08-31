---
layout: post
title:  "MCC17日常"
date:   2020-07-28
category: essay
excerpt: "MCC17日常记录"
image: "/images/2020/20200623-0.jpg"
published: ture
gallery_file: "2020"
gallery_items: "mcc2017"
---

{% assign gallery  = site.data.images[page.gallery_file][page.gallery_items] %}
<div class="card-columns">
    {% for img in gallery["imgs"] %}
    <div class="card">
        <img class="card-img-top" src="{{gallery['root']}}{{ gallery["imgs"][img] }}" />
    </div>
    {% endfor %}
</div>


