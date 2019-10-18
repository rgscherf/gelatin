# GELATIN

A tactical cubic roguelike, written in ClojureScript.

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

