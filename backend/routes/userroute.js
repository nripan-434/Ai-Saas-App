import { userRegister,login } from "../controllers/userController.js";
import Router from 'express'

const router = Router()
router.post('/register',userRegister)
router.post('/login',login)

export default router