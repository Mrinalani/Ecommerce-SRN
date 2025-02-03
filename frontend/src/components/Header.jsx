import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import Logo from '../assets/Logo.jpg'

const Header = () => {
  return (
    <Box mt={"20px"}>
        <Flex justifyContent={"space-between"}>
            <Link>
            <Box boxSize={"50px"} borderRadius={"full"} overflow={"hidden"}>
            <Image w={"full"} h={"full"} objectFit={"cover"} src={Logo} alt='SiaRamNaturals' />
            </Box>
            </Link>

            <Link>
              <FiLogOut size={"20px"}/>
            </Link>
        </Flex>
      
    </Box>
  )
}

export default Header
