import express from 'express'
import dotenv from 'dotenv'
import UserRoutes from './routes/userRoutes.js'
import connectDB from './utils/db.js'



dotenv.config()

const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/userRoutes.js"], // path to your route files
};

const swaggerSpec = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/api/v1/users',UserRoutes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
