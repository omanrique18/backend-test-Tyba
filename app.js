import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import dbConnect from './config/mongo.js'
import { authRouter } from './routes/auth.js'
import { restaurantsRouter } from './routes/restaurants.js'
import { recordsRouter } from './routes/records.js'

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT

app.use('/api', authRouter, restaurantsRouter, recordsRouter)

app.listen(port, () => {
    console.log(`app ready ${port}`)
})

dbConnect()

export { app }
