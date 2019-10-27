import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import Results from "./components/Results";
import API from "./utils/API";
// import { BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    books: [],
    bookSearch: "",
    page: "Saved",
    searchedBooks: [],
    userSearchMessage: ""
  };

  handlePageChange = event => {
    event.preventDefault();
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    // const { name, value } = event.target;
    const targetPage = event.target.innerText;
    console.log(event.target);
    // console.log("name: ", name, "\nValue: ", value);
    // console.log("inner", inner);
    console.log("setting state \ninnertext" + targetPage);
    this.setState({
      page: targetPage
    });

    // console.log("Current State: " + this.state.page);
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    this.setState({
      bookSearch: value
    });
    console.log(this.state.bookSearch);
  };

  displayToUserSearchMessage = message => {
    this.setState({
      userSearchMessage: message
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    console.log("Form submitted!");
    this.displayToUserSearchMessage("Searching...");

    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => {
        console.log(res.data.items);
        this.setState({
          searchedBooks: res.data.items,
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
                        <span>{this.state.userSearchMessage}</span>
                        <Input
                          name="bookSearch"
                          value={this.state.bookSearch}
                          onChange={this.handleInputChange}
                          placeholder="Search For a Book"
                        />
                      </Col>
                      <Col size="xs-3 sm-2">
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
