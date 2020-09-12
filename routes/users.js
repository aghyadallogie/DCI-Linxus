const router = require("express").Router();
const User = require("../model/User");
const verify = require("./verifyToken");
const multer = require('multer');
const fs = require('fs');
const { promisify } = require('util');
const { searchUsers, getMe } = require("../controllers/usersController");
// const upload = require("../middleware/upload");

// router.route('/').get( getUsers);
// router.route('/:id').get(verify, getUser);
router.route('/search').post(verify, searchUsers);
router.route('/me').get(verify, getMe);


const upload = multer();
const pipeline = promisify(require('stream').pipeline);

router.post('/upload', upload.single("file"), async function (req, res, next) {
    const { file, body: { name } } = req;
    if (file.detectedFileExtension !== ".jpg") next(new Error("Invalid File Type!"));

    const fileName = name + file.detectedFileExtension;
    await pipeline(file.stream, fs.createWriteStream(`${__dirname}/../public/uploads/${fileName}`));

    res.send("File Uploaded!")
})

module.exports = router;