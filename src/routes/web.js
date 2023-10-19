const express = require("express");
const router = express.Router();
const {
  getHomepage,
  postCreateUser,
  getFromCreateUsers,
  getFromEditUsers,
  postEditUser,
  postDeteleUser,
} = require("../controllers/homeController");

//declare route
router.get("/", getHomepage);

//Router Create User
router.get("/form-create-users", getFromCreateUsers);
router.post("/create-user", postCreateUser);
//Router Create Edit
router.get("/form-edit-users/:userId", getFromEditUsers);
router.post("/edit-user/:userId", postEditUser);

//Router Create Delete
router.get("/delete-users/:userId", postDeteleUser);
module.exports = router;
