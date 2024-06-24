import { getAuth, deleteUser } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { FETCH } from '../redux/actionTypes';

const firebaseConfig = {
  apiKey: 'AIzaSyBz6pYi8-oTCXV_NnIvVaJk_lnG6SXfTS0',
  authDomain: 'be-fit-c9a1b.firebaseapp.com',
  projectId: 'be-fit-c9a1b',
  storageBucket: 'be-fit-c9a1b.appspot.com',
  messagingSenderId: '601925287017',
  appId: '1:601925287017:web:f5f7b9f8f9b6cfc43076f8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);








export function fetchData(dispatch) {
  getDoc(doc(db, 'user', auth?.currentUser?.email))
    .then((res) => res.data())
    .then((resp) =>{
      
       dispatch({ type: FETCH, payload: resp })})
    .catch((err) => console.log(err));
}

export function updateData(data) {
  updateDoc(doc(db, 'user', auth.currentUser.email), {...data,refresh:false});
}



