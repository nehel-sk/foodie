// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXTEHNi4CTmyR9Gyx8lH4_AXir4LqqtZ8",
  authDomain: "foodie-99509.firebaseapp.com",
  databaseURL: "https://foodie-99509-default-rtdb.firebaseio.com",
  projectId: "foodie-99509",
  storageBucket: "foodie-99509.appspot.com",
  messagingSenderId: "582145974016",
  appId: "1:582145974016:web:74a347ee933d7eea2b1de5",
  measurementId: "G-WT3XHYVYMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
