import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db.js'
import Userrouter from './routes/userroute.js'
dotenv.config()
const app = express()
app.use(express.json())
app.use('/user',Userrouter)
app.listen(process.env.PORT,()=>{
    console.log("server is running")
})
connectDB()

