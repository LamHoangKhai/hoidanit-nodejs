const express = require("express");
const router = express.Router();

//declare route
router.get("/", (req, res) => {
  res.send("Hello ExpressJS2");
});

router.get("/ejs", (req, res) => {
  res.render("example.ejs");
});

module.exports = router;
