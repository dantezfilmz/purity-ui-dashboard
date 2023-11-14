import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import signInImage from "assets/img/signInImage.png";
import { useAuth } from "../../context/Auth";
import { useHistory } from "react-router-dom";
const inputFields = [
  { name: 'email', label: 'Email', type: 'text', placeholder: 'Your email address' },
  { name: 'password', label: 'Password', type: 'password', placeholder: 'Your password' },
];

function SignIn() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });
  const { login } = useAuth()
  const navigate = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleRememberMeChange = () => {
    setFormState((prevState) => ({ ...prevState, rememberMe: !prevState.rememberMe }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simple email validation
      if (!formState.email || !formState.email.includes("@")) {
        setFormErrors((prevErrors) => ({ ...prevErrors, email: "Please enter a valid email address." }));
        return;
      }

      // Simple password validation
      if (!formState.password) {
        setFormErrors((prevErrors) => ({ ...prevErrors, password: "Please enter your password." }));
        return;
      }

      const { data: { user, session }, error } = await login(formState.email, formState.password)
      if (user && session) navigate.push("/");
    } catch (error) {
      alert(error)
    }
    setLoading(false);

  };

  return (
    <Flex position="relative" mb="40px">
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="48px"
            mt={{ md: "150px", lg: "80px" }}
          >
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Welcome Back
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="14px"
            >
              Enter your email and password to sign in
            </Text>
            <FormControl>
              {inputFields.map((field) => (
                <React.Fragment key={field.name}>
                  <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                    {field.label}
                  </FormLabel>
                  <Input
                    borderRadius="15px"
                    id = {`field-${field.name}`}
                    mb={field.name === 'password' ? '36px' : '24px'}
                    fontSize="sm"
                    type={field.type}
                    placeholder={field.placeholder}
                    size="lg"
                    name={field.name}
                    value={formState[field.name]}
                    onChange={handleInputChange}
                  />
                  {formErrors[field.name] && <Text color="red">{formErrors[field.name]}</Text>}
                </React.Fragment>
              ))}
              <FormControl display="flex" alignItems="center">
                <Switch
                  id="remember-login"
                  colorScheme="teal"
                  me="10px"
                  onChange={handleRememberMeChange}
                />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  ms="1"
                  fontWeight="normal"
                >
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                fontSize="10px"
                type="submit"
                bg="teal.300"
                w="100%"
                h="45"
                mb="20px"
                color="white"
                mt="20px"
                onClick={handleSubmit}
                disabled={loading} 
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}
              >
                SIGN IN
              </Button>
            </FormControl>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Don't have an account?
                <Link color={titleColor} as="span" ms="5px" fontWeight="bold" href={`${process.env.PUBLIC_URL}/#/auth/signup`}>
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100%"
          w="40vw"
          position="absolute"
          right="0px"
        >
          <Box
            bgImage={signInImage}
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius="20px"
          ></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
