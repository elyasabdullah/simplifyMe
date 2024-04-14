const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController')

router.route('/sendotp')
    .post(otpController.sendOTP);

router.route('/verifyotp')
    .post(otpController.verifyOTP)

module.exports = router;