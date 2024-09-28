// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPwnBKD6LLGaALB_mo3cpfcWtz-LrzqtY",
  authDomain: "find-hire.firebaseapp.com",
  projectId: "find-hire",
  storageBucket: "find-hire.appspot.com",
  messagingSenderId: "765625753585",
  appId: "1:765625753585:web:32a9fd56f35e9480d02e50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };