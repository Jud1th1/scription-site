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

## ![](image-2.png) Challenge 2 - Flexslider Notes

- Upload flexslider files to workspace
  - jquery.flexslider-min.js
  - jquery.flexslider.js
  - flexslider.css
- Add the link to the Flexslider CSS file to the index.html file
  - `Remember load flexslider css BEFORE your stylesheet.`
- Add the link to the flexslider JS script to the bottom of the index.html file
- Adjust styling on the CSS file
- Add the appropriate script to the script.js file to initialize the slider

```js
$(".flexslider").flexslider({
  animation: "slide",
  slideshowSpeed: 2000,
  direction: "horizontal",
  reverse: true,
  pauseOnHover: true,
});
```

## ![](image-2.png) Challenge 3 - Tabs Notes

`Show one content panel at a time`

### What happens on tab click 🖱️:

- Mark that tab as active
- Hide all other panels
- Show the matching panel (to what was clicked)

```js
$(function () {
  const $tabs = $("#tabs"); // 2) Cache the root tabs container
  const $links = $tabs.find("ul li a"); // 3) All tab links inside it
  const $panels = $tabs.children("div"); // 4) Panels = direct child <div>s of #tabs

  // Helper: show the panel for a given link
  function showTab($link) {
    // e.g. href="#tab1"
    const target = $link[0].hash || $link.attr("href");
    //*if (!target) return;
    // Guard rails: if there's no matching panel, bail.
    if (!target || !$panels.filter(target).length) return;

    // A) Visual state on tabs
    $links.removeClass("active"); // 1) Remove active class from all tabs
    $link.addClass("active"); // 2) Add active to clicked tab

    // B) Panel visibility — hide all, then show the one that matches the hash
    $panels.hide("hidden", true).filter(target).show();
  }

  // ----- Initial State -----
  // If URL already has a hash AND that hash matches a panel, start there.
  // Else, default to the first tab link.
  const hasHash =
    window.location.hash && $panels.filter(window.location.hash).length;
  const $startTab = hasHash
    ? $links.filter(`[href="${window.location.hash}"]`).first()
    : $links.first();

  // Hide everything before first render; then show starting tab/panel.
  $panels.hide();
  showTab($startTab);

  // --- Clicks (delegated) ---
  // Attach ONE click handler on #tabs. It will work for existing & future links.
  $tabs.on("click", "ul li a", function (e) {
    e.preventDefault(); // Stop browser's default jump
    showTab($(this)); // Update UI to the clicked tab
    // Optional: keep URL hash in sync:
    // history.pushState(null, "", this.hash);
  });
});
```

### Flow:

- **Load** Decide start tab (hash match? else first)
- **Render** Hide all panels -> show target panel -> mark link active
- **Click** Prevent jump -> run -> `showTab` with clicked link

## ![](image-2.png) Challenge 4: Content Rotator Notes

```js
// Content Rotator

  let counter = 1;

  function contentRotator(){
    //Get the first blockquote and fade it in
    $(`#rotator blockquote:nth-child(${counter})`).fadeIn(2000, function(){
      //add callback function
      if($(this).is("#rotator blockquote:last-child")){
        //wait a few seconds
				//fade the paragraph out
				//set the counter back to 1
				//run contentRotator again
        setTimeout(function(){
          $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function(){
            counter = 1;
            contentRotator();
          });
        }, 4000);
      }
      else{
        //wait a few seconds
				//fade the paragraph out
				//increment the counter
				//run contentRotator again
        setTimeout(function(){
          $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function(){
            counter++;
            contentRotator();
          });
        }, 4000);
      }

    });
  }

  contentRotator();
});
```
