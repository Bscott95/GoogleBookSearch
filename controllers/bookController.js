const db = require("../models");

// Defining methods for the bookController
module.exports = {
  getAllBooks: function(req, res) {
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  addBook: function(req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  deleteBook: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
