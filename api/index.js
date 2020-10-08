import * as dotenv from 'dotenv'
dotenv.config()

import FirebaseAdminFacade from './lib/infrastructure/firebase/firebase-admin-facade'

const firebaseAdminFacade = new FirebaseAdminFacade()
firebaseAdminFacade.initialize()

import './lib/infrastructure/server/server'
