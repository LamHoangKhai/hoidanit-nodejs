const express = require("express");
const router = express.Router();
const {
  getHomepage,
  postCreateUser,
  getFromCreateUsers,
  getFromEditUsers,
  postEditUser,
} = require("../controllers/homeController");

//declare route
router.get("/", getHomepage);

//Router Create User
router.get("/form-create-users", getFromCreateUsers);
router.post("/create-user", postCreateUser);
//Router Create Edit
router.get("/form-edit-users", getFromEditUsers);
router.post("/edit-user", postEditUser);

module.exports = router;
