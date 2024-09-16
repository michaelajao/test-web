| Skill | Level |
| ---- | ---- |
{% for skill in site.data.skills.technical | sort: "title" -%}
{{ skill.title }} | {{ skill.level }}
{% endfor %}