const winston = require('winston');
const { format } = winston;

const formatConsole = format.printf(( { message, level, timestamp }: any ) => {
  return `${timestamp} ${level}: ${message}`;
});
const formatFile = format.printf(( { message, level, timestamp }: any ) => {
  return JSON.stringify({ message, level, timestamp });
});

var filename = module.filename.split('/').slice(-1);

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-dd HH:mm:ss Z' }),
    formatFile
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
    format: format.combine(
      format.colorize(),
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.label({ label: filename }),
      formatConsole
    ),
  }));
}

const testLogger = () => {
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
