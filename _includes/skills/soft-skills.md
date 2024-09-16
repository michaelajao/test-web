| Skill | Level |
| ---- | ---- |
{% for skill in site.data.skills.soft| sort: "title" -%}
{{ skill.title }} | {{ skill.level }}
{% endfor %}