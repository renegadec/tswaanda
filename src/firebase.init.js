// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz58h1cJsJzPCmCYSFyhdYN6qTAHLkyoE",
  authDomain: "tswanda-1a0a0.firebaseapp.com",
  projectId: "tswanda-1a0a0",
  storageBucket: "tswanda-1a0a0.appspot.com",
  messagingSenderId: "675955603168",
  appId: "1:675955603168:web:fbfac1a2464b5bceb68285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;