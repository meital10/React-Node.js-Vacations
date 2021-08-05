const queries = require("./queries");

const fetchVacations = async (userId) => {
    try {
        const [rows] = await global.mysqlConnection.execute(queries.FETCH_VACATIONS, [userId]);
        return rows;
    } catch (err) {
        return err;
    }
};

const addVacation = async (vacation) => {
    try {
        const { description, destination, img_url, from_date, to_date, price } = vacation;
        const data = await global.mysqlConnection.execute(queries.ADD_VACATION, [
            description, destination, img_url, from_date, to_date, price]);
        console.log(data);
    } catch (err) {
        return err;
    }
};


const deleteVacation = async (vacation_id) => {

    try {
        const results = await global.mysqlConnection.execute(queries.DELETE_VACATION, [vacation_id]);
        return results;
    } catch (err) {
        console.log('DELETE_VACATION', err.message);
        return err;
    }
};


const editVacation = async (vacation) => {
    try {
        const { vacation_id, description, destination, img_url, from_date, to_date, price } = vacation;
        const data = await global.mysqlConnection.execute(queries.EDIT_VACATION, [
            description, destination, img_url, from_date, to_date, price, vacation_id]);
        console.log(data);
    } catch (err) {
        console.log('editVacation', err.message);
        return err;
    }
};


const chartData = async () => {
    try {
        const [results] = await global.mysqlConnection.execute(queries.CHART_DATA);
        return results;
    } catch (err) {
        return err;
    }
};


const addFollow = async (user_id, vacation_id) => {
    try {
        const [results] = await global.mysqlConnection.execute(queries.ADD_FOLLOW, [vacation_id, user_id]);
        return results;
    } catch (err) {
        console.log(err.message);
        return err
    }
}


const unfollow = async (req, res) => {
    try {
        const { vacation_id } = req.body;
        console.log('un', req.user.user_id, vacation_id);
        const [results] = await global.mysqlConnection.execute(
            queries.UN_FOLLOW, [req.user.user_id, vacation_id]
        );
        return results;
    } catch (err) {
        return err;
    }
};


module.exports = {
    fetchVacations,
    addVacation,
    editVacation,
    deleteVacation,
    addFollow,
    unfollow,
    chartData,
};
