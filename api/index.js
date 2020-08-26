import * as dotenv from 'dotenv'
import FirebaseAdminFacade from './lib/infrastructure/firebase/firebase-admin-facade'

dotenv.config()

const firebaseAdminFacade = new FirebaseAdminFacade()
firebaseAdminFacade.initialize()

import './lib/infrastructure/server/server'
