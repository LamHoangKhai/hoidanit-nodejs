const connectDB = require("../config/database");
const {
  getAllUsers,
  getUser,
  updateUser,
  createUser,
  deleteUser,
} = require("../services/CRUD");

const getHomepage = async (req, res) => {
  const results = await getAllUsers();
  return res.render("home.ejs", { ListUsers: results });
};
// Handle Create User
const getFromCreateUsers = (req, res) => {
  return res.render("form-create-users.ejs");
};

const postCreateUser = async (req, res) => {
  const { Email, Name, City } = req.body;
  await createUser({ Email, Name, City });
  return res.redirect("/");
};

// Handle Edit User
const getFromEditUsers = async (req, res) => {
  const result = await getUser(req.params.userId);
  const user = result && result.length > 0 ? result[0] : {};
  return res.render("form-edit-users.ejs", { User: user });
};

const postEditUser = async (req, res) => {
  const { Email, Name, City } = req.body;
  const userId = req.params.userId;
  await updateUser({ Email, Name, City, userId });
  return res.redirect("/");
};

//Handle Delete User
const postDeteleUser = async (req, res) => {
  const userId = req.params.userId;
  await deleteUser({ userId });
  return res.redirect("/");
};

module.exports = {
  getHomepage,
  getFromEditUsers,
  postCreateUser,
  getFromCreateUsers,
  postEditUser,
  postDeteleUser,
};
