// console.log($);
$(() => {});

// $(() => {
//   const $results = $(`.results`);
//   const getAllArticles = (maxItemID) => {};
//   let link = `https://cors-anywhere.herokuapp.com/`;
//   let url = `https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos/`;
//
//   // $(`.button`).on(`click`, (event) => {
//   //   console.log(`sup`);
//   // });
//   //to use other cam types
//   $(`#image`).on(`click`, (event) => {
//     console.log(`hey`);
//     let $img = $(`<img>`).appendTo($images);
//   });
//
//   $.ajax({
//     url: link + url,
//     type: `GET`,
//   }).then((data) => {
//     const $test = $(`#test`).on(`click`, (event) => {
//       event.preventDefault();
//       console.log(data);
//
//       //properties user can access: camera name; camera type; image & image caption;
//       // console.log(data[`latest_photos`]);
//       // const $camImg = $(data[`latest_photos`][0].img_src);
//       // TODO: render each item as date, camera name, and image at 320 pts
//     });
//     // .catch((error) => {
//     // console.log(error);
//   });
// });

//////////////////////////////////////
//
// $(() => {
//   const $container = $(`div.container`); //grab container div
//   //button click function below will execute ajax get request
//   let $test = $(`#test`).on(`click`, (ev) => {
//     // console.log(`success`);
//     ev.preventDefault(); //prevent page from reloading
//
//     let link = `https://cors-anywhere.herokuapp.com/`;
//     // let $url = `https://gateway.marvel.com:443/v1/public/characters?`;
//     let $url = `https://hacker-news.firebaseio.com/v0/`;
//
//     $.ajax({
//       url: link + $url,
//       type: `GET`, //type of request being made is
//       data: {
//         limit: 10,
//         apikey: ``,
//       }, //end data
//     })
//       .then((data) => {
//         console.log(data);
//         //begin success function
//       })
//       .catch((error) => {
//         console.log(error);
//       }); //end error
//   }); //end on.click
// }); //end=>$
//
// ///////////////////////
// // jQery.getJSON(), equivalent to =>
// // $.ajax({
// //   datatype: 'json',
// //   url: url,
// //   data: data,
// //   then: then,
// //   catch: error:
// // });
// // 6e67cd092d90c36ff3b21de5bb446f2b723ae01d
//
