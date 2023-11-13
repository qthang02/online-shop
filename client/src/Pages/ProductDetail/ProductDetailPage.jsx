import React from 'react';
import {
  Box,
  Flex,
  Image,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import Nav from '../../components/Navigation/Nav';

const ProductDetailPage = () => {
  return (
    <>
        <Nav />
        <Box p="4" maxW="800px" mx="auto">
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        {/* Carousel */}
        <Box flex="1" pr={{ base: '0', md: '4' }}>
            <Image src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="Product Image" />
        </Box>

        {/* Product information */}
        <Box flex="1">
          <Box mb="4">
            <h2>Product Name</h2>
            <p>
              Product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </Box>

        
        <Box my="auto" flex="1" flexDir={'column'}>
            <NumberInput defaultValue={1} min={1} max={10} size="sm" mb="2" allowMouseWheel>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper  />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

          <Flex alignItems="center" mb="2">
            <IconButton
              aria-label="Add to favorites"
              icon={<FaHeart />}
              mr="2"
              />
            
            <Button colorScheme="teal" mr="2">  Add to cart</Button>
          </Flex>
        </Box>
        </Box>
      </Flex>
    </Box>
    </>
  );
};

export default ProductDetailPage;
