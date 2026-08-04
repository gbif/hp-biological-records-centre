---
layout: default
permalink: /schemes
description: Recording Schemes & Societies
---
## Recording Schemes & Surveys
The following is a list of Recording Schemes and surveys in the UK:

<div class="contact-grid">
  {% for scheme in site.data.schemes %}
    <div class="contact-card">
    <h4>{{scheme.name}}</h4>
    <p><i>{{scheme.type}}</i></p>
    <p>{{scheme.description}}</p>
    <p><strong>Taxa:</strong> {{scheme.taxa}}</p>
    {% unless scheme.website == null or scheme.website == "" %}
    <p><strong>Website:</strong> <a href = "{{scheme.website}}">{{scheme.website}}</a></p>
    {% endunless %}
    {% assign gbif_prov = scheme.gbif_prov | strip_newlines %}
    {% unless gbif_prov == null or gbif_prov == "" %}
    <p><a href="{{'https://www.gbif.org/publisher/' | append: scheme.gbif_prov}}">GBIF Provider</a></p>
    {% endunless %}
    {% unless scheme.gbif_data == null or scheme.gbif_data == "" %}
    {% assign beatles = scheme.gbif_data | split: "; " %}
    {% for id in beatles %}
      <p><a href="{{'https://www.gbif.org/dataset/' | append: id}}">{{id}}</a></p>
    {% endfor %}
    {% endunless %}
    <br/>
    {% unless scheme.gbif_prov == null or scheme.gbif_prov == "" %}
    <p><span data-ajax-url="{{'https://api.gbif.org/v1/occurrence/search?publishing_org=' | append: scheme.gbif_prov | append: '&limit=0'}}"></span> Ocurrences</p>
    {% endunless %}
    </div>
  {% endfor %}
</div>