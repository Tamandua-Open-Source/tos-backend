class ExpressMiddlewareAdapter {
  static adapt(middleware) {
    return async (req, res, next) => {
      const incomingRequest = {
        headers: req.headers,
        body: req.body,
        locals: req.locals,
        props: req.props,
      }

      try {
        const props = await middleware(incomingRequest)

        req.props = {
          ...req.props,
          ...props,
        }

        next()
      } catch (error) {
        next(error)
      }
    }
  }
}

export default ExpressMiddlewareAdapter
