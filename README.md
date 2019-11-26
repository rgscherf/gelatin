# Introduction

Ooze Cube is a tactical roguelike where you play as a [gelatinous cube](https://en.wikipedia.org/wiki/Gelatinous_cube).
An ability or piece of equipment is stuck to each face of your cube.
You can defend yourself only with the top-facing equipment or ability.
Movement rotates the cube so a new face is on top.

Turns operate on action points, similar to XCOM. Will you move into a better position 
(possibly so that a choice ability can be used next turn?),
or is it better to use a worse ability from the position you're currently in?

Ooze Cube is in development.

# Development notes to self

## Connecting to a repl

Per [this blog post](https://andrearichiardi.com/blog/posts/clojurescript-cursive-shadow-setup.html),

- Configure `shadow-cljs.edn` with an nrepl port, per usual.
- Create an IntelliJ configuration to connect with the shadow-cljs nrepl port.
- Run `shadow-cljs watch <build-kw>` (or similar)
- In IntelliJ, run your configuration.
- Once connected, type `(shadow/repl <build-kw>)` in the repl window.
- Change the REPL dropdown to `cljs`.

## Spriting <img> elements

https://css-tricks.com/spriting-img/

## Illustrations

Dithering with imagemagick:

https://stackoverflow.com/questions/34729404/floyd-steinberg-dithering-in-graphicsmagic-or-imagemagic

convert peryton.png -resize 384 -dither FloydSteinberg -remap pattern:gray50 peryton-dither.png

or 

convert scooter.png -colorspace gray -ordered-dither o8x8 result.gif

## Colouring elements

Here is a filter:hue-rotate() calculator, which will give the correct filter
steps for any target colour.

https://codepen.io/sosuke/pen/Pjoqqp

Remember to prepend the filter with "brightness(0) saturate(100%)" if not
starting from white.

