import { Router } from "express"
import default from "../controller/login"
const { loginPage, registerPage } = default
const router = Router()

// Login Router
router.get("/login", loginPage)

//Register Router
router.get("/register", registerPage)

//Export the Router
export default router
