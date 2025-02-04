import { Flex, Image, Text, Box, Grid } from '@chakra-ui/react';
import React from 'react';
import Fruit_stock from '../assets/Fruit_stock.jpg';
import Vegetable_stock from '../assets/Vegetable_stock.webp';
import Grain_stock from '../assets/Grain_stock.jpeg';

const categories = [
  { name: 'Fruits', image: Fruit_stock },
  { name: 'Vegetables', image: Vegetable_stock },
  { name: 'Grains', image: Grain_stock },
];

const Category = () => {
  return (
    <Box maxW="1200px" mx="auto" textAlign="center" p={5}>
      <Text fontSize="32px" fontWeight="bold" mb={6} color="gray.700">
        Choose a Category
      </Text>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
        {categories.map((category, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            bg="white"
            p={4}
            borderRadius="12px"
            boxShadow="lg"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
            cursor="pointer"
          >
            <Image 
              src={category.image} 
              h="180px" 
              w="100%" 
              objectFit="cover" 
              borderRadius="8px"
            />
            <Text fontSize="24px" fontWeight="semibold" mt={3} color="gray.800">
              {category.name}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
