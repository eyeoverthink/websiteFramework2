import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
    return (
        <Box bg="gray.100" px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <Flex gap={4}>
                    <Link as={RouterLink} to="/">Home</Link>
                    <Link as={RouterLink} to="/create">Create</Link>
                    <Link as={RouterLink} to="/attractions">Attractions</Link>
                    <Link as={RouterLink} to="/newRestaurant">New Restaurant</Link>
                    <Link as={RouterLink} to="/about">About</Link>
                    <Link as={RouterLink} to="/contact">Contact</Link>
                </Flex>
            </Flex>
        </Box>
    );
}

export default NavBar;