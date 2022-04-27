const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.get("/authors", controllers.api.v1.authorController.showAuthors);
// apiRouter.get("/books", controllers.api.v1.showBooks);
// apiRouter.get("/books/buy/:id", controllers.api.v1.buyBook);
// apiRouter.get("/books/add", controllers.api.v1.formBook);
// apiRouter.post("/books/add", controllers.api.v1.addBook);
// apiRouter.get("/books/emptyList", controllers.api.v1.emptyList);
// apiRouter.get("/books/restock/:id", controllers.api.v1.formRestock);
// apiRouter.post("/books/restock:id", controllers.api.v1.restock);
// apiRouter.get("/books/delete:id", controllers.api.v1.deleteBook);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
