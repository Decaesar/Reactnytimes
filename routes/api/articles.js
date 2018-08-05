
const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.get("/articles", (req, res) => {
axios
.get("https://nytarticle-search-fsf.herokuapp.com/", { params: req.query })
.then(({ data: { results } }) => res.json(results))
.catch(err => res.status(422).json(err));
});

router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
