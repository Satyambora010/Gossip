// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//auth import
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfLC0uAGZooFkmpLQl9IU4V5-RT5IMiVg",
  authDomain: "gossip-5d55d.firebaseapp.com",
  projectId: "gossip-5d55d",
  storageBucket: "gossip-5d55d.appspot.com",
  messagingSenderId: "747446794114",
  appId: "1:747446794114:web:30351aeff96a4af6ef419b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };