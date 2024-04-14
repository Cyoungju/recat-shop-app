// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1BjVGWhZyDinPEEVVchDehnFlp-4A5f8",
  authDomain: "react-shop-app-48bf4.firebaseapp.com",
  projectId: "react-shop-app-48bf4",
  storageBucket: "react-shop-app-48bf4.appspot.com",
  messagingSenderId: "383940402347",
  appId: "1:383940402347:web:a4357c65ccb16d04d66bee",
  measurementId: "G-8WLD0LTZY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;