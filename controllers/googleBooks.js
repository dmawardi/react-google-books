const axios = require("axios");

// Function for Google Books Search
function googleBookSearch(titleToSearch) {
  console.log("Running Google Books search query");

  // Build search Query
  let searchQuery =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    encodeURIComponent(titleToSearch);

  // Return as promise
  return axios.get(searchQuery);
}

module.exports = googleBookSearch;
