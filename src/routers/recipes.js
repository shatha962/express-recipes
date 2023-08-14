const express = require("express");
const auth = require('../middleware/auth');
const router = express.Router();

const { getAll, get, save, update, remove } = require("../controllers/recipes");

router.route('/').get(getAll).post(auth.authenticate(), save);

// Modify the following line
router.route("/:id").get(get).put(auth.authenticate(), update).delete(auth.authenticate(), remove);

module.exports = router;