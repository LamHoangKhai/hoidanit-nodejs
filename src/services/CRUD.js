const connectDB = require("../config/database");
const getAllUsers = async () => {
  const [results, fields] = await connectDB.query("select * from Users");
  return results;
};

const getUser = async (userId) => {
  const [results, fields] = await connectDB.query(
    `select * from Users WHERE id = ${userId}`
  );
  return results;
};

const createUser = async ({ Email, Name, City }) => {
  const [results, fields] = await connectDB.query(
    `INSERT INTO Users(email,name,city) VALUES(?,?,?) `,
    [Email, Name, City]
  );
  return results;
};

const updateUser = async ({ Email, Name, City, userId }) => {
  const [results, fields] = await connectDB.query(
    `UPDATE  Users SET email = ? , name = ? ,city = ? WHERE id = ${userId} `,
    [Email, Name, City]
  );
  return results;
};

const deleteUser = async ({ userId }) => {
  const [results, fields] = await connectDB.query(
    `DELETE FROM Users WHERE id = ${userId}`
  );
  return results;
};

module.exports = { getAllUsers, getUser, updateUser, createUser, deleteUser };
