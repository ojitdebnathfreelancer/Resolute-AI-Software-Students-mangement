// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCOm2zdkY4wv-M4vHiMyE4aSt8189WFUYA",
  authDomain: "studentmanagemant-95386.firebaseapp.com",
  projectId: "studentmanagemant-95386",
  storageBucket: "studentmanagemant-95386.appspot.com",
  messagingSenderId: "396910405393",
  appId: "1:396910405393:web:4ae1afad3b9f7696bb8eb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;