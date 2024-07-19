// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5ABUBhqN3uIHKXplT_i3fMVa5_A9vt84",
  authDomain: "my-web-aec0b.firebaseapp.com",
  projectId: "my-web-aec0b",
  storageBucket: "my-web-aec0b.appspot.com",
  messagingSenderId: "217642202144",
  appId: "1:217642202144:web:8cc67774f006c15b047845",
  measurementId: "G-QGNDND18J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);