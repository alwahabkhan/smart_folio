var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController')
/* GET home page. */

router.post('/signup', controller.signup)
router.post('/login', controller.login)
module.exports = router;