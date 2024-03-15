 // Import the functions you need from the SDKs you need

import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyC1x4GcFNc-BfGwdVsWmMETgGWZ6r5xEBQ",
   authDomain: "nps-jsi18-hb1.firebaseapp.com",
   projectId: "nps-jsi18-hb1",
   storageBucket: "nps-jsi18-hb1.appspot.com",
   messagingSenderId: "99757781585",
   appId: "1:99757781585:web:cb07bfcee927877a8dbe70"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
