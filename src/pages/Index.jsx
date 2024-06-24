import React, { useState } from "react";
import { Box, Container, VStack, Heading, Text, Input, Button, Divider, HStack, Avatar } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import CreatePostForm from "../components/CreatePostForm";

const ForumPost = ({ title, author, content, timestamp }) => (
  <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
    <HStack spacing={4} mb={2}>
      <Avatar size="sm" name={author} />
      <Text fontWeight="bold">{author}</Text>
      <Text fontSize="sm" color="gray.500">{timestamp}</Text>
    </HStack>
    <Heading size="md" mb={2}>{title}</Heading>
    <Text>{content}</Text>
  </Box>
);

const Index = () => {
  const [posts, setPosts] = useState([]);

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">Tech Discussion Forum</Heading>
        
        <CreatePostForm onPostCreated={handlePostCreated} />
        
        <HStack>
          <Input placeholder="Search topics..." />
          <Button leftIcon={<FaSearch />}>Search</Button>
        </HStack>
        
        <HStack spacing={4}>
          <Button as={Link} to="/register" colorScheme="green">Register</Button>
        </HStack>
        
        <Divider />
        
        <VStack spacing={4} align="stretch">
          {posts.map((post) => (
            <ForumPost
              key={post.id}
              title={post.title}
              author={post.author}
              content={post.content}
              timestamp={post.timestamp}
            />
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;