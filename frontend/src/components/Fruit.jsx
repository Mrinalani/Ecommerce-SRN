import React from "react";
import { Box, Image, Text, Button, VStack } from "@chakra-ui/react";

const Fruit = () => {

  return (
    <>
    <Text fontSize={"30px"} fontWeight={"bold"}>Ananas</Text>
    <Box maxW="500px" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7wg5Ub7zLTjF88I3s3-HXTIAw6OlHWFLSA&s"
        alt={"fruit"}
        borderRadius="md"
        boxSize="300px"
        objectFit="cover"
        mx="auto"
        mb={4}
      />
      <VStack spacing={4} align="center">
        <Text fontSize="2xl" fontWeight="bold">
          Ananas
        </Text>
        <Text fontSize="lg" color="gray.600" textAlign="center">
          {"Sweet and nutritious apple."}
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="teal.500">
          $2.00
        </Text>
        <Button colorScheme="teal" size="lg" width="full">
          Add to Cart
        </Button>
      </VStack>
    </Box>
    </>
  );
};

export default Fruit;
