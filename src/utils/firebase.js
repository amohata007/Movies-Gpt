// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1We7mSODxKZE-9ZXB95T2G2Dib5_wjMM",
  authDomain: "moviesgpt-df4c8.firebaseapp.com",
  projectId: "moviesgpt-df4c8",
  storageBucket: "moviesgpt-df4c8.appspot.com",
  messagingSenderId: "773064546274",
  appId: "1:773064546274:web:fccaed268049af0a1a8bbb",
  measurementId: "G-JDQ20VM7Q8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
