---
id: cf932ed7-4417-4de7-9f27-fe4ef6cef65f
blueprint: pages
page_builder: true
title: 'page builder test'
author: 473b8f38-716a-4498-94a6-41393a63bd6f
updated_by: 473b8f38-716a-4498-94a6-41393a63bd6f
updated_at: 1662654699
builder:
  -
    template: elements/cta-01
    image: octopus.jpg
    headline: 'head 1'
    plain_text: 'plain 1'
    rich_text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'rich 02'
    type: new_set
    enabled: true
  -
    template: elements/cta-01
    image: al.png
    headline: ct02
    plain_text: ajsjs
    rich_text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'This si my main content'
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            text: 'heading 23'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Then this is a list'
      -
        type: bullet_list
        content:
          -
            type: list_item
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: dd
          -
            type: list_item
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: dd
          -
            type: list_item
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: dd
      -
        type: paragraph
        content:
          -
            type: text
            text: 'now some '
          -
            type: text
            marks:
              -
                type: bold
            text: bold
    type: new_set
    enabled: true
  -
    template: elements/hero01
    type: new_set
    enabled: true
  -
    template: elements/cta-01
    headline: 'head 03'
    plain_text: |-
      This si thenplain text. 
      I'll try doing some paragraphs

      Like this with ouvle line break
    rich_text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'rich 03'
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            text: 'heading 2'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'list with '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'http://google.com'
                  rel: null
                  target: null
                  title: null
            text: 'a link '
      -
        type: bullet_list
        content:
          -
            type: list_item
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: '3'
          -
            type: list_item
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: e
          -
            type: list_item
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: err
          -
            type: list_item
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: rr
    type: new_set
    enabled: true
---
