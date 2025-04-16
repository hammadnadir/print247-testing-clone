// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAhL8H5Ty4RkCbujrSgxU1KSTuAkl2EzMA",
  authDomain: "print247-website.firebaseapp.com",
  projectId: "print247-website",
  storageBucket: "print247-website.appspot.com",
  messagingSenderId: "424676400097",
  appId: "1:424676400097:web:6838736eb96a92ab3490a0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);