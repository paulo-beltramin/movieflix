// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDRQ41N15HziKX27nScL8W0xK_5E_m1Uus",
    authDomain: "movieflix-42ebd.firebaseapp.com",
    projectId: "movieflix-42ebd",
    storageBucket: "movieflix-42ebd.firebasestorage.app",
    messagingSenderId: "765967746583",
    appId: "1:765967746583:web:40ca72d1406506e5fbbe52",
    measurementId: "G-DB4M9Y1M3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }