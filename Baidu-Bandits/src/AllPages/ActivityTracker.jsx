// ActivityTracker.jsx

import { useState } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Grid,
  GridItem,
  Progress,
  VStack,
  Button,
  Fade,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Input,Select
} from '@chakra-ui/react';
import ExerciseRecommendation from './ExerciseRecommendation';


import { motion } from 'framer-motion';
import DynamicForm from '../Components/DynamicForm';
import { Auth } from '../Components/Auth';
import { auth } from '../auth/firebase';


// import './animations.css';  // Import the CSS animations

const activities = [
  {
    name: 'Running',
    image: 'https://img.freepik.com/premium-vector/isometric-illustration-man-measuring-his-performances_130740-698.jpg?w=740',
    progress: 70,
    description: 'Running is an excellent way to improve cardiovascular health, build endurance, and burn calories. Regular running can help you stay fit, reduce stress, and boost your overall health. Start with shorter distances and gradually increase your mileage to avoid injuries. Always remember to warm up before and cool down after your run.'
  },
  {
    name: 'Cycling',
    image: 'https://img.freepik.com/free-photo/professional-cyclist-women_23-2149703293.jpg?t=st=1718180960~exp=1718184560~hmac=42ddf3f296f814a521b7f4065e8ef0001c0d62aa0783c46ae42261d8757cf226&w=740',
    progress: 50,
    description: 'Cycling is a fantastic low-impact exercise that works your lower body muscles and improves your heart health. Whether you cycle outdoors or use a stationary bike, it’s a fun and effective way to stay active. Remember to wear a helmet and follow safety guidelines when cycling outdoors.'
  },
  {
    name: 'Swimming',
    image: 'https://img.freepik.com/free-photo/male-swimmer-swimming-butterfly-stroke_171337-7613.jpg?t=st=1718181057~exp=1718184657~hmac=7013d688afdc067596bbd4a7c8261beedefe41b6d8e4dd535da29f946409dbe2&w=740',
    progress: 30,
    description: 'Swimming is a full-body workout that is easy on the joints. It improves cardiovascular fitness, muscle strength, and flexibility. Swimming is also a relaxing activity that can reduce stress and improve your mood. Start with basic strokes and gradually try more advanced techniques as you build confidence.'
  },
];

const ActivityTracker = () => {
  const [showActivities, setShowActivities] = useState(false);
  const [res, setres] = useState(true);



  // for form 
  const [showForm, setShowForm] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleShowActivities = () => {
    setShowActivities(true);
    setShowForm(false); // Set showForm to false when showing activities
  };
  const questions = [
    {
      label: 'Select your daily routine:',
      options: ['Sedentary', 'Moderate', 'Active', 'Athlete', 'Other'],
      value: 'routine',
    },
    {
      label: 'Select your exercise habits:',
      options: ['None', 'Light', 'Moderate', 'Intense', 'Athlete'],
      value: 'exercise',
    },
    {
      label: 'Select your diet:',
      options: ['Unhealthy', 'Balanced', 'Vegetarian', 'Vegan', 'Keto'],
      value: 'diet',
    },
    {
      label: 'Select your professional activities:',
      options: ['Sedentary', 'Moderate', 'Active', 'Athlete', 'Other'],
      value: 'professional',
    },
  ];
  const [formData, setFormData] = useState({
    routine: '',
    exercise: '',
    diet: '',
    professional: '',
  });

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setCurrentQuestion((prevQuestion) => prevQuestion + 1); // Move to the next question
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data and display recommendations
    setShowForm(false);
  };
  /////////
  return (
    <>
      {
        auth?.currentUser?.email ===undefined ? (<Auth setres={setres}/>):
        (
    <Box p={5} height="100vh" overflow="auto">
      {!showActivities ? (
        <>
        <Fade in={!showActivities}>
          <Box textAlign="center" py={10} px={6}>
            <Heading as="h2" size="xl" mb={4}>
              Welcome to Activity Tracker
            </Heading>
            <Center>
              <Image
                src="https://img.freepik.com/free-vector/sport-fitness-tracker-abstract-concept-vector-illustration-activity-band-health-monitor-wrist-worn-device-application-running-cycling-every-day-training-abstract-metaphor_335657-1454.jpg?t=st=1718180351~exp=1718183951~hmac=48849305ff35333c08fb67262664b70e984691795e8c383900c5b37e1e2d9b9e&w=740"
                alt="Activity Tracker"
                boxSize="300px"
                className="image-hover"
              />
            </Center>
            <Text fontSize="lg" mb={6}>
              Track your physical activities and stay motivated!
            </Text>
            
            <Button
              colorScheme="teal"
              size="lg"
              onClick={() => setShowActivities(true)}
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get Started
            </Button>
          </Box>
        </Fade>
        
         </>
      ) : (
        <Fade in={showActivities}>
          <Box>
            <Heading mb={6} textAlign="center">
              Activity Tracker
            </Heading>
            <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
              {activities.map((activity) => (
                <GridItem
                  key={activity.name}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
                  as={motion.div}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card height="350px">
                    <CardHeader>
                      <Heading size="md">{activity.name}</Heading>
                    </CardHeader>
                    <CardBody>
                      <VStack spacing={2} align="stretch">
                        <Center>
                          <Image src={activity.image} alt={activity.name} boxSize="100px" />
                        </Center>
                        <Text noOfLines={3}>{activity.description}</Text>
                        <Progress value={activity.progress} size="sm" colorScheme="green" />
                        <Text textAlign="center">{activity.progress}% completed</Text>
                      </VStack>
                    </CardBody>
                    <CardFooter>
                      <Button colorScheme="teal" size="sm">View Details</Button>
                    </CardFooter>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Fade>
      )}
      
      {/* //form  */}
      <Box p={5}>
      {showForm ? (
         <Fade in={showActivities}>
          <Box textAlign="center" py={10} px={6}>
            <Heading as="h2" size="xl" mb={4}>
             Get personalised recommendation !
            </Heading>
            <DynamicForm />
          </Box>
        </Fade>
      ) : (
        <ExerciseRecommendation formData={formData} />
      )}
    </Box>     
    </Box>
  )}
  </>
  );
};

export default ActivityTracker;
