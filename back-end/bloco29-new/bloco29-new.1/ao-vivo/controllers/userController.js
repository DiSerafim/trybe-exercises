const userValidation = require('../services/userValidation');

const createUser = async (req, res) => {
  const user = userValidation.createUser(req.body, ['admin', 'user']);
  if (user.isError) {
    return res.status(400).json({
      message: user.message,
    });
  }
  res.status(200).json({
    message: user.message,
  });
};

module.exports = {
  createUser,
}; 
