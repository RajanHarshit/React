
 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmiHVN7ebdBJi8XnFINEYKPrZP4M9l0vQ",
  authDomain: "chat-6f875.firebaseapp.com",
  projectId: "chat-6f875",
  storageBucket: "chat-6f875.appspot.com",
  messagingSenderId: "575981058024",
  appId: "1:575981058024:web:5679b1c3302879672f565d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()