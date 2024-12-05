const { signupUser, getAllUser, getOneUser, signinUser } = require("../controller/userController");
const express = require('express');
const router = express.Router();
const {upload} = require('../config/multer')




router.route("/signup").post(upload, signupUser)
router.route('/getalluser').get(getAllUser)
router.route('/signin').post(signinUser)
router.route('/getOneUser/:id').get(getOneUser);


module.exports = router;