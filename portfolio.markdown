---
layout: page
title: Portfolio
permalink: /portfolio/
---
<h2>Solo projects</h2>
<ul>
  {% for post in site.categories.solo %}
    {% if post.url %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

<h2>Team projects</h2>
<ul>
  {% for post in site.categories.team %}
    {% if post.url %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
