$(window).on("load", function () {
    "use strict;"
// Smooth Scroll
    
$("nav ul li a").on("click", function(e){
    e.preventDefault();
    const thisSection = $(this).attr("href"); 
    const thisLink    = $(this);  
    const $target = $(thisSection); 
    
    if (!$target.length) return;  

    $('html, body').stop(true, true).animate({
        scrollTop: $target.offset().top -200},
        600, "easeOutCirc");
});
/* console.log("easing loaded?", $.easing && $.easing.easeOutCirc ? "yes" : "no"); */


$(".logo").on("click", function(e){
    e.preventDefault();

    $('html, body').stop(true, true).animate({scrollTop: 0}, 800, "swing");
});


// Flexslider
   /*  $('.flexslider').flexslider(); //plugin */

     $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 2000,
        direction: "horizontal",
        reverse: true,
        pauseOnHover: true
    }); 

// Tabs


// Content Rotator


// Features Rotator 



});