theFeed
Humble Search Engine
README

////////////////////////////////////////////////////////////////////////////////////

0. Pseudo code every step of the way. Make all variables semantic. Test each line of code.

1. In the html, I constructed a div with an ID of #results; the layout allowed for all relevant article data to be displayed; later this div would be removed from the html, only to be inserted later via the DOM when news articles populate the feed.

2. 80% of my elements received both a class and ID for more control in styling/positioning.

3. I wrote out an Ajax get request using jQuery to access the News API and once I received a key, I logged the data to begin learning how to work with the array of objects returned and which data from the object I wanted to display.

4. I querySelected each element by id and changed it's inner html to the value of it's respective key from the News API data; I used template literals to aid in how the text reads.

5. I created a for loop to iterate through the array of objects

6. Once I got the data loading how I wanted it to, I added functionality to clear the results automatically upon a new search; I added tags in the form of buttons that can be clicked to add the value to the search bar for quicker searches; I added a button to clear the feed

7. Lastly I applied CSS and focused on making the document responsive for mobile

8. Once the positioning, functionality and CSS was up to PAR, I went back and tightened up my code, getting rid of anything I didn't need such as pseudocode that was no longer relevant and console.logs.

////////////////////////////////////////////////////////////////////////////////////

DESIRED ADDITIONS:

1. I would like to add some buttons to the story tiles;
    -one that allows the user to save a story to read later
    -one to share a story with from the tile
    -one to

2. I'd like to broaden the search topics we can search for

3. I want the suggested search tags to be draggable and droppable rather than click and 13

////////////////////////////////////////////////////////////////////////////////////
WINS:
0.  I sent the live link to my mother and a few friends, many have reported that it looks great on their mobile device and just about everyone has found themselves sort of mindlessly scrolling through news and following the links to headlines... which is what we want 

1. Lots of failures -- a calm sea never made a skilled sailor sort of feeling.

2. I found success using jQuery to build an AJAX get request to access a plentiful API; I feel comfortable, to varying degrees traversing the data returned

3. I built my first app. It's primitive, but considering I began 3 weeks and had never written a line of code,  this is the biggest win of them all.

////////////////////////////////////////////////////////////////////////////////////
STRUGGLES:

1. In many cases I had to start over; I learned that sometimes no matter how much your code looks like it should work, if the API is trash, like the Census API run by the government, maybe move on.

2. As all API's are different, I had to find one that really spoke my language; this changed my plans, but it also taught me a great deal about API's and AJAX in general and made me more flexible and persistent when coding

3. I should seek to remember that sometimes you need to construct the html, only to remove it later, all to add it back via the dom. This is a technique I employed when building my functional to-do list app and it really comes in handy.

////////////////////////////////////////////////////////////////////////////////////

Léland Shirley
W03D05 - GENERAL ASSEMBLY
