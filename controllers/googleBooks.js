const axios = require("axios");
// const router = require("express").Router();

function googleBookSearch(titleToSearch) {
  let searchQuery =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    encodeURIComponent(titleToSearch);

  return axios.get(searchQuery);
}

// { data: { results } }
router.get("/:title", (req, res) => {
  googleBookSearch(req.params.title);
});

module.exports = router;
