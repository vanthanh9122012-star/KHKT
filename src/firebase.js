import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-4cpS0L3hI7xpn8A5LMl6zvb061vkMMs",
  authDomain: "khkt-5305a.firebaseapp.com",
  projectId: "khkt-5305a",
  storageBucket: "khkt-5305a.firebasestorage.app",
  messagingSenderId: "631314203657",
  appId: "1:631314203657:web:bf709cd1943f2bb43e64d8",
  measurementId: "G-0BF8K8JZEL"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
