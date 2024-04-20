// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAfBVtPsuyvKBsiPMUdVE1x6ZwaC5T9AXc",
  authDomain: "x-fire-329ed.firebaseapp.com",
  projectId: "x-fire-329ed",
  storageBucket: "x-fire-329ed.appspot.com",
  messagingSenderId: "1016230001501",
  appId: "1:1016230001501:web:001ec19eb64910dc8c46b4",
  measurementId: "G-Q25RNK42CW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

//databsae
export const db = getFirestore(app);
export const Realtimedb = getDatabase(app);

//get storage
export const storage = getStorage(app);
