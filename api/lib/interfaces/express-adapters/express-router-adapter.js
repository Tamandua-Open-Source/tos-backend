class ExpressRouterAdapter {
  static adapt(route) {
    return async (req, res, next) => {
      const httpRequest = {
        params: req.params,
        headers: req.headers,
        body: req.body,
        props: req.props,
        query: req.query,
      }

      try {
        const httpResponse = await route(httpRequest)
        res.status(httpResponse.statusCode).json(httpResponse.body)
      } catch (error) {
        next(error)
      }
    }
  }
}

export default ExpressRouterAdapter
