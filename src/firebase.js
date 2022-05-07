// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeUVWA7mUPYXjIfm7iyMQzwJqp76EzQPE",
  authDomain: "segregator-fa038.firebaseapp.com",
  projectId: "segregator-fa038",
  storageBucket: "segregator-fa038.appspot.com",
  messagingSenderId: "237521594872",
  appId: "1:237521594872:web:6d34c1376a857ed8edce0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);