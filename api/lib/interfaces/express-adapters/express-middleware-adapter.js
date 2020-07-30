class ExpressMiddlewareAdapter {
  static adapt(middleware) {
    return async (req, res, next) => {
      const incomingRequest = {
        headers: req.headers,
        body: req.body,
        locals: req.locals,
      }

      const { response, props, error } = await middleware(incomingRequest)
      if (response === 'ok') {
        req.props = props
        next()
      } else {
        res.status(error.statusCode).json(error.body)
      }
    }
  }
}

export default ExpressMiddlewareAdapter
