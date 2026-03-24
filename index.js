import express from 'express'
import dotenv from 'dotenv'
import UserRoutes from './routes/userRoutes.js'
import connectDB from './utils/db.js'



dotenv.config()

const app = express()
const port = process.env.PORT || 3000

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())

app.use('/api/v1/users',UserRoutes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
