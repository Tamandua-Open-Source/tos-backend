import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import logger from 'morgan'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './swagger.js'
import ErrorHandlerMiddleware from '../../interfaces/middlewares/error-handler-middleware'
import expressip from 'express-ip'

import ConfigurationRouter from './routers/configuration-router'
import UserRouter from './routers/user-router'
import WorkoutRouter from './routers/workout-router'
import GameRouter from './routers/game-router'

const app = express()
const port = process.env.PORT || 8000

app.set('trust proxy', true)

app.use(expressip().getIpInfoMiddleware)

app.use(logger('common'))
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use('/api/configurations', ConfigurationRouter)
app.use('/api', UserRouter)
app.use('/api', WorkoutRouter)
app.use('/api', GameRouter)
app.use(ErrorHandlerMiddleware.log)
app.use(ErrorHandlerMiddleware.handle)

app.get('/', (_req, res) =>
  res.status(200).send({
    status: 'Success',
    message: 'Data API',
  })
)

app.get('*', (_req, res) =>
  res.status(404).send({
    status: 'Error',
    message: 'Path not found :(',
  })
)

app.listen(port, () => {
  console.log(`Server port: ${port}`)
})

export default app
