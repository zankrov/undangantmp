// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB3Ag2fU8OPOIwVVc_ORb19J2DzD7MosTk",
    authDomain: "testing-3c04d.firebaseapp.com",
    projectId: "testing-3c04d",
    storageBucket: "testing-3c04d.appspot.com",
    messagingSenderId: "586816297270",
    appId: "1:586816297270:web:b37831195a0ae9ce5e3b97",
    measurementId: "G-E082GRZFNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);


export { db };
