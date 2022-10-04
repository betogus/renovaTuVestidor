
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBb1oFxN8CNhNMpqLPxqtOxcOiwTKsYHoA",
    authDomain: "renovatuvestidor-de29b.firebaseapp.com",
    projectId: "renovatuvestidor-de29b",
    storageBucket: "renovatuvestidor-de29b.appspot.com",
    messagingSenderId: "1028756307459",
    appId: "1:1028756307459:web:81c1f63d869d26ee159836"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)