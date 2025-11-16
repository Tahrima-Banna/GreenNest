// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIW4zcEPeySbD8b8Dz_x1gHGt_TTikics",
  authDomain: "green-nest-3275a.firebaseapp.com",
  projectId: "green-nest-3275a",
  storageBucket: "green-nest-3275a.firebasestorage.app",
  messagingSenderId: "285384968524",
  appId: "1:285384968524:web:21717df1e74a62e14be7e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);