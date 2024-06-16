import { useEffect, useState } from "react";
import { auth, db } from "../auth/firebase";
import { doc, getDoc } from "firebase/firestore";
import CustomSkeleton from "../Components/Skeleton";
import { Box, Heading, VStack, Text, SimpleGrid, Image, Button, Flex } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { nutritionSuggestions } from "../Components/dietCards";



const calculateBMI = (weight, height) => {
  if (weight && height) {
    return (weight / (height * height) * 10000).toFixed(2);
  }
  return null;
};

const categorizeBMI = (bmi) => {
  if (bmi < 18.5) return 'underweight';
  if (bmi >= 18.5 && bmi < 24.9) return 'fit';
  if (bmi >= 25 && bmi < 29.9) return 'overweight';
  return 'immediate';
};

const MotionBox = motion(Box);
const MotionText = motion(Text);

const NutritionCard = ({ card }) => (
  <Box key={card.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
    <Image src={card.imageUrl} alt={card.title} mb={4} />
    <Heading fontSize="xl" mb={2}>{card.title}</Heading>
    <Text>{card.description}</Text>
  </Box>
);

const UserProfile = ({ data, handleCalculateBMI }) => (
  <VStack align="start" spacing={4}>
    <MotionText 
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      Hi {data.fullName}, your height is {data.height} cm, weight is {data.weight} kg, and according to your age and gender, 
      <Box textAlign="center" mt={6}>
        <Image 
          src={data.gender === 'male' 
            ? 'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?t=st=1718468801~exp=1718472401~hmac=96490a369e47555dc8ca3a345b5ad7af34cafc25446f4435dd497a73b4db6912&w=740' 
            : 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg'} 
          alt="User Photo" 
          boxSize="200px" 
          borderRadius="full" 
          objectFit="cover"
          mb={6}
        />
      </Box>
      <Button colorScheme="teal" onClick={handleCalculateBMI} ml={2}>
        calculate BMI
      </Button>
    </MotionText>
  </VStack>
);

const NutritioniComp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState(null);

  useEffect(() => {
    async function fetch() {
      const userId = auth?.currentUser?.uid;
      try {
        if (userId) {
          const raw = await getDoc(doc(db, "user", userId));
          const solved = raw.data();
          console.log(solved);
          setData(solved);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  const handleCalculateBMI = () => {
    if (data) {
      const bmiValue = calculateBMI(data.weight, data.height);
      setBmi(bmiValue);
      setBmiCategory(categorizeBMI(bmiValue));
    }
  };

  return (
    <>
      {loading ? (
        <div style={{ width: "63%" }}>
          <CustomSkeleton />
        </div>
      ) : (
        <div style={{ width: "63%" }} className="nutrition">
          <div className="nutri">
            <h1>Nutritional Wisdom</h1>
            <h5>Your Path to a Healthier Life</h5>
          </div>
          <div className="nutrii-bmi">
            {data && (
              <MotionBox 
                maxW="xl" 
                mx="auto" 
                mt={10} 
                p={6} 
                bg="gray.50" 
                borderRadius="md" 
                boxShadow="lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Heading mb={6} textAlign="center" color="white" bgColor="#10a5bc" p={4}>
                  Personalized Nutrition Suggestions
                </Heading>
                <Flex align="start" spacing={4} direction="column">
                  <UserProfile data={data} handleCalculateBMI={handleCalculateBMI} />
                  
                  {bmi && (
                    <MotionText 
                      initial={{ x: '100vw' }}
                      animate={{ x: 0 }}
                      transition={{ type: 'spring', stiffness: 50 }}
                    >
                      Your calculated BMI is <strong>{bmi}</strong>, which falls under the category of <strong>{bmiCategory}</strong>.
                    </MotionText>
                  )}
                  
                  {bmiCategory && (
                    <>
                      <Heading size="md" mt={6} mb={4}>Nutrition Suggestions</Heading>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                        {nutritionSuggestions[bmiCategory].map(card => (
                          <NutritionCard key={card.id} card={card} />
                        ))}
                      </SimpleGrid>
                    </>
                  )}
                </Flex>
              </MotionBox>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NutritioniComp;
