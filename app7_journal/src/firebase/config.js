// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-wJc-pvF9gRbEQqZ9q_01qf5DSOel-0s",
  authDomain: "react-journal-6280b.firebaseapp.com",
  projectId: "react-journal-6280b",
  storageBucket: "react-journal-6280b.appspot.com",
  messagingSenderId: "59121335149",
  appId: "1:59121335149:web:1ff3689b6a868ca3caf864"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseapp);
export const firebaseDB = getFirestore(firebaseapp);
