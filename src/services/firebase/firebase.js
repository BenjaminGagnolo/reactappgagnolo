
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCFFCfUml6eeYvitMgABEa1D0z4PTIwyPs",
  authDomain: "app-bg-react.firebaseapp.com",
  projectId: "app-bg-react",
  storageBucket: "app-bg-react.appspot.com",
  messagingSenderId: "118273842639",
  appId: "1:118273842639:web:1cc8976cadd1b15a9306ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app)