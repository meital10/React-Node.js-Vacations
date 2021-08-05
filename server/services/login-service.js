const { createHashedPassword } = require("./user-utils");
const queries = require("./queries");

// ---------------------------------SIGNUP---------------------------------------------

const createUser = ({ first_name, last_name, username, password, is_admin }) =>
  global.mysqlConnection.execute(
    "insert into users (first_name,last_name,username,password,is_admin) values(?,?,?,?,?)",
    [first_name, last_name, username, createHashedPassword(password), is_admin]

  );

const isUserNameExist = async (user) => {
  const result = await global.mysqlConnection.execute(queries.CHECK_USER_NOT_EXISTS, [user.username]);
  const userExist = result[0];
  return userExist.length ? true : false;
};


// ------------------------------LOGIN--------------------------------------------------


const checkIfAdmin = async (req, res, next) => {
  try {
    const [results] = await global.mysqlConnection.execute(queries.CHECK_IF_ADMIN, [req.id]);
    if (results[0].is_admin === 1) {
      return next();
    }
    return res.sendStatus(401);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};
const checkIfNotAdmin = async (req, res, next) => {
  try {
    const [results] = await global.mysqlConnection.execute(queries.CHECK_IS_NOT_ADMIN, [req.id]);
    if (results[0].is_admin === 0) {
      return next();
    }
    return res.sendStatus(401);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};




module.exports = { createUser, isUserNameExist, checkIfAdmin, checkIfNotAdmin };
