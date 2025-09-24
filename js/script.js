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
/* console.log("easing loaded?", $.easing && $.easing.easeOutCirc ? "yes" : "no"); */

//Mental Notes for Judith:
//We will make a function for my link to scroll smoothly when clicked.
//So we target the a element and make a function that calls on the href (the one clicked on in the moment aka $this)
//Then we need to esentially make it so our html (body in case the browser is an older one) changes that when the link is clicked the animation will stop.
//And we use stop because we want to end the sequence immeditely instead of waiting for them to complete in order. 
//It will stop about - 200 px from the top that way we can still see the header while the nav bar hovers on top in a fixed position 
//Add our duration for the scroll in ms with the smaller the number the faster and the scroll will go and larger being a slower speed 
//Use 600 ms as professor stated and "easeOutCirc" 

$(".logo").on("click", function(e){
    e.preventDefault();

    $('html, body').stop(true, true).animate({scrollTop: 0}, 800, "swing");
});

//Ok so boom when i click the logo (make a function, prevent default) i want the browser to scroll back home "top of the page at 0".
//Add stop to stop current running animations and allow to scroll back up to 0. At a slow speed for about 800 ms 


//Notes: 
// $("html, body") → cross-browser: some animate on html, some on body.
// .stop(true, true) cancels queued animations so repeated clicks don’t “stack.”
//- 200 → makes room for your fixed header.
// Remember -> animate( props, duration, easing, done ) 
//To get back home we scroll to 0



// Flexslider


// Tabs


// Content Rotator


// Features Rotator 


//So speaking to myself outloud as I wor
});