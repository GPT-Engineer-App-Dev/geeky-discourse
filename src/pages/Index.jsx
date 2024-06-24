import React from "react";
import { Box, Container, VStack, Heading, Text, Input, Button, Divider, HStack, Avatar } from "@chakra-ui/react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ForumPost = ({ title, author, content }) => (
  <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
    <HStack spacing={4} mb={2}>
      <Avatar size="sm" name={author} />
      <Text fontWeight="bold">{author}</Text>
    </HStack>
    <Heading size="md" mb={2}>{title}</Heading>
    <Text>{content}</Text>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">Tech Discussion Forum</Heading>
        
        <HStack>
          <Input placeholder="Search topics..." />
          <Button leftIcon={<FaSearch />}>Search</Button>
        </HStack>
        
        <HStack spacing={4}>
          <Button leftIcon={<FaPlus />} colorScheme="blue">New Topic</Button>
          <Button as={Link} to="/register" colorScheme="green">Register</Button>
        </HStack>
        
        <Divider />
        
        <VStack spacing={4} align="stretch">
          <ForumPost 
            title="React vs Vue: Which one to choose in 2023?"
            author="TechEnthusiast"
            content="I'm starting a new project and I'm torn between React and Vue. What are your thoughts on the current state of these frameworks?"
          />
          <ForumPost 
            title="The future of AI in software development"
            author="AIExplorer"
            content="With the rapid advancements in AI, how do you think it will impact the role of software developers in the next 5 years?"
          />
          <ForumPost 
            title="Best practices for securing a Node.js application"
            author="SecurityGuru"
            content="I'm working on a Node.js project and want to ensure it's as secure as possible. What are some must-implement security practices?"
          />
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;