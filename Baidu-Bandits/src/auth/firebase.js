import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore, updateDoc } from "firebase/firestore";

import { doc, setDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBz6pYi8-oTCXV_NnIvVaJk_lnG6SXfTS0",
  authDomain: "be-fit-c9a1b.firebaseapp.com",
  projectId: "be-fit-c9a1b",
  storageBucket: "be-fit-c9a1b.appspot.com",
  messagingSenderId: "601925287017",
  appId: "1:601925287017:web:f5f7b9f8f9b6cfc43076f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy


// Add a new document in collection "cities"
const userId=auth?.currentUser?.email
await setDoc(doc(db, "user","userId" ), {

calories:[23,45,68,4,7,343,756,345,45,45,45,45,445,636,]

});


await updateDoc(doc(db, "user","userId" ), {

  calori:[23,45,68,4,7,343]
  
  });