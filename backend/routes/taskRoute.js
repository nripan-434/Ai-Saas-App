import express from 'express'
import { createtask } from '../controllers/taskcontroller'


const Router = express.Router()
Router.post('/createtask',createtask)


export default Router