import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkBQ5ajmO8myIgFvwAs41HY3rIQybKjtg",
  authDomain: "pinoy-big-writer.firebaseapp.com",
  projectId: "pinoy-big-writer",
  storageBucket: "pinoy-big-writer.firebasestorage.app",
  messagingSenderId: "728136733028",
  appId: "1:728136733028:web:bae38fc1bc5f15a21daa71",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
