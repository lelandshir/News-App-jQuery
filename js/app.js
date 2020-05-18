// console.log(`linked!, ` + $);
//query for #test button and have it return the value of the user #input from the form
// const $userInput = $(`#input`).val();
const $userInput = $('input[type="text"]').val();
// let link = `http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=61a0acd611c1417e8f154193a705fd5c`;

$(() => {
  $(`.button`).click((ev) => {
    const $userInput = $(`#userInput`).val();
    let link = `http://newsapi.org/v2/top-headlines?country=us&category=${$userInput}&apiKey=61a0acd611c1417e8f154193a705fd5c`;
    event.preventDefault();

    $.ajax({
      url: link,
      type: `GET`,
      limit: 20,
    })
      .then((data) => {
        // console.log(data);
        for (let i of data.articles) {
          for (let i = 0; i <= 20; i++) {
            if ($userInput === " ") {
              alert(`this field cannot be empty`);
            } else {
              let $results = $(`#results`); //main results div

              $(`#image`).append(`<img src="${data.articles[0].urlToImage}"/>`);
              $(`#title`).html(data.articles[0].title);
              $(`#author`).html(`${data.articles[0].author}`);
              $(`#source`).html(data.articles[0].source.name);
              $(`#link`).append(
                `<a href="${data.articles[0].url}" target="_blank">click here</a>`
              );
              $(`#description`).html(`${data.articles[0].description}`);
              $(`#date`).html(`${data.articles[0].publishedAt}`);

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
