import { initializeApp , getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXLgrlQbtWTafG63WqJQ4Mxi3guFgzW2A",
  authDomain: "prepwise-531bf.firebaseapp.com",
  projectId: "prepwise-531bf",
  storageBucket: "prepwise-531bf.firebasestorage.app",
  messagingSenderId: "520952450994",
  appId: "1:520952450994:web:78cdeb5d59872b555c9eab",
  measurementId: "G-LR2QPYDNB3"
};

// Initialize Firebase
const app =  !getApps.length ? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);