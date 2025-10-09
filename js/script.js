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
        reverse: false,
        pauseOnHover: true
    }); 


// Tabs

$(function(){
  const $tabs   = $("#tabs");
  const $links  = $tabs.find("ul li a");
  const $panels = $tabs.children("div");

  // --- ARIA setup ---
  $tabs.attr("role", "tablist");

  $links.each(function (i) {
    const $a = $(this);
    const hash = $a[0].hash || $a.attr("href") || "";
    const $panel = hash ? $panels.filter(hash) : $();

    if ($panel.length) {
      const pid = $panel.attr("id") || hash.replace("#", "");
      $panel.attr("id", pid);
      $a.attr({ role: "tab", id: `tablink-${i}`, "aria-controls": pid });
    } else {
      $a.attr({ role: "tab", id: `tablink-${i}` });
    }
  });

  $panels.each(function (i) {
    $(this).attr({ role: "tabpanel", "aria-labelledby": `tablink-${i}` });
  });

  function showTab($link) {
    const target = $link[0].hash || $link.attr("href");
    if (!target || !$panels.filter(target).length) return;

    $links.removeClass("active").attr({ "aria-selected":"false", tabindex:"-1" });
    $link.addClass("active").attr({ "aria-selected":"true", tabindex:"0" }).focus();

    // fixed line ↓
    $panels.hide().attr("hidden", true)
           .filter(target).show().attr("hidden", false);
  }

  // ----- Initial State-------
  const hasHash   = window.location.hash && $panels.filter(window.location.hash).length;
  const $startTab = hasHash 
      ? $links.filter(`[href="${window.location.hash}"]`).first()
      : $links.first();

  $links.attr({ "aria-selected": "false", tabindex: "-1" });
  $panels.hide().attr("hidden", true);
  showTab($startTab);

  $tabs.on("click", "ul li a", function (e) {
    e.preventDefault();
    showTab($(this));
  });
});


  // Content Rotator

  

  function contentRotator(){

   let counter = 1;

    $(`#rotator blockquote:nth-child(${counter})`).fadeIn(2000, function(){
      if($(this).is("#rotator blockquote:last-child")){
        setTimeout(function(){
          $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function(){
            counter = 1;
            contentRotator();
          });
        }, 4000);
      }
      else{ 
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


  // Features Rotator 
  // Have features rotating vertically. 
  // When a paragraph is at the top of the container, pause for 3 seconds
  // Highlight active paragraph to the pink color 

  //Hints:
  //You can use either use setInterval method or setTimeout and recursion
  //The clone method might also be helpful
  
  
  
  
 
});




























