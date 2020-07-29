class ExpressRouterAdapter {
  static adapt(route) {
    return async (req, res) => {
      const httpRequest = {
        params: req.params,
        headers: req.headers,
        body: req.body,
        props: req.props,
      }

      const httpResponse = await route(httpRequest)

      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}

export default ExpressRouterAdapter
