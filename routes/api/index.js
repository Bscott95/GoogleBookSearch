const router = require("express").Router();
const bookController = require("./../../controllers/bookController");

router
  .route("/books")
  .post(bookController.addBook)
  .get(bookController.getAllBooks);
router.route("/books/:id").delete(bookController.deleteBook);

module.exports = router;
