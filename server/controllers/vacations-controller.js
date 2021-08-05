const express = require("express");
const router = express.Router();
const { dateValidate, addVacationValidation, fieldsContentValidate } = require("../validations/vacation-validation");
const { isAuth, isNotAdminValidate } = require("../validations/login-validation");

const {
  fetchVacations, addVacation, addFollow, unfollow, deleteVacation, editVacation, chartData, } = require("../services/vacations-service");

const { errorHandler } = require("../utils");

router.get("/", async (req, res) => {
  try {
    const userId = _extractUserId(req);
    console.log('userId', userId);
    const data = await fetchVacations(userId);

    return res.json(data);
  } catch (err) {
    console.log(err.message);
    return res.status(400);
  }

  function _extractUserId(req) {
    if (req.user && req.user.user_id) return req.user.user_id;
    throw new Error("User is not exist!");
  }
});

router.post('/unfollow', async (req, res) => {
  try {
    const result = await unfollow(req, res);
    return res.send(result)
  } catch (err) {
    console.log('unfollow:', err);

    return errorHandler(res, 403)
  }
});

router.post('/add-follow', async (req, res) => {
  try {
    const { vacation_id } = req.body;
    console.log(req.user);

    const result = await addFollow(req.user.user_id, vacation_id);
    res.send(result);
  } catch (err) {
    return errorHandler(res, 403);

  }
});


// --------------------------------ADMIN-------------------------------------------------




// isAuth, addVacationValidation, dateValidate, fieldsContentValidate, 
router.post('/add-vacation', isAuth, async (req, res) => {
  try {
    console.log(req.body);
    console.log("add vacation...");
    await addVacation(req.body);
    res.sendStatus(200);
  } catch (err) {
    return errorHandler(res, err);

  }
});



// dateValidate, fieldsContentValidate
router.patch("/edit-vacation", async (req, res) => {
  try {
    await editVacation(req.body);
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return errorHandler(res, 403)
  }
});

router.delete(`/delete-vacation/:id`, isAuth, async (req, res) => {
  try {
    const { id } = req.params
    console.log('delete-vacation: ', id);
    const [results] = await deleteVacation(id);

    return res.send(results);

  } catch (err) {
    console.log('delete-vacation error', err.message);
    return errorHandler(res, 403)
  }
});


router.get("/vacation-chart", isAuth, async (req, res) => {
  try {
    console.log('/vacation-chart enter');
    const chartFollowers = await chartData();
    return res.send(chartFollowers);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
});





module.exports = router;
