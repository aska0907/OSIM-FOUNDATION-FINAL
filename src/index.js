// Import the functions you need from the SDKs you need

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOasmxapL0TtZ9LrdUKbGkDZ9lhqxDuH8",
  authDomain: "ngos-2024.firebaseapp.com",
  projectId: "ngos-2024",
  storageBucket: "ngos-2024.appspot.com",
  messagingSenderId: "268085738888",
  appId: "1:268085738888:web:a0f7e0f8effd9f18580e3d",
  measurementId: "G-BDXMXZ76SJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore
