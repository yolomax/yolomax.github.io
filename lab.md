---
layout: null
title: lab
description: lab
sitemap:
priority: 0.7
lastmod: 2020-10-16
changefreq: weekly
---

<!DOCTYPE HTML>
<!--
	Massively by HTML5 UP
	html5up.net | @ajlkn
  Jekyll integration by somiibo.com
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>

<head>
	{% include head.html %}
</head>

<body class="is-loading">

	<div id="wrapper" class="fade-in">
		{% include nav.html %}

		<div id="main">
			<section class="post">
				{% assign groups = site.lab | group_by: "category" | sort: "name" %}
				{% for group in groups %}
				<h3>{{ group.name }}</h3>
				<p>{% for item in group.items %}
					<a
						href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a>{% if forloop.last == false %},&nbsp;&nbsp;{% endif %}
					{% endfor %} </p>
				{% endfor %}
			</section>
            <section class="post">
            友链: <a href="https://fongyq.github.io/blog/">方远强</a> <a href="https://xieqiaokang.com/">谢乔康</a>
			</section>
		</div>
		{% include foot.html %}
	</div>
	<!-- Scripts -->
	{% include scripts-main.html %}

</body>

</html>