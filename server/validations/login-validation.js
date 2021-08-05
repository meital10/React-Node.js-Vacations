const _ = require('lodash');
const { errorHandler } = require('../utils');
const { isUserNameExist, checkIfAdmin, checkIfNotAdmin } = require('../services/login-service');




// -------------------------------------------SIGNUP VALIDATION--------------------------------------------------------
const userNameExistsValidate = async (req, res, next) => {
    try {
        await isUserNameExist(req, res);
        next ? next() : res.senStatus(200)

    } catch (err) {
        console.log(err);
        return res.status(400).json('username is already exists')
    }
}



const signupFieldsValidats = (req, res, next) => {
    if (_.isEqual(_.keysIn(req.body), ['first_name', 'last_name', ' username', 'password'])) {
        return next()
    }
    return res.status(400).json('missing fields')
}

const signupEmptyFieldsValidate = (req, res, next) => {
    if (_.every(_.map(req.body), field => !_.isEmpty(field))) {
        return next();
    }
    return res.status('fields can not be empty')
};


// -------------------------------------------LOGIN VALIDATION---------------------------------------
// check if the user is admin
const isAuth = async (req, res, next) => {
    try {
        console.log('isAuth', req.user);
        const { is_admin } = req.user

        if (is_admin === 1) {
            return next()
        }
        return errorHandler(res, 403);

    } catch (err) {
        return errorHandler(res, err);

    }
}


const isAdminValidate = async (req, res, next) => {
    try {
        await checkIfAdmin(req, res);
        return next();
    } catch {
        res.sendStatus(403);
    }
}

const isNotAdminValidate = async (req, res, next) => {
    try {
        await checkIfNotAdmin(req, res);
        return next();
    } catch {
        res.sendStatus(401);
    }
}


module.exports =
{
    userNameExistsValidate,
    isAuth,
    isAdminValidate,
    isNotAdminValidate,
    signupFieldsValidats,
    signupEmptyFieldsValidate
}
