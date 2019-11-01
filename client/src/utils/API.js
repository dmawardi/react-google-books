import axios from "axios";

// Export an object containing API call functions
export default {
  // Function to get book results from Google Books
  getBooks: function(titleToSearch) {
    let searchQuery = "/api/getBooks/" + titleToSearch;
    // Return promise to resolve
    return axios.get(searchQuery);
  },

  // Return all saved books
  returnSavedBooks: function() {
    return axios.get("/api/books/savedBooks");
  },

  // Delete a book using its id
  deleteBook: function(idToDelete) {
    return axios.delete("/api/books/savedBooks/" + idToDelete);
  }
};
