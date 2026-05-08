import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoPMqzD_auTsIAxWdXDWJbthENOSJ9jcY",
  authDomain: "gs-level.firebaseapp.com",
  databaseURL: "https://gs-level-default-rtdb.firebaseio.com",
  projectId: "gs-level",
  storageBucket: "gs-level.firebasestorage.app",
  messagingSenderId: "297319082375",
  appId: "1:297319082375:web:707416043f173567e5cb22",
  measurementId: "G-FB16YS409D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
