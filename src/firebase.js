import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDKvR5M6zMT1XYz6liZEZzSJrp9mqP1EEk",
    authDomain: "ittansition-kp.firebaseapp.com",
    projectId: "ittansition-kp",
    storageBucket: "ittansition-kp.appspot.com",
    messagingSenderId: "613440559639",
    appId: "1:613440559639:web:f52206b21fcf4f00e71a52"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
