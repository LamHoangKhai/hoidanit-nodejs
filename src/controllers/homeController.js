const connectDB = require("../config/database");
const { getAllUsers, getUser } = require("../services/CRUD");

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
  const [results, fields] = await connectDB.query(
    `INSERT INTO Users(email,name,city) VALUES(?,?,?) `,
    [Email, Name, City]
  );
  return res.send("Thành Công");
};

// Handle Edit User
const getFromEditUsers = async (req, res) => {
  const results = await getUser(req.params);
  return res.render("form-edit-users.ejs", { User: results });
};

const postEditUser = async (req, res) => {
  const { Email, Name, City } = req.body;
  const userId = req.params[0];
  const [results, fields] = await connectDB.query(
    `UPDATE  Users SET email = ? , name = ? ,city = ? WHERE id = ${userId} `,
    [Email, Name, City]
  );

  return res.send("Thành Công");
};

//Handle Delete User
const postDeteleUser = async (req, res) => {
  const userId = req.params[0];
  const [results, fields] = await connectDB.query(
    `DELETE FROM Users WHERE id = ${userId}`
  );
  return res.send("Thành Công");
};
module.exports = {
  getHomepage,
  getFromEditUsers,
  postCreateUser,
  getFromCreateUsers,
  postEditUser,
  postDeteleUser,
};
