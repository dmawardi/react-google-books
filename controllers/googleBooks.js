const axios = require("axios");
// const router = require("express").Router();

function googleBookSearch(titleToSearch) {
  console.log("Running Google Books search query");
  let searchQuery =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    encodeURIComponent(titleToSearch);
  // ":keyes&key=" +
  // process.env.API_KEY;

  return axios.get(searchQuery);
}

// { data: { results } }
// router.get("/:title", (req, res) => {
//   googleBookSearch(req.params.title)
//     .then(response => {
//       res.json(response.data.items);
//     })
//     .catch(err => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// });

// googleBookSearch("Lord of the Flies").then(res => {
//   console.log(res);
// });

module.exports = googleBookSearch;
