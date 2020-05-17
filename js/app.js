// console.log(`linked!, ` + $);
//query for #test button and have it return the value of the user #input from the form

let link = `http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=61a0acd611c1417e8f154193a705fd5c`;

$(() => {
  const $userInput = $(`#input`).val();
  $(`#test`).click((ev) => {
    event.preventDefault();

    $.ajax({
      url: link,
      type: `GET`,
    })
      .then((data) => {
        // console.log(data);
        if ($userInput === " ") {
          alert(`this field cannot be empty`);
        } else {
          let $results = $(`#results`);
          let $author = $(`#author`).append(`${data.articles[0].author}`);
          // $results.append($author);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
