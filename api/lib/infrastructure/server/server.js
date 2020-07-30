import express from 'express'
import bodyParser from 'body-parser'
import UserRouter from './routers/user-router'
import FirebaseAdminFacade from '../firebase/firebase-admin-facade'

const firebaseAdminFacade = new FirebaseAdminFacade() //TODO: injetar dependencia
firebaseAdminFacade.initialize()

const app = express()
const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/v1/users', UserRouter)

app.get('/', (_, res) =>
  res.status(200).send({
    status: 'Success',
    message: 'Welcome! :)',
  })
)

app.get('*', (_, res) =>
  res.status(404).send({
    status: 'Error',
    message: 'Path not found :(',
  })
)

app.listen(port, () => {
  console.log(`Server port: ${port}`)
})

export default app
