import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  Heading,
  VStack,
  useColorModeValue,
  useToast,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { auth, db, fetchData } from "../auth/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, deleteUser } from "firebase/auth";
import { deleteDoc, doc } from 'firebase/firestore';


export const SignIn = ({ setres }) => {
  const dispatch =useDispatch()
  const admin = useSelector(state=>state?.admin)
  const del = useSelector(state=>state?.delete)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const toast = useToast();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === '' || validateEmail(e.target.value)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email format');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value === '' || validatePassword(e.target.value)) {
      setPasswordError('');
    } else {
      setPasswordError('Password must be more than 6 characters');
    }
  };

  



 

function handleDelete(){
  deleteDoc(doc(db,"user",auth?.currentUser?.email)).then(deleteUser(auth.currentUser)).then(() => {
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









  const signIn = async () => {
    if (!validateEmail(email) || !validatePassword(password)) {
      toast({
        title: "Error",
        description: "Please correct the highlighted errors",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Signed In",
        description: "You have successfully signed in",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to sign in",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {    
      fetchData(dispatch)
    }
  };
  // if(del){
  //   const user = auth.currentUser;
  //   deleteUser(user).then(() => {
  //     toast({
  //       title: "Error",
  //       description: "This acoount is already deleted",
  //       status: "error",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   })
  // }


  // const signOff = async () => {
  //   try {
  //     await signOut(auth);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const toggleSignUp = () => {
    setres((prevRes) => !prevRes); // Toggle the state of setres
  };

  const formBg = useColorModeValue("white", "gray.700");
  const gradientBg = "linear(to-r, teal.500, green.500)";



  if(auth?.currentUser?.email && !del){
    return admin ? (<Navigate replace to={"/admindashboard"}/>):(<Navigate replace to={"/dashboard"}/>)
  } else if(auth?.currentUser?.email && !del){
    handleDelete()

  }

  return (
  <>

    {/* {
      (auth?.currentUser?.email && !del) ? (admin ? (<Navigate replace to={"/admindashboard"}/>):(<Navigate replace to={"/dashboard"}/>)):(()=>handleDelete())
    } */}
    <Flex height='100vh' width='100%' justify='center' alignItems='center' bg={gradientBg}>
      <Box
        borderWidth='1px'
        p={8}
        borderRadius='lg'
        boxShadow='xl'
        bg={formBg}
        width={['90%', '400px']}
        animation="scale-up-center 0.5s ease-in-out"
      >
        <style>
          {`
            @keyframes scale-up-center {
              0% {
                transform: scale(0.5);
              }
              100% {
                transform: scale(1);
              }
            }
          `}
        </style>
        <Center mb={6}>
          <Heading size='lg' color='teal.600'>Sign In</Heading>
        </Center>
        <VStack spacing={4}>
          <FormControl isInvalid={emailError !== ''}>
            <FormLabel>Email</FormLabel>
            <Input
              variant='outline'
              value={email}
              placeholder="Email"
              type="email"
              onChange={handleEmailChange}
              focusBorderColor='teal.600'
            />
            {emailError !== '' && (
              <FormErrorMessage>{emailError}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={passwordError !== ''}>
            <FormLabel>Password</FormLabel>
            <Input
              variant='outline'
              value={password}
              placeholder="Password"
              type="password"
              onChange={handlePasswordChange}
              focusBorderColor='teal.600'
            />
            {passwordError !== '' && (
              <FormErrorMessage>{passwordError}</FormErrorMessage>
            )}
          </FormControl>

          <Button
            onClick={signIn}
            colorScheme='green'
            width='100%'
            mt={4}
            _hover={{
              bgGradient: "linear(to-r, green.400, green.500)",
            }}
          >
            Sign In
          </Button>

          <Flex mt={2} color='teal.600' cursor='pointer' >
            <Text>
              Don't have an account? 
            </Text>
            <Text ml={1} color='blue.600' cursor='pointer' as='b' onClick={toggleSignUp}>
              Sign up
            </Text>
          </Flex>
        </VStack>
      </Box>
    </Flex>
    </>
  );
};
