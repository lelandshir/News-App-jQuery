// console.log(`linked!, ` + $);
//query for #test button and have it return the value of the user #input from the form
// const $userInput = $(`#input`).val();
const $userInput = $('input[type="text"]').val();
let link = `http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=61a0acd611c1417e8f154193a705fd5c`;

$(() => {
  $(`#test`).click((ev) => {
    event.preventDefault();

    $.ajax({
      url: link,
      type: `GET`,
      limit: 20,
    })
      .then((data) => {
        // console.log(data);
        for (let i of data.articles) {
          for (let i = 0; i < 20; i++) {
            if ($userInput === " ") {
              alert(`this field cannot be empty`);
            } else {
              console.log(data);

              let $results = $(`#results`); //main results div

              $(`#image`).append(`<img src="${data.articles[i].urlToImage}"/>`);
              $(`#title`).html(data.articles[i].title);
              $(`#author`).html(`${data.articles[i].author}`);
              $(`#source`).html(data.articles[i].source.name);
              $(`#link`).append(
                `<a href="${data.articles[i].url}" target="_blank">click here</a>`
              );
              $(`#description`).html(`${data.articles[i].description}`);

              // $(`#article`).html(data.articles[i].title);
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

//honor agreement and add provider to bottom of page
