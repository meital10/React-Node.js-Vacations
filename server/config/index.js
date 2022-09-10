module.exports = {
  dbConfig: {
    host: "localhost",
    port: 3306,
    user: "root",
    database: "vacation_project",
  },
  cookieConfig: {
    secure: false,
    httpOnly: false,
    maxAge: 1000 * 60000,
  },
  passwordHash: process.env.PASSWORD_HASH,
};
