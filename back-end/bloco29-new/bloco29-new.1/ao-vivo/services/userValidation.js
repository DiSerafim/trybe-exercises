const User = require('../models/User');

const validateEmail = (email) => {
  const emailRegex = (
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  );
  const isEmailValid = emailRegex.test(email);
  return isEmailValid;
};

const validatePassword = (password) => {
  const passwordRegex = /^\d+$/; /* Senha pode ter apenas números */
  const isPasswordValid = passwordRegex.test(password);
  return isPasswordValid;
};

// const valideRoles = ['admin', 'user'];
const validateRole = (role, valideRoles) => valideRoles.includes(role);

const validateUser = ({ email, password, role }, valideRoles = []) => (
    validateEmail(email) && validatePassword(password) && validateRole(role, valideRoles)
  );

  const createUser = async (user, valideRoles) => {
    if (!validateUser(user, valideRoles)) {
      return {
        isError: true,
        error: {
          message: 'Dados inválidos',
        },
      };
    }
    const { username, email, password, role } = user;
    await User.create(username, email, password, role);
    return {
      isError: false,
      error: {
        message: 'Usuário criado com sucesso!',
      },
    };
  };

module.exports = { 
  createUser,
};