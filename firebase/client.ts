// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBavMjMJjywpiLQfCzZWzFyvAZ0yHODvh0",
  authDomain: "prepwise-82fd7.firebaseapp.com",
  projectId: "prepwise-82fd7",
  storageBucket: "prepwise-82fd7.firebasestorage.app",
  messagingSenderId: "595035127185",
  appId: "1:595035127185:web:8592f7d8c06bfb574f2e30",
  measurementId: "G-EV160M8Y39"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);