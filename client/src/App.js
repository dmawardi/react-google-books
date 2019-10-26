import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    books: [],
    bookSearch: "",
    page: "Saved"
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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.bookSearch)
      .then(res => {
        console.log(res.data);
        this.setState({ recipes: res.data });
      })
      .catch(err => console.log(err));
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
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
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

          {/* Book Results */}
          <Row>
            <Col size="12">
              <Container>
                <h3>Saved Books</h3>
                <BookListItem />
                {/* If static variable books has length */}
                {/* {this.state.books.length ? (
                  this.state.books.map(function(data) {
                    console.log(data);
                    return (
                      <BookListItem
                        title={data.title}
                        thumbnail={data.thumbnail}
                        ingredients={data.ingredients}
                        href={data.href}
                      />
                    );
                  })
                ) : (
                  // Else, empty div
                  <></>
                )} */}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
