import React from "react";
import { BookListItem } from "../BookList";
import("./style.css");
// import Thumbnail from "../Thumbnail";
// import { Container, Row, Col } from "../Grid";

// Results renders Saved books (MongoDB) or searched books (Google Books)
export function Results(props) {
  console.log("Results props: ", props);
  if (props.pageState === "Saved") {
    return (
      <div>
        <h3>Saved Books</h3>

        {/* If state variable books has length  */}
        {props.books.length ? (
          // Iterate through books array
          props.books.map(function(data) {
            console.log("In props book loop");
            return (
              // Create a book list item
              <BookListItem
                key={data._id}
                id={data._id}
                title={data.title}
                thumbnail={data.image}
                authors={data.authors}
                description={data.description}
                link={data.link}
                pageState={props.pageState}
              />
            );
          })
        ) : (
          // Else, provide note that there are no books
          <h3 className="text-center">No books available!</h3>
        )}
      </div>
    );
  } else {
    /* Else if pagestate is something else */
    return (
      <div>
        <h3>Search Results</h3>

        {/* If state variable books has length  */}
        {props.searchedBooks.length ? (
          // Iterate through books array
          props.searchedBooks.map(function(data) {
            console.log(data.volumeInfo);
            // Extract required information
            const { title, infoLink, description } = data.volumeInfo;
            const thumbnail = data.volumeInfo.imageLinks.thumbnail || "";
            console.log(data.volumeInfo.industryIdentifiers);
            const identifier = data.id || "Unknown";
            // Join array of authors with commas separating and remove last comma
            const authors = data.volumeInfo.authors
              ? data.volumeInfo.authors.join(", ").substring(0, -2)
              : "Anonymous";

            return (
              // Create a book list item
              <BookListItem
                key={identifier}
                title={title}
                thumbnail={thumbnail}
                authors={authors}
                description={description}
                id={identifier}
                pageState={props.pageState}
                link={infoLink}
                bookSave={props.handleBookSave()}
              />
            );
          })
        ) : (
          // Else, provide note that there are no books
          <></>
        )}
      </div>
    );
  }
}

export default Results;
