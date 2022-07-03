import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import flameLink from 'flamelink/app'
import 'flamelink/cf/content'
import 'flamelink/cf/storage'
import firebaseConfig from 'firebaseConfig'

let firebaseApp;
if (typeof window === 'undefined') {
    const admin = require('firebase-admin')
    if (!admin.apps.length) {
        const serviceAccount = require('serviceAccountKey.js')
        firebaseApp = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: firebaseConfig.databaseURL,
            storageBucket: firebaseConfig.storageBucket
        })
    } else {
        firebaseApp = admin.app()
    }
} else {
    if (firebase.apps.length === 0) {
        firebaseApp = firebase.initializeApp(firebaseConfig)
    } else {
        firebaseApp = firebase.app()
    }
}


const app = flameLink({
    firebaseApp,
    env: 'production',
    dbType: "cf",
    locale: "en-US",
})

export default app