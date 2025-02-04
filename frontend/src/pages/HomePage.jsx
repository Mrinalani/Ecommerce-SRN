import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Category from '../components/Category'

const HomePage = () => {
  return (
    <Flex h={"full"} mt={"20px"} flexDir={"column"} >
      <Box w={"full"} h={"150px"} border={"2px solid red"} >ADD</Box>
      <Box flexGrow={1} w={"full"} mt={"20px"}> <Category /></Box>
    </Flex>
  )
}

export default HomePage
