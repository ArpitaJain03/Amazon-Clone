// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth to access auth object

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByc8nauO2_v87qwf4RmaGRWe4HrnMTLZA",
  authDomain: "clone-76f5b.firebaseapp.com",
  projectId: "clone-76f5b",
  storageBucket: "clone-76f5b.appspot.com",
  messagingSenderId: "55650636803",
  appId: "1:55650636803:web:b31dee68ecb12916812a36",
  measurementId: "G-JFGTQ5TWQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.db;
const analytics = getAnalytics(app);
const auth = getAuth(app); // Access auth object using getAuth function

export {db,auth};