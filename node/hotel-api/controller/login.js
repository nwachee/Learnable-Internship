//Creating Login Controller
const UserService = require("../services/userService")
const bcrypt = require("bcryptjs")

//Login 
const loginPage = (req, res) => {
    res.render("login", {})
}

//Register
const registerPage = (req, res) =>{
    res.render("register", {})
}

module.exports = { loginPage, registerPage }