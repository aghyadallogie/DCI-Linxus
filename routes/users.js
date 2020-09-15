const router = require('express').Router();
const User = require('../model/User');
const verify = require('./verifyToken');
const multer = require('multer');
const fs = require('fs');
const { promisify } = require('util');
const {
  searchUsers,
  getMe,
} = require('../controllers/usersController');
const upload = require('../middleware/multer-config');

// router.route('/').get( getUsers);
// router.route('/:id').get(verify, getUser);
router.route('/search').post(verify, searchUsers);
router.route('/me').get(verify, getMe);

const pipeline = promisify(require('stream').pipeline);

router.post(
  '/:id/upload',
  upload.single('file'),
  async function (req, res, next) {
    //Find the user and update the image
    const url = 'http://' + req.get('host');
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { imageUrl: `${url}/${req.file.path}` },
      {
        new: true,
        runValidators: true,
      }
    );
    res.send(user);
  }
);

module.exports = router;
