import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(titleToSearch) {
    // let searchQuery =
    //   "https://www.googleapis.com/books/v1/volumes?q=" +
    //   encodeURIComponent(titleToSearch);

    let searchQuery = "/api/getBooks/" + titleToSearch;

    return axios.get(searchQuery);
  }
};
