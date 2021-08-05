const ADD_USER = "INSERT INTO users (first_name,last_name,username,password,is_admin) VALUES (?,?,?,?,?)";
const CHECK_IF_ADMIN = "SELECT is_admin from users where user_id = ?";
const CHECK_IS_NOT_ADMIN = "SELECT is_admin from users where user_id = ?";
const CHECK_USER_NOT_EXISTS = "SELECT user_id from users where username = ?";
const FETCH_VACATIONS = `
SELECT vacations.vacation_id, vacations.description, vacations.destination,vacations.img_url,
vacations.from_date, vacations.to_date, vacations.price, user_id as followed FROM vacations LEFT JOIN
vacation_followers ON vacation_followers.vacation_id = vacations.vacation_id
    AND vacation_followers.user_id = ?
    ORDER BY followed DESC
`;
const ADD_VACATION =
    "insert into vacations (description, destination, img_url, from_date, to_date, price) values (?,?,?,?,?,?)";
const EDIT_VACATION = `UPDATE vacations set description=?, destination=?, img_url=?, from_date=?, to_date=?, price=?
   WHERE vacation_id=? `;
const DELETE_VACATION = `DELETE from vacations WHERE vacation_id=?`;
const ADD_FOLLOW = "INSERT INTO vacation_followers (vacation_id,user_id) VALUES (?,?)";
const UN_FOLLOW = `DELETE FROM vacation_followers WHERE  user_id=? and vacation_id=?`;
const CHART_DATA =
    `SELECT COUNT(*) as number_of_followers, vacations.vacation_id, destination FROM vacations
     JOIN vacation_followers ON vacations.vacation_id = vacation_followers.vacation_id
     GROUP BY vacations.vacation_id , destination`


module.exports = {
    CHECK_IF_ADMIN,
    CHECK_IS_NOT_ADMIN,
    ADD_USER,
    CHECK_USER_NOT_EXISTS,
    FETCH_VACATIONS,
    ADD_VACATION,
    EDIT_VACATION,
    DELETE_VACATION,
    ADD_FOLLOW,
    UN_FOLLOW,
    CHART_DATA,
};
