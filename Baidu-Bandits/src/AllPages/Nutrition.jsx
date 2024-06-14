import { useState, useEffect } from "react";
// import Slider from 'react-slick';
import {
  Box,
  Input,
  Button,
  VStack,
  Heading,
  Select,
  Text,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import {
  FaWeight,
  FaRulerVertical,
  FaUserAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import RightSideBox from "../Components/RightSideBox";
import Navbar from "../Components/Navbar";
import { auth, db } from "../auth/firebase";
import { Navigate } from "react-router";
import { doc, getDoc } from "firebase/firestore";

// const imageUrls = [
//   "https://img.freepik.com/free-photo/flat-lay-delicious-healthy-food-concept_23-2148648502.jpg?t=st=1718372611~exp=1718376211~hmac=f47fae50bb3bcec2a0893214a20f353cf85c02a2752e6f562395d6a6c442fb8a&w=826",
//   "https://img.freepik.com/free-photo/brunette-woman-kitchen_23-2148173204.jpg?t=st=1718372649~exp=1718376249~hmac=2b2ce16328faae2a047030af538538e05749ee5b3019612a7ef98d7c7e86764c&w=1380",
//   "https://img.freepik.com/premium-photo/female-nutritionist-white-coat-sitting-indoors-office-workplace_146671-29776.jpg?w=1380",
// ];

const fetchUserData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const calculateBMI = (weight, height) => {
  if (weight && height) {
    return ((weight / (height * height)) * 10000).toFixed(2);
  }
  return null;
};

const categorizeBMI = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi >= 18.5 && bmi < 24.9) return "Fit";
  if (bmi >= 25 && bmi < 29.9) return "Overweight";
  return "Immediate Attention";
};

const NutritionComponent = () => {
  const [userData, setUserData] = useState({});
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState(null);
  const [formValues, setFormValues] = useState({
    height: "",
    weight: "",
    gender: "",
    age: "",
  });

  // for usiing firbase auth
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const userId = auth?.currentUser?.uid;
      try {
        if (auth?.currentUser?.uid) {
          const raw = await getDoc(doc(db, "user", userId));
          const solved = raw.data();
          console.log(solved);
          // setdata(solved);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData("https://api.example.com/userdata");
      setUserData(data);
      setFormValues({
        height: data.height || "",
        weight: data.weight || "",
        gender: data.gender || "",
        age: data.age || "",
      });
    };

    const storedData = JSON.parse(localStorage.getItem("nutritionData"));
    if (storedData) {
      setFormValues(storedData);
      const bmiValue = calculateBMI(storedData.weight, storedData.height);
      setBmi(bmiValue);
      setBmiCategory(categorizeBMI(bmiValue));
    } else {
      fetchData();
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCalculate = () => {
    const { height, weight } = formValues;
    const bmiValue = calculateBMI(weight, height);
    setBmi(bmiValue);
    setBmiCategory(categorizeBMI(bmiValue));
    localStorage.setItem("nutritionData", JSON.stringify(formValues));
  };

  const formBgColor = useColorModeValue("gray.50", "gray.700");
  const formBorderColor = useColorModeValue("gray.200", "gray.600");

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <>
      {auth?.currentUser?.email === undefined && <Navigate replace to={"/"} />}
      <div style={{ display: "flex" }}>
        <Navbar />
        <Box width="63%" p={5} height="100vh" overflow="auto">
          <Box
            maxW="xl"
            mx="auto"
            mt={10}
            p={6}
            bg={formBgColor}
            borderRadius="md"
            boxShadow="lg"
          >
            <Box p={4}>
  <Heading
    mb={6}
    textAlign="center"
    color="white"
    bgColor="#11a5bc"
    maxH="100px"
  >
    Nutrition & BMI Tracker
  </Heading>
</Box>


            {/* <Box mb={8} maxW="400px">
        <Slider {...settings}>
          {imageUrls.map((url, index) => (
            <Box key={index} height="200px" overflow="hidden">
              <Image src={url} alt={`slide-${index}`} objectFit="cover" w="100%" h="100%" />
            </Box>
          ))}
        </Slider>
      </Box> */}

            <VStack align="start" spacing={4}>
              <Heading size="md" color="tomato">
                Calculate Your BMI
              </Heading>
              <VStack align="start">
                <Flex align="center">
                  <FaRulerVertical />
                  <Input
                    placeholder="Height (cm)"
                    name="height"
                    value={formValues.height}
                    onChange={handleInputChange}
                    bg="white"
                    borderColor={formBorderColor}
                    _placeholder={{ color: "gray.500" }}
                  />
                </Flex>
                <Flex align="center">
                  <FaWeight />
                  <Input
                    placeholder="Weight (kg)"
                    name="weight"
                    value={formValues.weight}
                    onChange={handleInputChange}
                    bg="white"
                    borderColor={formBorderColor}
                    _placeholder={{ color: "gray.500" }}
                  />
                </Flex>
                <Flex align="center">
                  <FaUserAlt />
                  <Select
                    placeholder="Gender"
                    name="gender"
                    value={formValues.gender}
                    onChange={handleInputChange}
                    bg="white"
                    borderColor={formBorderColor}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Select>
                </Flex>
                <Flex align="center">
                  <FaCalendarAlt />
                  <Input
                    placeholder="Age"
                    name="age"
                    value={formValues.age}
                    onChange={handleInputChange}
                    bg="white"
                    borderColor={formBorderColor}
                    _placeholder={{ color: "gray.500" }}
                  />
                </Flex>
              </VStack>
              <Button
                onClick={handleCalculate}
                colorScheme="teal"
                leftIcon={<FaCheckCircle />}
              >
                Calculate BMI
              </Button>
              {bmi && (
                <Box
                  mt={4}
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                  bg={formBgColor}
                  borderColor={formBorderColor}
                >
                  <Text>BMI: {bmi}</Text>
                  <Text>Category: {bmiCategory}</Text>
                </Box>
              )}
            </VStack>
          </Box>
        </Box>
        <RightSideBox />
      </div>
    </>
  );
};

export default NutritionComponent;
