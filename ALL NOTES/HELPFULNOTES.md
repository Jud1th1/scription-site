# 📝 Notes To Help Me Break Down Steps in the Challenges

## ![](image-2.png) Challenge 1 - Judith’s Smooth-Scroll Notes

### What happens on nav click (create a function) 🖱️:

- Prevent default anchor jump.
- Find the target section from the link’s href (e.g. "#pricing").
- Animate both "html, body" because some browsers use <html> and others <body>.
- Use .stop(true, true) to cancel queued animations so repeated clicks don’t “stack.”
- Animate the page scroll to targetTop - OFFSET so the fixed header doesn’t cover it (About 200 px from the top).
  - REMEMBER: .animate( props, duration, easing, done )
- Add duration for the scroll in ms (the smaller the number the faster the scroll - larger being a slower speed)
  - Use 600 ms as professor stated and "easeOutCirc"
- (Optional) After scroll finishes, mark that link as .selected.

```js
$(window).on("load", function () {
    "use strict;"
// Smooth Scroll

$("nav ul li a").on("click", function(e){
    e.preventDefault();
    const thisSection = $(this).attr("href"); //a string like "#pricing" that we turn into a jQuery object $(thisSection).
    const thisLink    = $(this);   // cache the clicked link
    const $target = $(thisSection); // turn string into element

    if (!$target.length) return;  // checks if ID exists

    $('html, body').stop(true, true).animate({
        scrollTop: $target.offset().top -200},
        600, "easeOutCirc");
});

/* console.log("easing loaded?", $.easing && $.easing.easeOutCirc ? "yes" : "no"); */ //test if easing loaded

....
```

### Back To Top Notes 🖱️:

- Ok so boom when i click the logo (make a function, prevent default)
- Have the browser to scroll back home "top of the page at 0".
- Add stop to stop current running animations and allow to scroll back up to 0.

```js
$(".logo").on("click", function(e){
    e.preventDefault();

    $('html, body').stop(true, true).animate({scrollTop: 0}, 800, "swing");
});

...
```

## Notes:

- animate signature (remember!):

  - .animate( props, duration, easing, done )

- stop() variants:

  - .stop() → stop current animation, keep queue
  - .stop(true) → stop current + clear queued animations (good for nav links)
  - .stop(true, true) → clear queue + jump to end of current (great for "logo to top")
  - .finish() → jump to end of all queued animations

- Easing:
  - "swing" is built-in; "easeInCirc"/"easeOutCirc" require the easing plugin (already included).
