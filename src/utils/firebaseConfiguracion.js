// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB99lYeVCeWvhszRivNPlSZTRsCh4gB7XA",
    authDomain: "dev-crash-project.firebaseapp.com",
    projectId: "dev-crash-project",
    storageBucket: "dev-crash-project.appspot.com",
    messagingSenderId: "593973649542",
    appId: "1:593973649542:web:d19a5da6c92b35f6e5b107"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);