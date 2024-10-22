import React from 'react';
import { Box, Heading, Text, SimpleGrid, VStack, Image, Badge, Flex } from "@chakra-ui/react";

const restaurants = [
  {
    name: "Homeroom",
    cuisine: "American",
    description: "Famous for gourmet mac and cheese with a twist.",
    imageUrl: "https://example.com/homeroom.jpg",
    neighborhood: "Temescal"
  },
  {
    name: "Zachary's Chicago Pizza",
    cuisine: "Pizza",
    description: "Beloved deep-dish pizza joint with a loyal following.",
    imageUrl: "https://example.com/zacharys.jpg",
    neighborhood: "Rockridge"
  },
  {
    name: "Burma Superstar",
    cuisine: "Burmese",
    description: "Popular Burmese restaurant known for tea leaf salad.",
    imageUrl: "https://example.com/burma-superstar.jpg",
    neighborhood: "Temescal"
  },
  {
    name: "Taco Sinaloa",
    cuisine: "Mexican",
    description: "Authentic street tacos and burritos from a food truck.",
    imageUrl: "https://example.com/taco-sinaloa.jpg",
    neighborhood: "Fruitvale"
  },
  {
    name: "Brown Sugar Kitchen",
    cuisine: "Soul Food",
    description: "Modern soul food with a focus on organic ingredients.",
    imageUrl: "https://example.com/brown-sugar-kitchen.jpg",
    neighborhood: "West Oakland"
  },
  {
    name: "Champa Garden",
    cuisine: "Laotian",
    description: "Hidden gem serving Laotian, Thai, and Vietnamese cuisine.",
    imageUrl: "https://example.com/champa-garden.jpg",
    neighborhood: "East Oakland"
  }
];

const RestaurantCard = ({ name, cuisine, description, imageUrl, neighborhood }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={imageUrl} alt={name} height="200px" width="100%" objectFit="cover" />
    <Box p="6">
      <Flex justify="space-between" align="baseline">
        <Heading size="md" mb={2}>{name}</Heading>
        <Badge borderRadius="full" px="2" colorScheme="teal">
          {cuisine}
        </Badge>
      </Flex>
      <Text color="gray.500" fontSize="sm" mb={2}>
        {neighborhood}
      </Text>
      <Text mt={2}>{description}</Text>
    </Box>
  </Box>
);

export const RestaurantsPage = () => {
  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading mb={4}>Discover Oakland's Culinary Delights</Heading>
          <Text fontSize="xl">
            Experience the rich tapestry of flavors that make Oakland a food lover's paradise.
            From soul food to international cuisines, our city's restaurants reflect the diversity of our community.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

export default RestaurantsPage;