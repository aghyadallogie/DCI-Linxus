const router = require("express").Router();
const sendConfirmationEmail = require('../services/EmailService');

router.post('/', async (req, res) => {
    // const { email } = req.body;
    // console.log(email);
    sendConfirmationEmail(req.body);
});

module.exports = router;