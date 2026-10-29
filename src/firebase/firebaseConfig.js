import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// User's exact Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZHambv0wV1mPCpvyaXZfMoqjEsCgSRws",
  authDomain: "apextradebd.firebaseapp.com",
  projectId: "apextradebd",
  storageBucket: "apextradebd.firebasestorage.app",
  messagingSenderId: "300371024094",
  appId: "1:300371024094:web:f9b82b759d58d1d6dcca4f",
  measurementId: "G-5FQWMXQBDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
