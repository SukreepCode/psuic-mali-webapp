const winston = require('winston');


const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-dd HH:mm:ss Z'
    }),
    winston.format.printf( 
        (info: any) => JSON.stringify({
            message: info.message,
            level: info.level,
            timestamp: info.timestamp
        })
    )
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    
  ],
});


//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    level: 'debug',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf( (info: any) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
  }));
}

const testLogger = ()=> {
    logger.error('error message');
    logger.warn('warn message');
    logger.info('info message');
    logger.verbose('verbose message');
    logger.debug('debug message');
    logger.silly('silly message');
}

// testLogger();

logger.stream = {
  write: (message: any) => {
    logger.info(message.trim());
  },
};

module.exports = logger;
