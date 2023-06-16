import { Router } from 'express'
import { login, register } from '../controller/user.controller'
const router = Router()

// Login Router
router.get("/login", login)

//Register Router
router.get("/register", register)

//Export the Router
export default router
