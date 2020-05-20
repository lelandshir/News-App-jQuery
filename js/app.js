$(() => {
  $(`#clear`).click((ev) => {
    $(`#container-2`).empty();
  });
  //
  $(`.searchTag`).click((ev) => {
    let $tag = $(ev.currentTarget).html();
    $(`.input`).val($tag);
  });

  $(`.input`).on(`keypress`, (ev) => {
    let userInput = $(`.input`).val();

    let link = `https://newsapi.org/v2/top-headlines?country=us&category=${userInput}&apiKey=61a0acd611c1417e8f154193a705fd5c`;

    if (ev.keyCode == 13 && $(`.input`).val() != "") {
      $(`#container-2`).empty();
      event.preventDefault();
      $.ajax({
        url: link,
        type: `GET`,
      })
        .then((data) => {
          for (let i = 0; i <= data.articles.length; i++) {
            let $results = $(`<div id="results">
                 <h3 id="title">${data.articles[i].title}</h3>
                  <p id="source">${data.articles[i].source.name} | <span id="dateTime"> ${data.articles[i].publishedAt}</span></p>
                 <div id="image"><img src="${data.articles[i].urlToImage}"/></div>
                 <p id="description">${data.articles[i].description}..<a href="${data.articles[i].url}" target="_blank"> Full Story</a></p>
                 <p id="author">${data.articles[i].author}</p>
               </div>`).appendTo(`#container-2`);
            $(`.input`).val("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
});
