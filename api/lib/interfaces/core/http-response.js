class HttpResponse {
  static ok(body) {
    return {
      statusCode: 200,
      body,
    }
  }

  static created(body) {
    return {
      statusCode: 201,
      body,
    }
  }

  static accepted(body) {
    return {
      statusCode: 202,
      body,
    }
  }

  static noContent(body) {
    return {
      statusCode: 204,
      body,
    }
  }
}

export default HttpResponse
