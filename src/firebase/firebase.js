// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection, 
  getDoc, getDocs, query, where, setDoc, 
  deleteDoc, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt_8hfhuIGibliLGR6Z9YjjjQgINhVCvU",
  authDomain: "react-app04.firebaseapp.com",
  databaseURL: "https://react-app04-default-rtdb.firebaseio.com",
  projectId: "react-app04",
  storageBucket: "react-app04.appspot.com",
  messagingSenderId: "414525084509",
  appId: "1:414525084509:web:d1fd7007155b63bc314eb4",
  measurementId: "G-Z9G993E6F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth      = getAuth(app);
export const db = getFirestore(App);
const storage   = getStorage(App);