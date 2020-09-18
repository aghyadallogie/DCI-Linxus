const router = require("express").Router();
const Reference = require("../model/Reference");
const { getReferences, addReference } = require("../controllers/referencesController");

router.route('/').get(getReferences);
router.route('/add').post(addReference);

module.exports = router;