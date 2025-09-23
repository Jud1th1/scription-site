# 📝 JS - Building Interactive Elements Challenges

## Challenge 1 - Smooth Scroll:

- When the user clicks the links in the navigatin bar it should scroll to the correct point on the page
- When the user clicks on the logo it should scroll to the very top of the page

`Hints:`

- See if you can modify the jQuery smooth scroll script from the first lesson in this module to make this work.
- You might find it easiest to use two click handlers. One that targets the links in the navigation and one that targets the logo.
- Also to make the animation feel snappy, I set it at 600 miliseconds and I used easInCirc easing. The easing plugin is already included on the page.
- Be sure to put the entire script inside an IIFE (Immediately Invoked Function Expression), so that no varaibles end up in the global scope

## Challenge 2 - Flexslider

- Turn the image at the top of the page into a flexslider.
- Add the link to the Flexslider CSS file to the index.html file
- Add the markup for the additional slides to the index.html file
- Add the link to the flexslider JS script to the bottom of the index.html file
- Adjust styling on the CSS file
- Add the appropriate script to the script.js file to initialize the slider

## Challenge 3 - Tabs

- For the challenge, add the script to make the tabs work in the pricing section.

`Hints:`

- Use the tabs lesson in the second course. The only real adjustments you will need to make is the background color settings
- If you use the plain JS version of the script, you will need to add a few styles to the stylesheet

## Challenge 4 - Content Rotator

- Add the content rotator for the client quotes for this challenge. You will need to add more markup for the additional quotes, which are provided in snippets
- Modify the script so that it is rotating the blockquptes instead of the paragraphs
- Add these two rules to the stylesheet in the listen section

```
#rotator{
    min-height: 350px;
}

#rotator blockquote {
    display: none;
}
```

- Then add this rule in the stylesheet media query for the 1020px section

```
#rotator{
    min-height: 550px;
}
```

## Challenge 5 - Feature Rotator

- This last challenge is the hardest because there is no script to refer to earlier in the course. You will have to figure this one out from scratch

`Hints:`

- You can use either use setInterval method or setTimeout and recursion
- The clone method might also be helpful
