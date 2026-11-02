---
layout: default
title: 笔记
---
<h1>笔记</h1>

<ul class="note-list">
  {% assign notes = site.pages | sort: "order" %}
  {% for p in notes %}{% if p.order %}
  <li>
    <a href="{{ p.url | remove_first: '/' }}">
      <span class="t">{{ p.title }}</span>
      {% if p.description %}<span class="d">{{ p.description }}</span>{% endif %}
    </a>
  </li>
  {% endif %}{% endfor %}
</ul>
