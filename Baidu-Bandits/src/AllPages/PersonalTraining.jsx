import React, { useState, useEffect } from 'react';
import { auth } from '../auth/firebase'; // Ensure you import the Firebase auth correctly
import { getDoc, doc } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../auth/firebase'; // Ensure you have configured Firestore correctly
import Navbar from '../Components/Navbar';
import RightSideBox from '../Components/RightSideBox';
import { Navigate } from 'react-router-dom'; // Ensure you use the correct router
import Training from '../Components/Training';

const PersonalTraining = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const userId = auth?.currentUser?.uid;
      try {
        if (userId) {
          const raw = await getDoc(doc(db, 'user', userId));
          const solved = raw.data();
          console.log(solved);
          setData(solved);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (auth?.currentUser?.email === undefined) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ width: '63%' }}>
          <Training />
        </div>
        <RightSideBox />
      </div>
    </>
  );
};

export default PersonalTraining;
