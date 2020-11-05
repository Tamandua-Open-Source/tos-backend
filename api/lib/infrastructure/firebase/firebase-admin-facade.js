import * as firebaseAdmin from 'firebase-admin'
import { v4 as uuidv4 } from 'uuid'

import * as dotenv from 'dotenv'
dotenv.config()

class FirebaseAdminFacade {
  initialize() {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(
        JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)
      ),
      databaseURL: process.env.FIREBASE_DB_URL,
    })
  }

  async listAllUsers(nextPageToken) {
    var users = []

    return await firebaseAdmin
      .auth()
      .listUsers(1000, nextPageToken)
      .then(function (listUsersResult) {
        listUsersResult.users.forEach(function (userRecord) {
          users.push(userRecord.toJSON())
        })

        if (listUsersResult.pageToken) {
          this.listAllUsers(listUsersResult.pageToken)
        } else {
          return users
        }
      })
      .catch(function (error) {
        console.log('Error listing users:', error)
        return null
      })
  }

  async deleteUserById(userId) {
    return firebaseAdmin
      .auth()
      .deleteUser(userId)
      .then(function () {
        console.log('Successfully deleted user')
        return true
      })
      .catch(function (error) {
        console.log('Error deleting user:', error)
        return false
      })
  }

  async verifyToken(idToken) {
    try {
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken)

      const user = {
        name: decodedToken.name,
        email: decodedToken.email ?? uuidv4() + '@no-email.com',
        userId: decodedToken.uid,
      }

      return user
    } catch (error) {
      console.log(error)
      return undefined
    }
  }
}

export default FirebaseAdminFacade
