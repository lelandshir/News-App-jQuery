// console.log(`linked!, ` + $);
//query for #test button and have it return the value of the user #input from the form
// const $userInput = $(`#input`).val();
const $userInput = $('input[type="text"]').val();
// let link = `http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=61a0acd611c1417e8f154193a705fd5c`;

$(() => {
  //clear buton --working on emptying only the populated html
  $(`#clear`).click((event) => {
    // console.log(`hi`);
    $(`#results`).children().empty(`<p>`);
  });
  //on fetch click user searches for topic they type in=>topics are limited
  $(`#fetch`).click((ev) => {
    const $userInput = $(`#userInput`).val();
    let link = `http://newsapi.org/v2/top-headlines?country=us&category=${$userInput}&apiKey=61a0acd611c1417e8f154193a705fd5c`;
    event.preventDefault();
    //ajax get request
    $.ajax({
      url: link,
      type: `GET`,
      limit: 20,
    })
      .then((data) => {
        console.log(data);

        for (let i of data.articles) {
          for (let i = 0; i <= data.articles.length; i++) {
            if ($userInput === " ") {
              alert(`this field cannot be empty`);
            } else {
              let $results = $(`#results`);

              $(`#title`).html(`${data.articles[0].title}`);
              $(`#image`).html(`<img src="${data.articles[0].urlToImage}"/>`);
              $(`#description`).html(`${data.articles[0].description}`);
              $(`#link`).html(
                `<a href="${data.articles[0].url}" target="_blank">tap here for the full story</a>`
              );
              $(`#author`).html(`${data.articles[0].author}`);
              $(`#source`).html(`${data.articles[0].source.name}`);
              $(`#date`).html(`${data.articles[0].publishedAt}`);
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
