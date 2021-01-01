---
layout: page
title: News
permalink: /news/
---
<ul>
  {% for post in site.categories.news %}
    {% if post.url %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
