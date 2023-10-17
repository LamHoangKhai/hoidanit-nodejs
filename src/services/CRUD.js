const connectDB = require("../config/database");
const getAllUsers = async () => {
  const [results, fields] = await connectDB.query("select * from Users");
  return results;
};

const getUser = async () => {
  let id = 1;
  const [results, fields] = await connectDB.query(
    `select * from Users WHERE id = ${id}`
  );
  return results;
};

module.exports = { getAllUsers, getUser };
