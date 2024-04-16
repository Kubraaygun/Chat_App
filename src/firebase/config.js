// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Import
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-59441.firebaseapp.com",
  projectId: "chat-app-59441",
  storageBucket: "chat-app-59441.appspot.com",
  messagingSenderId: "781497372365",
  appId: "1:781497372365:web:5bc57886cab216b88b2384",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//kimlik dogrulama bolumunun referansi alindi
export const auth = getAuth(app);
//Google saglayicisinin kurulumu
export const provider = new GoogleAuthProvider();

//Veritabani referansi al
export const db = getFirestore(app);
