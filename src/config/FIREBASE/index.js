import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyB5X0Q0WBYrKUDQRm2RuvZUY9BGUo-85RY",
    authDomain: "noteapp-36a8b.firebaseapp.com",
    projectId: "noteapp-36a8b",
    storageBucket: "noteapp-36a8b.appspot.com",
    messagingSenderId: "558403856281",
    appId: "1:558403856281:web:3b7f81e6dbd0a3f977d508"
});

const FIREBASE = firebase;

export default FIREBASE;