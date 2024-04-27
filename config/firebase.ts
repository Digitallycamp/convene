import { initializeApp } from "firebase/app";
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGEBUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
} from "@env";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: FIREBASE_API_KEY,
//   authDomain: FIREBASE_URL,
//   projectId: FIREBASE_PROJECT_ID,
//   storageBucket: FIREBASE_STORAGEBUCKET,
//   messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
//   appId: FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCgZD1fUy7NuJEx2fls-1VmBnXybCzWJ0I",
  authDomain: "justokayapp-8d8c4.firebaseapp.com",
  projectId: "justokayapp-8d8c4",
  storageBucket: "justokayapp-8d8c4.appspot.com",
  messagingSenderId: "49140213206",
  appId: "1:49140213206:web:1d5e12a258492f1651f077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { auth, db };
