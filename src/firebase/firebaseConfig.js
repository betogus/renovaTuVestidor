
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = process.env.FIREBASE_CONFIG

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)