import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDHT778bWVgjlGociRy-cl0xbCyXs1qJT8",
    authDomain: "sebsegoso.firebaseapp.com",
    projectId: "sebsegoso",
    storageBucket: "sebsegoso.appspot.com",
    messagingSenderId: "538570216943",
    appId: "1:538570216943:web:e26037625c03975a52521a"
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore()
const auth = firebase.auth()


export { db, auth, }