const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../services/CRUD");

const getAllUsersAPI = async (req, res) => {
  const results = await getAllUsers();
  return res.status(200).json({
    message: "ok",
    data: results,
  });
};

const createUserAPI = async (req, res) => {
  let { Email, Name, City } = req.body;
  if (!Email || !Name || !City) {
    return res.status(200).json({
      message: "missing Email or Name Or City",
    });
  }
  await createUser({ Email, Name, City });
  return res.status(200).json({
    message: "ok",
  });
};

const updateUserAPI = async (req, res) => {
  const { Email, Name, City } = req.body;
  const userId = req.params.userId;
  await updateUser({ Email, Name, City, userId });
  return res.status(200).json({
    message: "ok",
  });
};
const deleteUserAPI = async (req, res) => {
  const userId = req.params.userId;
  await deleteUser({ userId });
  return res.status(200).json({
    message: "ok",
  });
};

module.exports = {
  getAllUsersAPI,
  createUserAPI,
  updateUserAPI,
  deleteUserAPI,
};
