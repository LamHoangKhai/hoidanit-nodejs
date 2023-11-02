const express = require("express");
const apiRouter = express.Router();
const {
  getAllUsersAPI,
  createUserAPI,
  updateUserAPI,
  deleteUserAPI,
} = require("../controllers/APIController");
//declare route
apiRouter.get("/users", getAllUsersAPI);
apiRouter.post("/create-user", createUserAPI);
apiRouter.put("/update-user/:userId", updateUserAPI);
apiRouter.delete("/delete-user/:userId", deleteUserAPI);
module.exports = apiRouter;
