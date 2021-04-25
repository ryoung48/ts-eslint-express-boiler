import * as http from 'http'
import * as dotenv from 'dotenv'

import app from './app'

// load environment variables from a .env file
dotenv.config()

// set port from environment
app.set('port', process.env.PORT || 5000)

// create HTTP server
const server = http.createServer(app)

// set HTTP server event listener
server.on('listening', () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${app.get('port').toString()}`)
})

// start listening on provided port
server.listen(app.get('port'))
