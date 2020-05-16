// console.log(`linked!, ` + $)
$(() => {
  const $container = $(`div.container`); //grab container div
  //button click function below will execute ajax get request
  let $test = $(`#test`).on(`click`, (ev) => {
    // console.log(`success`);
    ev.preventDefault(); //prevent page from reloading

    let link = `https://cors-anywhere.herokuapp.com/ `;
    let $url = `api.census.gov/data/2018/acs/acs1?get=NAME,group(B01001)&for=us:1&key=ddb2cafabd7669c98d4b1ce03bd7b50f5be0f624`;

    $.ajax({
      url: link + $url,
      type: `GET`, //type of request being made is
      data: {
        $limit: 100,
        key: "",
      }, //end data
    })
      .then((data) => {
        console.log(data);
        //begin success function
      })
      .catch((error) => {
        console.log(error);
      }); //end error
  }); //end on.click
}); //end=>$
