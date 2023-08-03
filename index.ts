import express, { Express, Request, Response, json, urlencoded } from 'express'
import dotenv from 'dotenv'
import { sequelize } from './src/config/db'
import {
  createBookHandler,
  getBookHandler,
  uploadBookImage,
  uploadImage
} from './src/controller/bookControllers'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import routes from './src/routes'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

const _sequelize = sequelize

//middleware
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nodejs Book api /api/v1',
      version: '1.0.0'
    }
  },
  apis: ['./src/routes/*.ts']
}

const swaggerSpec = swaggerJsdoc(options)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Serve static files from 'uploads' folder
app.use('/uploads', express.static('uploads'))

app.use('/api/v1', routes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})

//synchronizing the database and forcing it to false so we dont lose data
// _sequelize.sync({ force: true }).then(() => {
//   console.log('db has been re sync')
// })
