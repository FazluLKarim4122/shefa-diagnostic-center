// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUvwpNniBNKsbFKW7dPJIZhW82q6v9aBI",
  authDomain: "shefa-diagnostic.firebaseapp.com",
  projectId: "shefa-diagnostic",
  storageBucket: "shefa-diagnostic.firebasestorage.app",
  messagingSenderId: "303911833376",
  appId: "1:303911833376:web:e33a3819d57ea8450a5145",
  measurementId: "G-JGTFQSF4RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app