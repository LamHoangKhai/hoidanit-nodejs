const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

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

router.post("/test", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.send({ message: "No file uploaded" });
  }

  return res.send({ filename: req.file.filename });
});

module.exports = router;
