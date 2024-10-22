import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

function SearchPage() {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('term');

  useEffect(() => {
    if (searchTerm) {
      // Replace this with your actual API call
      fetch(`/api/restaurants/search?term=${searchTerm}`)
        .then(response => response.json())
        .then(data => setResults(data))
        .catch(error => console.error('Error:', error));
    }
  }, [searchTerm]);

  return (
    <Box p={8}>
      <Heading mb={6}>Search Results for "{searchTerm}"</Heading>
      {results.length === 0 ? (
        <Text>No results found.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {results.map((item, index) => (
            <Box key={index} borderWidth={1} borderRadius="lg" p={4}>
              <Heading size="md">{item.name}</Heading>
              <Text>{item.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default SearchPage;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

// function SearchPage() {
//   const [results, setResults] = useState([]);
//   const location = useLocation();
//   const searchTerm = new URLSearchParams(location.search).get('term');

//   useEffect(() => {
//     if (searchTerm) {
//       // Replace this with your actual API call
//       fetch(`/api/restaurants/search?term=${searchTerm}`)
//         .then(response => response.json())
//         .then(data => setResults(data))
//         .catch(error => console.error('Error:', error));
//     }
//   }, [searchTerm]);

//   return (
//     <Box p={8}>
//       <Heading mb={6}>Search Results for "{searchTerm}"</Heading>
//       {results.length === 0 ? (
//         <Text>No results found.</Text>
//       ) : (
//         <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
//           {results.map((item, index) => (
//             <Box key={index} borderWidth={1} borderRadius="lg" p={4}>
//               <Heading size="md">{item.name}</Heading>
//               <Text>{item.description}</Text>
//             </Box>
//           ))}
//         </SimpleGrid>
//       )}
//     </Box>
//   );
// }

// export default SearchPage;