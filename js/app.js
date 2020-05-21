$(() => {
  alert(
    `Hi! Welcome to theFeed App!\nSimply tap a tag to fetch the nation's top headlines.`
  );

  $(`#clear`).click((ev) => {
    $(`#container-2`).empty();
    $(`#pull`).empty();
  });

  $(`.button`).click((ev) => {
    let $tag = $(ev.currentTarget).html();
    $(`.input`).val($tag);
  });

  $(`.button`).click((ev) => {
    // $(`.input`).on(`keypress`, (ev) => {
    let userInput = $(`.input`).val();

    let link = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=${userInput}&apiKey=7cd19b7aa2bd403ba7770919b14157c2`;

    if ($(`.input`).val() != "") {
      $(`#container-2`).empty();
      $(`#text`).empty();

      event.preventDefault();

      $.ajax({
        url: link,
        type: `GET`,
      })
        .then((data) => {
          let $text = $(
            `<h4 id="pull">here are the nation's top headlines in ${userInput}.</h4>`
          )
            .hide()
            .appendTo(`#text`)
            .fadeIn(`slow`);
          for (let i = 0; i <= data.articles.length; i++) {
            let $results = $(`<div id="results">
                  <h3 id="title">${data.articles[i].title}</h3>
                  <p id="source">${data.articles[i].source.name} | <span id="dateTime"> ${data.articles[i].publishedAt}</span></p>
                  <div id="image"><img src="${data.articles[i].urlToImage}"/></div>
                  <p id="description">${data.articles[i].description}</p>
                  <p id="author">${data.articles[i].author}</p>
                  <p id="story">for full story <a id="link" href="${data.articles[i].url}" target="_blank">tap me</a></p>
                  </div>`)
              .hide()
              .appendTo(`#container-2`)
              .fadeIn(3000);
            $(`.input`).val("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
});
