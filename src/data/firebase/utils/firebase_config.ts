import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1Pc4HmqWDOogeuyHnKImJNv23pi14k0g",
  authDomain: "salahuddin-website-portfolio.firebaseapp.com",
  projectId: "salahuddin-website-portfolio",
  storageBucket: "salahuddin-website-portfolio.appspot.com",
  messagingSenderId: "147579451867",
  appId: "1:147579451867:web:128de77e40b2ec1ff1cffe",
  measurementId: "G-M5XC1LTCMY",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

// Utils
export const firestore = getFirestore(firebaseApp);
