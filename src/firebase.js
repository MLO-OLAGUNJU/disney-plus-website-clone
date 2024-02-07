// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGY-50o17oyurhnazse6J9icpiq-pnJMI",
  authDomain: "disneyplus-clone-f9227.firebaseapp.com",
  projectId: "disneyplus-clone-f9227",
  storageBucket: "disneyplus-clone-f9227.appspot.com",
  messagingSenderId: "635312501660",
  appId: "1:635312501660:web:4d5a13e0a2b4f20d2b4e59",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, provider, storage, db };
export default firebaseApp;
