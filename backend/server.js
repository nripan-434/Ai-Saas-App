import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db.js'
import Userrouter from './routes/userroute.js'
import Taskrouter from './routes/taskRoute.js'
import cors from 'cors';
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/user',Userrouter)
app.use('/task',Taskrouter)
app.listen(process.env.PORT,()=>{
    console.log("server is running")
})
connectDB()

