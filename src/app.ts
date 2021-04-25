import * as fs from 'fs'
import * as path from 'path'
import * as express from 'express'
import * as morgan from 'morgan'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as cors from 'cors'
import * as helmet from 'helmet'

// import routes
import { logsLogger, logsErrorLogger } from './logger'
import apiTest from './routes/apiTest'
import apiNotExists from './routes/apiNotExists'

// create express app
const app = express()

// add middlewares
app.use(compression())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// create logs directory if it doesn't exists
if (!fs.existsSync('./logs')) {
  fs.mkdirSync('./logs')
}

// requests logging
app.use(logsLogger)

// add API routes
app.use('/api', apiTest)
app.use('/api', apiNotExists)

// add static middleware to serve static files
app.use(express.static(path.join(__dirname, '../', 'public')))

// error logging
app.use(logsErrorLogger)

export default app
