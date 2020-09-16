const router = require("express").Router();
const Reference = require("../model/Reference");
const { getReferences, addReference, patchReferences } = require("../controllers/referencesController");

router.route('/:id').patch(patchReferences);
router.route('/').get(getReferences);
router.route('/add').post(addReference);

module.exports = router;