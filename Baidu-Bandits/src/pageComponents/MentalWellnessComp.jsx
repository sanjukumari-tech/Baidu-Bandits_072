import React, { useEffect, useState } from 'react'
import CustomSkeleton from '../Components/Skeleton';
import { Navigate } from 'react-router';
import { auth } from '../auth/firebase';
import '../styles/mentalWellness.css'
import { Mood } from '../Components/Mood';
import Messages from '../Components/DynamicMessages';
import { ReadAbout } from '../Components/ReadAbout';

export const MentalWellnessComp = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);

    
  return (
    <>
    {loading?(<CustomSkeleton/>):
    (
        <>
        {
        auth?.currentUser?.email===undefined && <Navigate replace to={"/"}/>
        }
        <div className="mental-container">

        
        <Messages duration={5000} />
        <Mood/>
        <ReadAbout/>
        

        </div>
        </>        
    )}
    </>
    
  )
}
