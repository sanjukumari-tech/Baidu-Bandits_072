import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import myImage from '../assets/myImage.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import bargraph from '../assets/bargraph.png';
import report from '../assets/report.png';
import { useEffect, useState } from 'react';

import { auth, db } from '../auth/firebase';
import Navbar from '../Components/Navbar';
import RightSideBox from '../Components/RightSideBox';
import { Navigate } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';

const Dashboard = () => {
  // user data fatch.................
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const userId = auth?.currentUser?.uid;
      try {
        if (auth?.currentUser?.uid) {
          const raw = await getDoc(doc(db, 'user', userId));
          const solved = raw.data();
          console.log(solved);
          setdata(solved);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  return (
    <>
      {auth?.currentUser?.email === undefined && <Navigate replace to={'/'} />}

      <div style={{ display: 'flex' }}>
        <Navbar />

        <ChakraProvider>
          <Box width="63%" maxHeight="100vh" overflow="hidden" p={4}>
            <Box
              bg="#12A5BC"
              w="100%"
              p={4}
              color="white"
              borderRadius={'lg'}
              marginLeft={4}
              marginRight={4}
              marginTop={6}
              maxWidth={'96%'}
              boxShadow="lg"
            >
              <Grid templateColumns="2fr 1fr" gap={4}>
                <GridItem>
                  <Box mt={0}>
                    <Text fontSize="lg">Hello, User</Text>
                    <Heading as="h3" size="lg" mt={2}>
                      Welcome Back!
                    </Heading>
                    <Text mt={2}>
                      At FitLife, we understand that fitness ain't
                      one-size-fits-all. That's why we offer a diverse range of
                      programs and resources.
                    </Text>
                    <Button mt={4} colorScheme="teal">
                      Learn More
                    </Button>
                  </Box>
                </GridItem>
                <GridItem>
                  <Image
                    src="https://media.istockphoto.com/id/1187773453/photo/pleasant-woamn-practiving-yoga-in-bed.jpg?s=612x612&w=0&k=20&c=VMrZ-yNF5MUJ4RhyQ_2q4O25H2fTggwN9kycOL855JM="
                    alt="Healthy Life.png"
                    boxSize="100%"
                    objectFit="cover"
                  />
                </GridItem>
              </Grid>
            </Box>
            {/* second box */}
            <Box bg="##F8F8F8" w="100%" p={4} color="Bold">
              <Grid templateColumns="1fr 1fr 2fr" gap={4}>
                <GridItem p={2} rounded="lg" boxShadow="xl">
                  <Grid templateColumns="1fr 1fr">
                    <GridItem>
                      <Box mt={4} border={0}>
                        <Heading as="h3" size="med" mt={2}>
                          Calories
                        </Heading>
                        <Heading as="h1" size="lg" mt={12}>
                          753
                        </Heading>
                        <Text>kcal</Text>
                      </Box>
                    </GridItem>
                    <GridItem>
                      <Image
                        mt={4}
                        src="https://img.freepik.com/premium-psd/3d-sport-nutrition-fitness-supplement-fitness-health-exercise-equipment-icon-isolated-yellow-background-3d-rendering-illustration-clipping-path_696265-2353.jpg?w=1060"
                      ></Image>
                    </GridItem>
                  </Grid>
                  <Image src={image3}></Image>
                </GridItem>
                <GridItem p={2} rounded="lg" boxShadow="2xl">
                  <Grid templateColumns="1fr 1fr">
                    <GridItem>
                      <Box mt={4} border={0}>
                        <Heading as="h3" size="med" mt={2}>
                          Walk Rate
                        </Heading>
                        <Heading as="h1" size="lg" mt={10}>
                          1270
                        </Heading>
                        <Text>steps</Text>
                      </Box>
                    </GridItem>
                    <GridItem>
                      <Image
                        mt={4}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLq7tKyxTB0F0aMDd-aG4IPf0WWfirhr5P9wEwIbZ3b-Y5mk5C_aY3aSpFDsRh3h91BOU&usqp=CAU"
                      ></Image>
                    </GridItem>
                  </Grid>
                  <Image src={image2}></Image>
                </GridItem>
                <GridItem p={2} rounded="lg" boxShadow="2xl">
                  <Box mt={0} border={0}>
                    <Heading as="h3" size="md" mt={2} mb={0}>
                      Fitness Timer
                    </Heading>
                    <Image src={myImage}></Image>
                    <Grid templateColumns="1fr 1fr" gap={4}>
                      <GridItem>
                        <Heading as="h1" size="md" mt={0}>
                          Fitness
                        </Heading>
                        <Text mt={0} size="lg">
                          Score
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Heading mt={0}>60%</Heading>
                      </GridItem>
                    </Grid>
                  </Box>
                </GridItem>
              </Grid>
              <Grid templateColumns="2fr 1fr" gap={4} pt={2}>
                <GridItem
                  bgSize="cover"
                  bgPosition="center"
                  p={2}
                  rounded="md"
                  boxShadow="2xl"
                >
                  <Box mt={4} border={0}>
                    <Heading as="h3" size="med" mt={0}>
                      Fitnesss Activity
                    </Heading>
                    <Image src={bargraph}></Image>
                  </Box>
                </GridItem>
                <GridItem p={2} rounded="md" boxShadow="2xl">
                  {/* bgImage=
                  {
                    'https://hips.hearstapps.com/hmg-prod/images/runner-feet-running-on-road-closeup-on-shoe-royalty-free-image-918789438-1553785419.jpg'
                  }{' '}
                  bgSize="cover" bgPosition="center" */}
                  <Heading size={'md'}>Reports</Heading>
                  {/* <CircularProgress value={40} color="green.400" size="100px">
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress> */}
                  <Box mt={0} border={0}>
                    <Image src={report}></Image>

                    <Heading as="h1" size="lg" mt={2}>
                      Your Reports are not good
                    </Heading>
                    <Text mt={2}>Please work on your goal's</Text>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </Box>
        </ChakraProvider>

        <RightSideBox />
      </div>
    </>
  );
};

export default Dashboard;
