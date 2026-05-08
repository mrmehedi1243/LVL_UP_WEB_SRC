import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGkxCQ1kV1zwF40GnjLlzGAEvKXoGOc_A",
  authDomain: "tour-8dd05.firebaseapp.com",
  projectId: "tour-8dd05",
  storageBucket: "tour-8dd05.firebasestorage.app",
  messagingSenderId: "307567930436",
  appId: "1:307567930436:web:00d6fea73b604230d66011",
  measurementId: "G-D0XJRW5H2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
