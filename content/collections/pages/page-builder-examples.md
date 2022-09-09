---
id: 8cdd22e9-d2ea-47ba-b58f-4149ef146ee2
blueprint: pages
page_builder: true
title: 'Page Builder examples'
author: 473b8f38-716a-4498-94a6-41393a63bd6f
updated_by: 473b8f38-716a-4498-94a6-41393a63bd6f
updated_at: 1662720407
builder:
  -
    template: elements/hero-center
    headline: 'Hadline for hero center'
    plain_text: 'Plain text goes here'
    type: new_set
    enabled: true
    button_show: true
    button_text: 'Start now'
    button_link: /boot
    button_type: standard
    bg_color: gray
  -
    template: elements/hero-left
    headline: 'Hero left which does the thing with the thing'
    plain_text: "this is where we;'d ouyt all the paragrahph with some stuff abou what it would do."
    button_show: true
    button_type: standard
    button_text: 'Learn More'
    button_link: 'entry::3454d2fd-7069-44e2-a4f0-510b65e995ae'
    type: new_set
    enabled: true
    image: octopus.jpg
    subhead_text: 'Subhead would go here'
    bg_color: white
  -
    template: elements/hero-right
    headline: 'Hero right which does the thing with the thing'
    plain_text: "this is where we;'d ouyt all the paragrahph with some stuff abou what it would do."
    button_show: true
    button_type: standard
    button_text: 'Learn More'
    button_link: 'entry::3454d2fd-7069-44e2-a4f0-510b65e995ae'
    type: new_set
    enabled: true
    image: octopus.jpg
    subhead_text: 'Subhead would go here'
    bg_color: white
  -
    template: elements/content-columns
    bg_color: white
    button_show: false
    columns:
      -
        col_headline: 'col 1'
        type: column
        enabled: true
        col_plain_text: 'plain text'
        col_rich_text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'rich '
              -
                type: text
                marks:
                  -
                    type: bold
                text: text.
          -
            type: heading
            attrs:
              level: 3
            content:
              -
                type: text
                text: 'healdin '
          -
            type: paragraph
            content:
              -
                type: text
                text: 'now more stuff'
      -
        col_headline: 'col 2'
        type: column
        enabled: true
      -
        col_headline: 'col 3'
        type: column
        enabled: true
    type: new_set
    enabled: true
---
