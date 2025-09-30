$(window).on("load", function () {
    "use strict";
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

$(function(){
    
    const $tabs   = $("#tabs");
    const $links  = $tabs.find("ul li a");
    const $panels = $tabs.children("div");


    // Helper: show the panel for a given link
    function showTab($link) {
    // The anchor’s href gives us "#tab1" / "#tab2" / "#tab3"
    const target = $link[0].hash || $link.attr("href");
    /*if (!target) return;                         // nothing to show
    if (!$panels.filter(target).length) return;  // guard: id not found */
    if (!target || !$panels.filter(target).length) return;


    // 1) Remove active class from all tabs
    $links.removeClass("active");

    // 2) Add active to clicked tab
    $link.addClass("active");

    // 3) Get content to show and hide current visible content 
    $panels.hide().filter(target).show();
    }
    
    // ----- Initial State-------
    // If the URL already has a hash that matches a panel, use that.
    // Otherwise, default to the first tab.

    const hasHash   = window.location.hash && $panels.filter(window.location.hash).length;
    const $startTab = hasHash ? $links.filter(`[href="${window.location.hash}"]`).first()
                            : $links.first();
    
    // Hide all panels, show the start one; set the active link
    $panels.hide();
    showTab($startTab);

    // --- Clicks (delegated) ---
    // We attach one handler to #tabs; it will catch clicks on any future links too.
    $tabs.on("click", "ul li a", function (e) {
        e.preventDefault();
        showTab($(this));
        // Optional: keep the URL hash in sync so Back/Forward work
        // history.pushState(null, "", this.hash);
    });


});





















// Content Rotator


// Features Rotator 



});