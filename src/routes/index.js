const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');

router.get('/getTestimonials', UserController.getTestimonials);

module.exports = router;