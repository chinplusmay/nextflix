// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZOekG_kGtP6j88qPCPWFEVm2Ls-FBeAY",
  authDomain: "nextflix-5e81c.firebaseapp.com",
  projectId: "nextflix-5e81c",
  storageBucket: "nextflix-5e81c.firebasestorage.app",
  messagingSenderId: "558226660145",
  appId: "1:558226660145:web:06420c1c17671286156e10",
  measurementId: "G-WSLE16RSRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();