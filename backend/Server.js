import express from 'express'
import dotenv from 'dotenv'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
dotenv.config()
import connectDb from './config/connectDb.js'
const port = process.env.PORT

connectDb()
const app = express()
app.use(notFound)
app.use(errorHandler)
app.get('/',(req,res)=>{
    res.send("api is running")
})

app.listen(port,()=>{
    console.log(`Server is litening on http://localhost:${port}`)
})