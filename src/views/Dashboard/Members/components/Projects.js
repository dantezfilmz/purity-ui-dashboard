import {
  Flex,
  Text,
  Grid,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React, { useState } from "react";

const Projects = ({ title }) => {
  const textColor = useColorModeValue("gray.700", "white");

  // Form fields and corresponding state
  const formFields = [
    { label: "First Name", type: "text", state: "firstName" },
    { label: "Last Name", type: "text", state: "lastName" },
    { label: "Email", type: "email", state: "email" },
    { label: "ID Number", type: "text", state: "idNo" },
    { label: "Phone", type: "tel", state: "phone" },
    { label: "Date of Birth", type: "date", state: "dob" },
    { label: "Disability", type: "text", state: "disability" },
    { label: "Amenities", type: "checkbox", state: "amenities" },
    { label: "Subscription Start Date", type: "date", state: "subscriptionStartDate" },
    { label: "Subscription End Date", type: "date", state: "subscriptionEndDate" },
  ];

  // Initial state
  const initialState = formFields.reduce((acc, field) => {
    acc[field.state] = field.type === "checkbox" ? false : "";
    return acc;
  }, {});

  // State for form fields and errors
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form fields
    const errors = {};
    formFields.forEach((field) => {
      if (field.type === "checkbox") {
        // No validation for checkboxes
        return;
      }
      if (!formData[field.state]) {
        errors[field.state] = `${field.label} is required`;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Your form submission logic goes here
    console.log("Form submitted:", formData);

    // Reset form fields after submission if needed
    setFormData(initialState);
    setFormErrors({});
  };

  // Function to handle form field changes
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setFormErrors({ ...formErrors, [field]: "" });
  };

  return (
    <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }} >
      <CardHeader p="6px 0px 22px 0px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody display="block">
        {/* Add Member Form */}
        <form onSubmit={handleSubmit}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={{ md: "4" }} mb="4">
            {formFields.map((field) => (
              <FormControl key={field.state} mb="4" isInvalid={formErrors[field.state]}>
                <FormLabel>{field.label}</FormLabel>
                {field.type === "checkbox" ? (
                  <Input
                    type={field.type}
                    checked={formData[field.state]}
                    onChange={(e) => handleInputChange(field.state, e.target.checked)}
                  />
                ) : (
                  <Input
                    type={field.type}
                    value={formData[field.state]}
                    onChange={(e) => handleInputChange(field.state, e.target.value)}
                  />
                )}
                <FormErrorMessage>{formErrors[field.state]}</FormErrorMessage>
              </FormControl>
            ))}
          </Grid>

          {/* Submit Button */}
          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default Projects;
