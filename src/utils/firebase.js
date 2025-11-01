// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKidLxhlpBQ_C0P5nMy6J4Lk615n5aqPQ",
  authDomain: "netflixgpt-7b642.firebaseapp.com",
  projectId: "netflixgpt-7b642",
  storageBucket: "netflixgpt-7b642.firebasestorage.app",
  messagingSenderId: "514158862855",
  appId: "1:514158862855:web:091abd556088d2ebc600a2",
  measurementId: "G-Z37R4TXYRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();