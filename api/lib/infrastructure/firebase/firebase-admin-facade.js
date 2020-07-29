import * as firebaseAdmin from 'firebase-admin'

import * as dotenv from 'dotenv'
dotenv.config()

class FirebaseAdminFacade {
  initialize() {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(
        JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)
      ),
      databaseURL: 'https://flexibe-macro.firebaseio.com',
    })
  }

  async verifyToken(idToken) {
    // decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken)
    // return decodedToken.uid

    return 'sbKnhMLSphQvD9gXLKPWXkPbAuu2' //TODO: usando pra teste. remover
  }
}

export default FirebaseAdminFacade
