// Import the functions you need from the SDKs you need
import firebase from 'firebase'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADl_oqXV1vuRQWFTyoCfLsPRtZUf4XQOU",
  authDomain: "jeje-clone-twitter.firebaseapp.com",
  projectId: "jeje-clone-twitter",
  storageBucket: "jeje-clone-twitter.appspot.com",
  messagingSenderId: "613837220436",
  appId: "1:613837220436:web:80e01c8f4736f74f461bc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = fireab