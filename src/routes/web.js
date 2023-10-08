const express = require("express");
const router = express.Router();
const { getHomepage, getAbc } = require("../controllers/homeController");

//declare route
router.get("/", getHomepage);

router.get("/ejs", getAbc);

module.exports = router;
