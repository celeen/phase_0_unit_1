#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  
	**Elements Tab: one can easily choose the element, double click on it with the left pane (HTML section) or in the right pane (among the css), and alter it.**
	
	**Source Tab: this is similar to the elements tab, but arranged differently; it is a copy of the source folder, and will change the code *more* permanently, but still not completely permanently.**
  
  * Javascript Debugging
  
  	**Console Tab: Gives you all kinds of direct access to your javascript files that I don't completely understand yet. I think the important part of the console tab, and of javascript debudding is devtools' features that allow interaction with the time-based, interactive elements of javascript.**
  
  * Performance Optimization 
  
  	**Network Tab: Maps out the response time if each additional file that the html file is calling upon, and allows minifying and other useful optimization tools.**
  

* What's the quick key for your OS to spawn the Dev Tools inspector?

	**Command + Option + I**



* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  
  	**#0b0f11; The hex looks like a light black. Not a complete absence of color... just a dark dark dark grey.**
  
  * Tweak the background color to white.
  
  	**ok!**
  
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  
  	**ok!**
  
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  
  	**ok!**
  
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  
  	**ok!**
  
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
  
  	**ok!**

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.


	**In the CSS for the div, the background is set to an image, which is what we see. You *can* tweak the color of the text "The Most important things ar enot things", you would also need to tweak the text-indent (which is set to -9999, which is off the page) in order to be able to see it, though. You cannot tweak the same text, which appears within the image. They've arranged for the code file to contain a text-based summary of the image background, which is really quite beautiful.**


* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  
  	**92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png; The image of Times Square.**

  
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  
  	**I went to the network tab of devtools, and sorted the elements by size. I picked the image at the top of the list: http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png , which is 316KB**


  

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

	**885.8KB can be eliminated just by optimizing the images!**
	
	