import {
    Box,
    Heading,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    useToast,
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewRestaurantPage = () => {
    const [newRestaurant, setNewRestaurant] = useState({
        name: '',
        cuisine: '',
        description: '',
        image: '',
    });
    const navigate = useNavigate();
    const toast = useToast();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRestaurant({ ...newRestaurant, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/restaurants', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newRestaurant),
            });

            if (!response.ok) {
                throw new Error('Failed to add restaurant');
            }

            const data = await response.json();

            toast({
                title: "Restaurant added successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            navigate('/restaurants');
        } catch (error) {
            toast({
                title: "Error adding restaurant",
                description: error.message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box p={8}>
            <Heading mb={6}>Add New Restaurant</Heading>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                            name="name"
                            value={newRestaurant.name}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Cuisine</FormLabel>
                        <Input
                            name="cuisine"
                            value={newRestaurant.cuisine}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                            name="description"
                            value={newRestaurant.description}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Image URL</FormLabel>
                        <Input
                            name="image"
                            value={newRestaurant.image}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="blue">Add Restaurant</Button>
                </VStack>
            </form>
        </Box>
    );
};

export default NewRestaurantPage;