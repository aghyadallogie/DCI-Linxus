const router = require("express").Router();
const sendConfirmationEmail = require('../services/EmailService');

router.post('/', (req, res) => {
    const { user, userId } = req.body;
    const response = sendConfirmationEmail(user, userId);
    if (!response) res.status(400).send(response);
    res.status(200).send("Email Sent!");
});

module.exports = router;