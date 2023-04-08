import dotenv from 'dotenv'
import express, { Express } from 'express'
import { v1Router } from './v1/'

dotenv.config()

export const app: Express = express()
const port = process.env.PORT

app.use('/v1', v1Router)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
