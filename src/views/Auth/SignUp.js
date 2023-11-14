import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useAuth } from "../../context/Auth";
import { useHistory } from "react-router-dom";
import BgSignUp from "assets/img/BgSignUp.png";

const inputFields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
  { name: "email", label: "Email", type: "email", placeholder: "Your email address" },
  { name: "password", label: "Password", type: "password", placeholder: "Your password" },
];

const socialIcons = [
  { icon: FaFacebook, bgColor: "teal.200", href: "#" },
  { icon: FaApple, bgColor: "teal.200", href: "#" },
  { icon: FaGoogle, bgColor: "teal.200", href: "#" },
];

function SignUp() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { signup } = useAuth()
  const navigate = useHistory();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let errors = {};
      inputFields.forEach((field) => {
        if (!formState[field.name]) {
          errors[field.name] = `Please enter your ${field.label.toLowerCase()}.`;
        }
        if (formState[field.name] === 'email' & formState[field.name].includes("@")) {
          errors[field.name] = `Please enter your ${field.label.toLowerCase()}.`;
        }
      });

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }
      const { data: { user, session }, error } = await signup(formState.email, formState.password)

      if (error) { alert(error)}
      if (user && session) navigate.push("/");
    } catch (error) {

    }
    // Reset form state
    setFormState({
      name: "",
      email: "",
      password: "",
      rememberMe: false,
    });
    setLoading(false);
  };

  return (
    <Flex direction="column" alignSelf="center" justifySelf="center" overflow="hidden">
      <Box
        position="absolute"
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={BgSignUp}
        bgSize="cover"
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
      ></Box>
      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        align="center"
        mt="6.5rem"
        mb="30px"
      >
        <Text fontSize="4xl" color="white" fontWeight="bold">
          Welcome!
        </Text>
        <Text
          fontSize="md"
          color="white"
          fontWeight="normal"
          mt="10px"
          mb="26px"
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}
        >
          Use these awesome forms to login or create new account in your project for free.
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
        <Flex
          direction="column"
          w="445px"
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <Text fontSize="xl" color={textColor} fontWeight="bold" textAlign="center" mb="22px">
            Register With
          </Text>
          <HStack spacing="15px" justify="center" mb="22px">
            {socialIcons.map((socialIcon, index) => (
              <Flex
                key={index}
                justify="center"
                align="center"
                w="75px"
                h="75px"
                borderRadius="15px"
                border="1px solid lightgray"
                cursor="pointer"
                transition="all .25s ease"
                _hover={{ filter: "brightness(120%)", bg: bgIcons }}
              >
                <Link href={socialIcon.href}>
                  <Icon
                    as={socialIcon.icon}
                    w="30px"
                    h="30px"
                    _hover={{ filter: "brightness(120%)" }}
                  />
                </Link>
              </Flex>
            ))}
          </HStack>
          <Text fontSize="lg" color="gray.400" fontWeight="bold" textAlign="center" mb="22px">
            or
          </Text>
          <FormControl>
            {inputFields.map((field) => (
              <React.Fragment key={field.name}>
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  {field.label}
                </FormLabel>
                <Input
                  fontSize="sm"
                  ms="4px"
                  borderRadius="15px"
                  type={field.type}
                  placeholder={field.placeholder}
                  mb="24px"
                  size="lg"
                  name={field.name}
                  value={formState[field.name]}
                  onChange={handleInputChange}
                />
                {formErrors[field.name] && <Text color="red">{formErrors[field.name]}</Text>}
              </React.Fragment>
            ))}
            <FormControl display="flex" alignItems="center" mb="24px">
              <Switch
                id="remember-login"
                colorScheme="teal"
                me="10px"
                checked={formState.rememberMe}
                onChange={() =>
                  setFormState((prevState) => ({ ...prevState, rememberMe: !prevState.rememberMe }))
                }
              />
              <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                Remember me
              </FormLabel>
            </FormControl>
            <Button
              type="submit"
              bg="teal.300"
              fontSize="10px"
              color="white"
              fontWeight="bold"
              w="100%"
              h="45"
              mb="24px"
              onClick={handleSubmit}
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}
            >
              SIGN UP
            </Button>
          </FormControl>
          <Flex flexDirection="column" justifyContent="center" alignItems="center" maxW="100%" mt="0px">
            <Text color={textColor} fontWeight="medium">
              Already have an account?
              <Link color={titleColor} as="span" ms="5px" href="#" fontWeight="bold">
                Sign In
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
