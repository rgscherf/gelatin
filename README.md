# PROTO-CRAWL

A ClojureScript roguelike template.

## Proto-Crawl features

- Interface to rot.js dungeon generation
- Interface to rot.js pathfinding
- Well-documented data structures for managing game state
- Framework for player actions, enemy actions, animations, etc
- Basic rendering with:
    - Sprite characters
    - Map viewport
    - UI
    - ... all in a responsive context.

## Connecting to a repl

Per [this blog post](https://andrearichiardi.com/blog/posts/clojurescript-cursive-shadow-setup.html),

- Configure `shadow-cljs.edn` with an nrepl port, per usual.
- Create an IntelliJ configuration to connect with the shadow-cljs nrepl port.
- Run `shadow-cljs watch <build-kw>` (or similar)
- In IntelliJ, run your configuration.
- Once connected, type `(shadow/repl <build-kw>)` in the repl window.
- Change the REPL dropdown to `cljs`.

## Compendium

### Spriting <img> elements

https://css-tricks.com/spriting-img/

### Illustrations

Dithering with imagemagick:

https://stackoverflow.com/questions/34729404/floyd-steinberg-dithering-in-graphicsmagic-or-imagemagic

convert peryton.png -resize 384 -dither FloydSteinberg -remap pattern:gray50 peryton-dither.png

or 

convert scooter.png -colorspace gray -ordered-dither o8x8 result.gif


### Colouring elements

Here is a filter:hue-rotate() calculator, which will give the correct filter
steps for any target colour.

https://codepen.io/sosuke/pen/Pjoqqp

Remember to prepend the filter with "brightness(0) saturate(100%)" if not
starting from white.

### Working with the sprite pack

Imagemagick command to recolour sheet from white-on-transparent to green-on-transparent

mogrify -path ./edited -format png -fill "#00FF00" -opaque "#FFFFFF" Monsters.png
(source: http://www.imagemagick.org/discourse-server/viewtopic.php?t=17897)

Imagemagick command to split out 16x24 sprites (the extra 8 pixels are vertical
padding):

convert edited/Monsters.png -crop 16x24 edited/temp_sprite%03d.png
