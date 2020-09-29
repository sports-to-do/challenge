const usersCtrl={};

//Models User
const User = require('../models/User');

//All Modules
const passport = require ('passport');

usersCtrl.renderSignUpForm = (req,res) => {
    res.render('users/signup');
};

usersCtrl.singup = async (req,res) => {

    const {name, email, password, confirm_password } = req.body;

};

usersCtrl.renderSigninForm = (req,res) => {
    res.render('users/signin');
};

usersCtrl.logout = (req,res) => {
 req.logout();
 req.flash('success_msg', 'You are logged out now.');
 res.redirect('/users/signin');
};


module.exports = usersCtrl;