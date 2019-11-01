const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // Find all sorted by date
  findAll: function(req, res) {
    return db.Book.find().sort({ date: -1 });
  },

  // Find by ID
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Remove book by id from db
  removeById: function(id) {
    db.Book.remove({ _id: id }, err => {
      if (err) console.error(err);
      console.log("Successfully removed!");
    });
  },
  // Create a new book document
  create: function(req, res) {
    console.log(req.body);
    return db.Book.create(req.body);
  }
};
