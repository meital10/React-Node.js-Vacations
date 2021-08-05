const express = require("express");
const router = express.Router();
const passport = require("passport");
const { isAuthenticated } = require("../passport");
const { isAuth } = require("../validations/login-validation");
const { userNameExistsValidate, signupFieldsValidats, signupEmptyFieldsValidate } = require("../validations/login-validation");
const { createUser, isUserNameExist } = require("../services/login-service");


router.get("/currentUser", (req, res) => {
    res.send({
        user: req.user
    });
});


router.post("/login", passport.authenticate("local", { failureRedirect: "/login.html" }),
    (req, res) => {
        const message = `user logged in successfully ${req.body.username}`;
        console.log(message);
        res.send({
            message: message,
            user: req.user
        });
    }
);
//  signupFieldsValidats,signupEmptyFieldsValidate
router.post("/signup", async (req, res) => {
    try {

        console.log(req.body);
        const { first_name, last_name, password, username, is_admin } = req.body;
        const userExist = await isUserNameExist({ username });
        if (userExist === true) throw new Error("User already exist");
        await createUser({ first_name, last_name, password, username, is_admin });
        // res.redirect('/login.html');
        res.sendStatus(200);
    } catch (err) {
        console.log(`Error signup User: ${err.message}`);
        res.status(409).json({ err: err.message });
    }
});


router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.sendStatus(400);
        }
        req.logout();
        res.cookie("connect.sid", req.cookies["connect.sid"], { maxAge: -1 });
        res.sendStatus(200);
    });
});

router.get("/check_authentication", async (req, res) => {
    try {
        await isAuthenticated(req, res);
    } catch (err) {
        console.log(err);
    }
});



module.exports = router;
