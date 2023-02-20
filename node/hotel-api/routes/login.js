const express = require("express")
const { loginPage, registerPage} = require("../controller/login")
const router = express.Router()

// Login Router
router.get("/login", loginPage)

//Register Router
router.get("/register", registerPage)

//Export the Router
module.exports = router
