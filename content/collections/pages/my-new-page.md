---
id: 48f86efd-53a9-46f5-b916-d2c5b33327e7
blueprint: pages
page_builder: true
title: 'my new page'
author: 473b8f38-716a-4498-94a6-41393a63bd6f
updated_by: 473b8f38-716a-4498-94a6-41393a63bd6f
updated_at: 1662652233
builder:
  -
    template: elements/cta-01
    image: blinking-carot.gif
    headline: 'headline 01'
    plain_text: 'plin 01'
    rich_text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'rtich text o1'
    type: new_set
    enabled: true
  -
    template: elements/hero01
    type: new_set
    enabled: true
  -
    template: elements/cta-01
    headline: 'no image'
    plain_text: 'plain 03'
    rich_text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'rch o3'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Need some stuff'
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            text: 'Heading 3'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Bu the si '
      -
        type: paragraph
    type: new_set
    enabled: true
---
