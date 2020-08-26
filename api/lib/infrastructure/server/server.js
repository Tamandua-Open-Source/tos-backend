import express from 'express'
import bodyParser from 'body-parser'
import UserRouter from './routers/user-router'
import StretchSessionRouter from './routers/stretch-session-router'
import compression from 'compression'

const app = express()
const port = process.env.PORT || 8000

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/users', UserRouter)
app.use('/api/stretchSessions', StretchSessionRouter)

app.get('/', (_req, res) =>
  res.status(200).send({
    status: 'Success',
    message: 'Welcome! :)',
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
