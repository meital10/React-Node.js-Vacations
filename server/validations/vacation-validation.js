const { VACATION_VALUES } = require("../utils");
const _ = require("lodash");



const addVacationValidation = (req, res, next) => {
  const fields = Object.keys(req.body);
  const fieldExists = _.size(_.difference(VACATION_VALUES, fields)) === 0;
  const isValidFieldsValues = Object.values(req.body).every((x) => !!x);
  if (fieldExists && isValidFieldsValues) {
    return next();
  }
  return res.sendStatus(400);
};

const dateValidate = (req, res, next) => {
  if (req.body.vacation.from_date < req.body.vacation.to_date) {
    return next();
  }
  return res.status(400).json(" from date can not be later then to date");
};



const fieldsContentValidate = (req, res, next) => {
  if (_.every(_.map(_.omit(req.body.vacation, "price"), (field) => !_.isEmpty(field)))) {
    return next();
  }
  return res.status(400).json("missing vacation fields");
};

module.exports = {
  dateValidate,
  fieldsContentValidate,
  addVacationValidation,
};


