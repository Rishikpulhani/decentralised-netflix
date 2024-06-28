import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA8wpSPokjPVGPHYtjA1ForCI23CWHK6xQ",
  authDomain: "de-c99f2.firebaseapp.com",
  projectId: "de-c99f2",
  storageBucket: "de-c99f2.appspot.com",
  messagingSenderId: "561704520393",
  appId: "1:561704520393:web:88c791b24037152983db18",
  measurementId: "G-B25MHWER4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;
const storage = getStorage(app);

export { app, db, auth, storage, provider};
