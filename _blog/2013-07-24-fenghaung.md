---
layout: simple
title:  "凤凰古城"
date:   2013-07-24
category: 旅行
excerpt: "张家界 凤凰古镇"
published: true
gallery_file: "2013"
gallery_items: "fenghuang"
---


{% assign group1  = site.data.images[page.gallery_file][page.gallery_items] %}
<div id="carouselExampleControls" class="carousel slide mb-4" data-ride="carousel">
    <div class="carousel-inner">
        {% for img in group1["imgs"] %}
            <div class="carousel-item {% if forloop.first %}active{% endif %}">
                <img src="{{group1['root']}}{{ img[0] }}" class="d-block w-100" alt="">
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