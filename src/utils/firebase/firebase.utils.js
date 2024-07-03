import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUWZgS4_z9em6UGstXD8u1eOwoVhGcPZU",
  authDomain: "crwn-clothing-db-1d5d4.firebaseapp.com",
  projectId: "crwn-clothing-db-1d5d4",
  storageBucket: "crwn-clothing-db-1d5d4.appspot.com",
  messagingSenderId: "1078405252322",
  appId: "1:1078405252322:web:b2134cee971d5829440abb",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// access to the database
export const db = getFirestore();

// CREATE A NEW USER INTO DATABASE
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  // checking the existence of the object

  //  if the user not exits
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
};
