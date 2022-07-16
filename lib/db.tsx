import admin from 'firebase-admin'
import 'firebase/firestore'
import 'firebase/storage'
import flameLink from 'flamelink/app'
import 'flamelink/cf/content'
import 'flamelink/cf/storage'
import firebaseConfig from 'firebaseConfig'
const serviceAccount = require('serviceAccountKey.js')

let firebaseApp;
if (!admin.apps.length) {
    firebaseApp = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: firebaseConfig.databaseURL,
        storageBucket: firebaseConfig.storageBucket
    })
} else {
    firebaseApp = admin.app()
}


const app = flameLink({
    firebaseApp,
    env: 'production',
    dbType: "cf",
    locale: "en-US",
})

export default app