const express = require("express");
const router = express.Router();

const { getAll, get, save, update, remove } = require("../controllers/recipes");

router.get("/", getAll);
router.post("/", save);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", remove);

// chaining
// Route `GET` and `POST` HTTP requests for `/`
router.route('/').get(getAll).post(save);

// Route `GET`, `PUT`, and `DELETE` HTTP requests for `api/v1/recipes/:id`
// router.route('/:id').get(get).put(update).delete(delete);

module.exports = router;