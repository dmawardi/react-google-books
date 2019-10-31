const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Sample document
// {
//   "title": "Jack Rabbit",
//   "authors": "Joey Sanchez",
//   "link": "https://books.google.com.au/books?id=hapdAAAAQBAJ&printsec=frontcover&dq=a+tale+of+ice+and+fire&hl=en&sa=X&ved=0ahUKEwiy7Jfvo8PlAhVX8HMBHT1EC2oQ6AEIPjAC#v=onepage&q=a%20tale%20of%20ice%20and%20fire&f=false",
//   "image": "https://upload.wikimedia.org/wikipedia/commons/9/95/The_World_of_Ice_and_Fire.JPG",
//   "identifier": "4759987bhjfjak3"
// }

// Create book Schema
const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  authors: { type: String, required: true },
  description: String,
  image: String,
  link: String,
  identifier: String,
  date: { type: Date, default: Date.now }
});

// Build schema object into model using mongoose
const Book = mongoose.model("Book", bookSchema);

// Export
module.exports = Book;
