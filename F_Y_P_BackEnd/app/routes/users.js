var express = require("express");
var router = express.Router();
// var passport = require("passport");
// var authenticate = require("../authenticate");
const bodyParser = require("body-parser");
var { signup, login } = require("../controllers/userController");
const userModel = require("../models/user");
router.use(bodyParser.json());

router.post("/signup", signup);

router.post("/login", login);



module.exports = router;