// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD7ed8MVFNCg0MBXSQJpq6WqBcwKy6c8Q",
  authDomain: "netflix-clone-924c7.firebaseapp.com",
  projectId: "netflix-clone-924c7",
  storageBucket: "netflix-clone-924c7.appspot.com",
  messagingSenderId: "237664912116",
  appId: "1:237664912116:web:b2d56102518f85e32f14a1",
  measurementId: "G-N03TD33WJ8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
