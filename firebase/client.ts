import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBQuteNjXrJZMmazz_XRZm_JMTKlkKNqZ0",
  authDomain: "prepwise-68122.firebaseapp.com",
  projectId: "prepwise-68122",
  storageBucket: "prepwise-68122.firebasestorage.app",
  messagingSenderId: "391605285398",
  appId: "1:391605285398:web:632cb4d4d2eef9b04dbb37",
  measurementId: "G-ZJME0B2W4M"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)