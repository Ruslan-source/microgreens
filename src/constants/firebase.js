import firebase from 'firebase/compat/app'
import '@firebase/firestore' // 👈 Don't forget this!
import 'firebase/auth'
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseApp = firebase.initializeApp({     apiKey: "AIzaSyCJonn2C_qVKKkjnUwDjsFep48AthW8mXs",
    authDomain: "microgreens-c3970.firebaseapp.com",
    projectId: "microgreens-c3970",
    storageBucket: "microgreens-c3970.appspot.com",
    messagingSenderId: "136019085614",
    appId: "1:136019085614:web:672ad672ad470008a0d2bf",
    measurementId: "G-EWC1W1Q7XK" })

const rsf = new ReduxSagaFirebase(firebaseApp)

export default rsf
