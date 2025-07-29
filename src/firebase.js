// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "bookify-ccab5.firebaseapp.com",
    projectId: "bookify-ccab5",
    storageBucket: "bookify-ccab5.appspot.com",
    messagingSenderId: "643615309509",
    appId: "1:643615309509:web:8f5feafa49be0bc6da7aac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);