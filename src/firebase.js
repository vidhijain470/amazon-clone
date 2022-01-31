// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyCbQ35diRYn22IEJRYr7umqvVZtn6CKRtA",
    authDomain: "challenge-b9e75.firebaseapp.com",
    projectId: "challenge-b9e75",
    storageBucket: "challenge-b9e75.appspot.com",
    messagingSenderId: "119426590743",
    appId: "1:119426590743:web:aaab09f8e484718f4d9452",
    measurementId: "G-Q6WCR93QWF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const firebaseApp = initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  // const auth =auth();
  export{db, auth};