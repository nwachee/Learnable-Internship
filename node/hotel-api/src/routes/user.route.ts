import { Router } from 'express'
import { login, register } from '../controller/user.controller'
import { registerUser, loginUser} from '../schema/index.schema';
import validate from '../middleware/validate';
const router = Router()

// Login Router
router.post("/login", validate(loginUser), login)

//Register Router
router.post("/register", validate(registerUser), register)

//Export the Router
export default router
