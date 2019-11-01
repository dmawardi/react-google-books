import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import Results from "./components/Results";
import API from "./utils/API";
// import { BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

// Create class App for overall application
class App extends Component {
  // State
  state = {
    // Stored books
    books: [],
    // Current Search
    bookSearch: "",
    // Current page
    page: "Saved",
    // Current Google Books Search Results
    searchedBooks: [],
    // Message to display for user search status
    userSearchMessage: ""
  };

  // Changes state of page when click detected
  handlePageChange = event => {
    event.preventDefault();
    // Grab clicked item's inner text
    const targetPage = event.target.innerText;
    console.log(event.target);

    console.log("setting state \ninnertext" + targetPage);
    // Set state variable page to new page values
    this.setState({
      page: targetPage
    });
  };

  // As search input is changing
  handleInputChange = event => {
    // Destructure the value property off of event.target
    const { value } = event.target;
    // Update the bookSearch state
    this.setState({
      bookSearch: value
    });
  };

  // Function to handle message for user's search status
  displayToUserSearchMessage = message => {
    // Set state user search message value to new message
    this.setState({
      userSearchMessage: message
    });
  };

  // Make API call and return
  returnAllSavedBooks = () => {
    // Make call using API
    API.returnSavedBooks().then(data => {
      console.log(data.data);
      this.setState({
        books: data.data
      });
    });
  };

  // Delete book using id
  handleDeleteBookById = event => {
    let idToDelete = event.target.getAttribute("data-id");
    console.log("Attempting delete", idToDelete);
    // Save book using api call and stored object
    API.deleteBook(idToDelete)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  // Save book using id to search in states' result variable
  handleBookSaveById = event => {
    let idToSave = event.target.getAttribute("data-id");
    console.log("Attempting save", idToSave);

    // Iterate looking for match
    for (let i = 0; i < this.state.searchedBooks.length; i++) {
      // If Id match found
      if (this.state.searchedBooks[i].id === idToSave) {
        console.log("id found!", this.state.searchedBooks[i]);

        // Extract values from found item
        const { title, infoLink, description } = this.state.searchedBooks[
          i
        ].volumeInfo;
        const thumbnail = this.state.searchedBooks[i].volumeInfo.imageLinks
          .thumbnail
          ? this.state.searchedBooks[i].volumeInfo.imageLinks.thumbnail
          : "https://images.unsplash.com/photo-1572545227797-609a2864113e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80";
        console.log(this.state.searchedBooks[i].volumeInfo.industryIdentifiers);
        const identifier = this.state.searchedBooks[i].id || "Unknown";
        // Join array of authors with commas separating and remove last comma
        const authors = this.state.searchedBooks[i].volumeInfo.authors.length
          ? this.state.searchedBooks[i].volumeInfo.authors.join(", ")
          : // .substring(0, -2)
            "Anonymous";
        // Create object for API call
        var bookToStore = {
          title: title,
          authors: authors,
          link: infoLink,
          image: thumbnail,
          identifier: identifier,
          description: description
        };
      }
    }

    // Save book using api call and stored object
    API.saveBook(bookToStore)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  // Once mounted, populate with saved books
  componentDidMount = () => {
    this.returnAllSavedBooks();
  };

  // Handle when the form is submitted: perform a search
  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    console.log("Form submitted!");
    console.log("State:", this.state);
    this.displayToUserSearchMessage("Searching...");

    event.preventDefault();

    // Use API to get books
    API.getBooks(this.state.bookSearch)
      .then(res => {
        console.log(res);
        this.setState({
          searchedBooks: res.data,
          userSearchMessage: ""
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          userSearchMessage: "Search Failed"
        });
      });
  };

  render() {
    return (
      <div>
        {/* Nav */}
        <Nav handlePageChange={this.handlePageChange} />
        {/* Jumbotron */}
        <Jumbotron />

        {/* booksearch container */}
        <Container>
          {/* If page state is at search, then display search form */}
          {this.state.page === "Search" ? (
            <Row>
              <Col size="md-12">
                <form>
                  <Container>
                    <Row>
                      <Col size="xs-9 sm-10">
                        {/* Display user search message if searching */}

                        <Input
                          name="bookSearch"
                          value={this.state.bookSearch}
                          onChange={this.handleInputChange}
                          placeholder="Search For a Book"
                        />
                        <span>{this.state.userSearchMessage}</span>
                      </Col>
                      <Col size="xs-3 sm-2">
                        {/* Submit Search button */}
                        <Button
                          onClick={this.handleFormSubmit}
                          type="success"
                          className="input-lg"
                        >
                          Search
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </form>
              </Col>
            </Row>
          ) : (
            // Else return an empty div
            <></>
          )}

          {/* Book Results: Show saved books if on saved page, else show search results */}

          <Row>
            <Col size="12">
              <Container>
                <Results
                  pageState={this.state.page}
                  books={this.state.books}
                  searchedBooks={this.state.searchedBooks}
                  handleBookDelete={this.handleDeleteBookById}
                  handleBookSave={this.handleBookSaveById}
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
