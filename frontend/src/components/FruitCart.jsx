import React from "react";
import { Box, Grid, Image, Text, Button } from "@chakra-ui/react";

const cartItems = [
  {
    id: 1,
    name: "Banana",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-IP0vGHOYDQUqEokK1k-j5GGBh9Af-XWDw&s",
    price: 2.5,
    description: "Fresh and juicy bananas.",
  },
  {
    id: 2,
    name: "Apple",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tQ16kiB-xHTEe0SMP9b_bugCH7V9eiNa6g&s",
    price: 1.2,
    description: "Sweet and nutritious apples.",
  },
  {
    id: 3,
    name: "Orange",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1cBW2TRz82ICIVtB8DENnyVZjRZScM79Ww&s",
    price: 3.0,
    description: "Citrusy and vitamin C-rich oranges.",
  },
  {
    id: 4,
    name: "Grapes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZZPPhEsIwawrxDdlbGi-M0aj0DOu6OXWgw&s",
    price: 2.8,
    description: "Seedless and delicious grapes.",
  },
  {
    id: 5,
    name: "Pineapple",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZZPPhEsIwawrxDdlbGi-M0aj0DOu6OXWgw&s",
    price: 4.5,
    description: "Tropical and tangy pineapples.",
  },
  {
    id: 6,
    name: "Watermelon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tQ16kiB-xHTEe0SMP9b_bugCH7V9eiNa6g&s",
    price: 5.0,
    description: "Refreshing and hydrating watermelon.",
  },
  {
    id: 7,
    name: "Mango",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMCAsmpBVAIpzAHfHBDmf3CSse-iF6vMuSQ&s",
    price: 3.5,
    description: "Sweet and tropical mangoes.",
  },
  {
    id: 8,
    name: "Strawberry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tQ16kiB-xHTEe0SMP9b_bugCH7V9eiNa6g&s",
    price: 4.0,
    description: "Fresh and juicy strawberries.",
  },
  {
    id: 9,
    name: "Peach",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tQ16kiB-xHTEe0SMP9b_bugCH7V9eiNa6g&s",
    price: 3.2,
    description: "Soft and sweet peaches.",
  },
  {
    id: 10,
    name: "Cherry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tQ16kiB-xHTEe0SMP9b_bugCH7V9eiNa6g&s",
    price: 5.5,
    description: "Ripe and delicious cherries.",
  },
  {
    id: 11,
    name: "Pear",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMCAsmpBVAIpzAHfHBDmf3CSse-iF6vMuSQ&s",
    price: 2.7,
    description: "Crisp and juicy pears.",
  },
  {
    id: 12,
    name: "Kiwi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RKGGDUrJJ1bHvBykpAa-Xcw_v6RspKvYrA&s",
    price: 3.8,
    description: "Tangy and vitamin-rich kiwis.",
  },
  {
    id: 13,
    name: "Papaya",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMCAsmpBVAIpzAHfHBDmf3CSse-iF6vMuSQ&s",
    price: 4.2,
    description: "Tropical and fiber-rich papaya.",
  },
  {
    id: 14,
    name: "Pomegranate",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1cBW2TRz82ICIVtB8DENnyVZjRZScM79Ww&s",
    price: 5.0,
    description: "Juicy and antioxidant-rich pomegranate.",
  },
  {
    id: 15,
    name: "Blueberry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMCAsmpBVAIpzAHfHBDmf3CSse-iF6vMuSQ&s",
    price: 6.0,
    description: "Nutritious and flavorful blueberries.",
  },
  {
    id: 16,
    name: "Raspberry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1cBW2TRz82ICIVtB8DENnyVZjRZScM79Ww&s",
    price: 5.8,
    description: "Tart and delicious raspberries.",
  },
  {
    id: 17,
    name: "Blackberry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1cBW2TRz82ICIVtB8DENnyVZjRZScM79Ww&s",
    price: 5.7,
    description: "Juicy and sweet blackberries.",
  },
  {
    id: 18,
    name: "Coconut",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMCAsmpBVAIpzAHfHBDmf3CSse-iF6vMuSQ&s",
    price: 4.0,
    description: "Refreshing and nutrient-rich coconut.",
  },
  {
    id: 19,
    name: "Dragon Fruit",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RKGGDUrJJ1bHvBykpAa-Xcw_v6RspKvYrA&s",
    price: 6.5,
    description: "Exotic and vitamin-packed dragon fruit.",
  },
  {
    id: 20,
    name: "Fig",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RKGGDUrJJ1bHvBykpAa-Xcw_v6RspKvYrA&s",
    price: 4.8,
    description: "Naturally sweet and fiber-rich figs.",
  },
];


const FruitCart = () => {
  return (
    <Box maxW="1200px" mx="auto" p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={5}>
        Fruits
      </Text>
      <Text fontSize="xl" mb={5}>
        Select fruits from here...
      </Text>
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
        {cartItems.map((item) => (
          <Box key={item.id} p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
            <Image
              src={item.image || "https://via.placeholder.com/150"}
              alt={item.name}
              borderRadius="md"
              mb={3}
              h={"250px"}
              w={"300px"}
              objectFit={"cover"}
            />
            <Text fontSize="lg" fontWeight="bold" isTruncated >
              {item.name}
            </Text>
            <Text fontSize="sm" color="gray.600" mb={2} isTruncated>
              {item.description}
            </Text>
            <Text fontSize="lg" fontWeight="bold" color="teal.500">
              ${item.price.toFixed(2)}
            </Text>
            <Button colorScheme="teal" mt={3} width="full">
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default FruitCart;
