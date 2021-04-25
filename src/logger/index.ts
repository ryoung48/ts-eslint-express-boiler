import * as winston from 'winston'
import * as expressWinston from 'express-winston'

// requests logger
const logsLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({
      filename: './logs/logs-logger.log',
      maxsize: 2000000,
      maxFiles: 5
    })
  ]
})

// error logger
const logsErrorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({
      filename: './logs/logs-error-logger.log',
      maxsize: 2000000,
      maxFiles: 5
    })
  ]
})

export { logsLogger, logsErrorLogger }
