1. In plain HTML, I first build a div with an id of results. I want each news article to appear in the users News Feed when they click the fetch button. After that I styled the page with CSS.

Results Div:
<div id="results">
  <!--  -->
  <h3 id="title"></h3>
  <div id="image"></div>
  <p id="description"></p></br>
  <h4>Follow</h4><p id="link"></p>
  <p><center>_________________________________________________________________________</center></p></br>
  <h4>Author&nbsp</h4>
  <p id="author"></p>
  <h4>Source&nbsp</h4>
  <p id="source"></p>
  <h4>Date/Time&nbsp</h4>
  <p id="date"></p>
</div>
////////////////////////////////////////////
I wrote out an Ajax get request using jquery to access the News API and once I received a key, I logged the data to begin learning how to work with the array of objects returned.

I querySelected each element by id and changed it's inner html to the value of it's respective key from the data. I used template literals and ultimately copied each one into it's rightful place on the #results div

Query Selected Elements + Proposed changes to their inner HTML
 $(`#title`).html(`${data.articles[i].title}`);
// $(`#image`).html(`<img src="${data.articles[i].urlToImage}"/>`);
// $(`#description`).html(`${data.articles[i].description}`);
// $(`#link`).html(
//   `<a href="${data.articles[i].url}" target="_blank">tap here for the full story</a>`
// );
// $(`#author`).html(`${data.articles[i].author}`);
// $(`#source`).html(`${data.articles[i].source.name}`);
// $(`#date`).html(`${data.articles[i].publishedAt}`);
////////////////////////////
