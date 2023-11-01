import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC0e9KU3OPUcFjVI1o2FZJCchi-0QqhW6o",
    authDomain: "autentication-app-f667d.firebaseapp.com",
    projectId: "autentication-app-f667d",
    storageBucket: "autentication-app-f667d.appspot.com",
    messagingSenderId: "363833127510",
    appId: "1:363833127510:web:a14c421b6fbd88bb8701f7",
    measurementId: "G-TEN56E2JBB"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);