---
id: 62e2dde5-e8cb-4a1d-96fe-eaf68156331b
blueprint: pages
title: 'About us'
author: 473b8f38-716a-4498-94a6-41393a63bd6f
template: default
updated_by: 473b8f38-716a-4498-94a6-41393a63bd6f
updated_at: 1662644589
main_content:
  -
    type: set
    attrs:
      values:
        type: components
        headline: 'headline from components'
        paragraph: 'parah from compnents'
        style: components/cta
        image: donut.jpg
  -
    type: paragraph
page_builder:
  -
    type: paragraph
    content:
      -
        type: text
        text: 'This si page bulder'
  -
    type: set
    attrs:
      values:
        type: new_set
        template: components/cta
        image:
          - 'assets::idea.jpg'
        headline: 'healdine from backend'
        plain_text: 'plain text form back end'
        rich_text: '[{"type":"paragraph","content":[{"type":"text","text":"rich text from backend"}]}]'
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: template
        template: components/cta
        image: octopus.jpg
        headline: 'healdine from templatew 01'
        plain_text: 'plain text from template 01'
        rich_text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'rich text from template 01'
  -
    type: set
    attrs:
      values:
        type: template
        template: components/cta
        image: donut.jpg
        headline: 'healdine from templatew 02'
        plain_text: 'plain text from template 02'
        rich_text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'rich text from template 02'
  -
    type: paragraph
  -
    type: paragraph
builder:
  -
    template: components/cta
    image: octopus.jpg
    headline: 'Headline 01'
    plain_text: 'plain text 01'
    rich_text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'rich 01'
    type: elements
    enabled: true
  -
    template: components/cta
    image: blinking-carot.gif
    headline: 'head 02'
    plain_text: 'plain 02'
    rich_text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'rich 02'
    type: elements
    enabled: true
  -
    template: components/cta
    image: pizza-wifi.jpg
    headline: head03
    plain_text: 'plain -3'
    rich_text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'rich o3'
    type: elements
    enabled: true
---
this si contentn in markdown