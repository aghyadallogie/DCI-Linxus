const router = require("express").Router();
const User = require("../model/User");
const verify = require("./verifyToken");
const { getUsers, getUser, addUser, loginUser, searchUsers } = require("../controllers/usersController");

router.route('/').get(verify, getUsers);
router.route('/:id').get(verify, getUser);
router.route('/add').post(addUser);
router.route('/login').post(verify, loginUser);
router.route('/search').post(verify, searchUsers);

module.exports = router;