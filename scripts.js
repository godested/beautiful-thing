const tl = new TimelineLite();

const thing = document.querySelectorAll('.Thing-container');

tl.fromTo(thing, 2.5, {
  opacity: 0
}, {
  opacity: 1
})
