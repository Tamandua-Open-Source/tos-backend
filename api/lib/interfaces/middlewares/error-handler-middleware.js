import chalk from 'chalk'

class ErrorHandlerMiddleware {
  static log(err, req, res, next) {
    const code = err.errorCode || err.status || err.code || '500?'
    const message = err.message || 'Internal Server Error'
    const method = req.method || 'METHOD?'
    const url = req.url || 'URL?'

    const log = (message) => console.log(chalk.whiteBright.bgRedBright(message))

    log(
      `[${new Date().toISOString()}] "${method} ${url}" Error ${code}: ${message}`
    )

    if (err.errors) {
      log(`Errors: ${JSON.stringify(err.errors)}`)
    }

    if (err.stack) {
      log(`${err.stack}`)
    }

    if (next) {
      next(err)
    }
  }

  static handle(err, req, res, next) {
    const errorCode = err.errorCode || err.status || err.code || 500
    const message = err.message || 'Internal Server Error'
    const errors = err.errors || []
    const method = req.method || 'METHOD?'
    const url = req.url || 'URL?'

    res.status(errorCode).json({
      errorCode,
      message,
      errors,
      method,
      url,
    })
  }
}

export default ErrorHandlerMiddleware
