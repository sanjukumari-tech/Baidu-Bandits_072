import {auth, db,} from "../auth/firebase"
import { useState } from "react";
import { Navigate } from "react-router";
import { SignIn } from "../Components/SignIn";
import Signup from "../Components/SignUpForm";
import { useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteUser } from "firebase/auth";

export const Auth = () => {
    const [res, setres] = useState(true); 
    const admin = useSelector(state=>state?.admin)
  const del = useSelector(state=>state?.delete)
    
function handleDelete(){
  console.log("delete runing...............");
  deleteDoc(doc(db,"user",auth?.currentUser?.email)).then(deleteUser(auth?.currentUser)).then(() => {
    toast({
      title: "Error",
      description: "This account is already DELETED",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }).catch((error) => {
    console.log(error)
  });
}
  
  if(auth?.currentUser?.email && !del){
    return admin ? (<Navigate replace to={"/admindashboard"}/>):(<Navigate replace to={"/dashboard"}/>)
  } else if(auth?.currentUser?.email && del){
    handleDelete()

  }
  


  return (
    <> 
      
    
    {res ? (<SignIn setres={setres}/>):(<Signup setres={setres}/>)}
    </>
  )
}

