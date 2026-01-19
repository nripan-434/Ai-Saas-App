import { userRegister,login,getallusers } from "../controllers/userController.js";
import { authmiddleware } from "../middleware/auth.js";
import { adminonly } from "../middleware/adminMiddleware.js";
import Router from 'express'

const router = Router()
router.post('/register',userRegister)
router.post('/login',login)
router.get('/getallusers',authmiddleware,adminonly,getallusers)

export default router