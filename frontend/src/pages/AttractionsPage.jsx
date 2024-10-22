
import { Box, Heading, Text, SimpleGrid, Image, VStack, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const attractions = [
  { name: "Lake Merritt", description: "Heart-shaped lagoon with walking trails.", imageUrl: "https://example.com/lake-merritt.jpg" },
  { name: "Oakland Museum of California", description: "Art, history, and natural sciences museum.", imageUrl: "https://example.com/oakland-museum.jpg" },
  { name: "Redwood Regional Park", description: "East Bay park with scenic hiking trails.", imageUrl: "https://example.com/redwood-park.jpg" },
];

const restaurants = [
  { name: "Homeroom", description: "Famous for gourmet mac and cheese.", imageUrl: "https://example.com/homeroom.jpg" },
  { name: "Zachary's Chicago Pizza", description: "Beloved deep-dish pizza joint.", imageUrl: "https://example.com/zacharys.jpg" },
  { name: "Burma Superstar", description: "Popular Burmese restaurant.", imageUrl: "https://example.com/burma-superstar.jpg" },
];

const hotels = [
  { name: "Oakland Marriott City Center", description: "Downtown hotel with city views.", imageUrl: "https://example.com/marriott.jpg" },
  { name: "Waterfront Hotel", description: "Scenic hotel on Jack London Square.", imageUrl: "https://example.com/waterfront.jpg" },
  { name: "Claremont Club & Spa", description: "Luxury hotel with spa services.", imageUrl: "https://example.com/claremont.jpg" },
];

const ItemCard = ({ name, description, imageUrl }) => (
  <Box borderWidth={1} borderRadius="lg" overflow="hidden">
    <Image src={imageUrl} alt={name} height={200} width="100%" objectFit="cover" />
    <VStack p={4} align="start">
      <Heading size="md">{name}</Heading>
      <Text>{description}</Text>
    </VStack>
  </Box>
);

const AttractionsPage = () => {
  return (
    <Box p={8}>
      <Heading mb={6}>Discover Oakland, CA</Heading>
      <Text mb={8}>Explore the best of Oakland's attractions, restaurants, and hotels.</Text>
      
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Attractions</Tab>
          <Tab>Restaurants</Tab>
          <Tab>Hotels</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              {attractions.map((item, index) => (
                <ItemCard key={index} {...item} />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              {restaurants.map((item, index) => (
                <ItemCard key={index} {...item} />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              {hotels.map((item, index) => (
                <ItemCard key={index} {...item} />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default AttractionsPage;