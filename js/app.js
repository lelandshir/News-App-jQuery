$(() => {
  $(`#clear`).click((ev) => {
    $(`#container-2`).empty();
  });

  $(`#searchTag`).click((ev) => {
    console.log(`clicked`);
    let $tag = $(`#searchTag`).html();
    $(`.input`).val($tag);
  });

  const promise = $(`.input`).on(`keypress`, (ev) => {
    let userInput = $(`.input`).val();
    console.log(userInput);
    let link = `https://newsapi.org/v2/top-headlines?country=us&category=${userInput}&apiKey=61a0acd611c1417e8f154193a705fd5c`;

    if (ev.keyCode == 13 && $(`.input`).val() != "") {
      $(`#container-2`).empty();
      event.preventDefault();
      $.ajax({
        url: link,
        type: `GET`,
      })
        .then((data) => {
          console.log(data);
          // console.log(data.articles);
          for (let i = 0; i <= data.articles.length; i++) {
            let $results = $(`<div id="results">
                 <h3 id="title">${data.articles[i].title}</h3>
                 <div id="image"><img src="${data.articles[i].urlToImage}"/></div>
                 <p id="description">${data.articles[i].description}</p></br>
                 <h4>Follow</h4><p id="link"><a href="${data.articles[i].url}" target="_blank">tap here for the full story</a></p>
                 <h4>Author</h4>
                 <p id="author">${data.articles[i].author}</p>
                 <h4>Source</h4>
                 <p id="source">${data.articles[i].source.name}</p>
                 <h4>Date/Time</h4>
                 <p id="date">${data.articles[i].publishedAt}</p>
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
