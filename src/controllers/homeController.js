const connectDB = require("../config/database");
const { getAllUsers, getUser } = require("../services/CRUD");

const getHomepage = async (req, res) => {
  const results = await getAllUsers();
  return res.render("home.ejs", { ListUsers: results });
};

const getFromCreateUsers = (req, res) => {
  return res.render("form-create-users.ejs");
};

const getFromEditUsers = async (req, res) => {
  const results = await getUser();
  console.log(results);
  return res.render("form-edit-users.ejs", { User: results });
};

const postCreateUser = async (req, res) => {
  const { Email, Name, City } = req.body;
  const [results, fields] = await connectDB.query(
    `INSERT INTO Users(email,name,city) VALUES(?,?,?) `,
    [Email, Name, City]
  );
  return res.send("Thành Công");
};

const postEditUser = async (req, res) => {
  const { Email, Name, City } = req.body;
  const [results, fields] = await connectDB.query(
    `UPDATE  Users SET email = ? , name = ? ,city = ? WHERE id = ? `,
    [Email, Name, City]
  );
  return res.send("Thành Công");
};

module.exports = {
  getHomepage,
  getFromEditUsers,
  postCreateUser,
  getFromCreateUsers,
  postEditUser,
};
