import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-9bcdb.firebaseapp.com",
  projectId: "reactchat-9bcdb",
  storageBucket: "reactchat-9bcdb.appspot.com",
  messagingSenderId: "407706300794",
  appId: "1:407706300794:web:37b28dff577410329de6c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()