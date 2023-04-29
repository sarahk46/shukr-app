// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZbFI-EHXPy49kneYp69l2MWrNdK-WZUQ",
  authDomain: "hadithly-63146.firebaseapp.com",
  projectId: "hadithly-63146",
  storageBucket: "hadithly-63146.appspot.com",
  messagingSenderId: "22905912506",
  appId: "1:22905912506:web:57e6281ee6bcd855e9d683",
  measurementId: "G-7FME6P93LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// const analytics = getAnalytics(app);

export { auth };