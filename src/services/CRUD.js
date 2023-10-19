const connectDB = require("../config/database");
const getAllUsers = async () => {
  const [results, fields] = await connectDB.query("select * from Users");
  return results;
};

const getUser = async (userId) => {
  const [results, fields] = await connectDB.query(
    `select * from Users WHERE id = ${userId[0]}`
  );
  return results;
};

module.exports = { getAllUsers, getUser };
