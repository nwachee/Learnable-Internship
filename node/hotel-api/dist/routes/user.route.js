import { Router } from 'express';
import { login, register } from '../controller/user.controller';
const router = Router();
// Login Router
router.post("/login", login);
//Register Router
router.post("/register", register);
//Export the Router
export default router;
