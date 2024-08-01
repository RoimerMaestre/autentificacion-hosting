// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

/* Métodos de firebase Auth */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCIGHiCieFqtXV-p5YrCUC4PBQvOpjcqIY",
  authDomain: "fir-autentificacion-71352.firebaseapp.com",
  projectId: "fir-autentificacion-71352",
  storageBucket: "fir-autentificacion-71352.appspot.com",
  messagingSenderId: "119274991450",
  appId: "1:119274991450:web:71693c6f9aaadb65654d63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};

export default app;