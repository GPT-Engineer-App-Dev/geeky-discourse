import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Heading, useToast } from '@chakra-ui/react';

const CreatePostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Title and content are required.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    
    // Create a new post object
    const newPost = {
      id: Date.now(), // Using timestamp as a simple unique id
      title: title.trim(),
      content: content.trim(),
      author: "Anonymous", // For now, we'll use "Anonymous" as the author
      timestamp: new Date().toISOString()
    };

    // Call the onPostCreated function passed as a prop
    onPostCreated(newPost);

    // Clear form fields after successful submission
    setTitle('');
    setContent('');

    toast({
      title: 'Post created successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="600px" margin="auto" mt={8}>
      <Heading mb={4}>Create New Post</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter post content"
              size="sm"
              resize="vertical"
              minHeight="150px"
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Create Post
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreatePostForm;