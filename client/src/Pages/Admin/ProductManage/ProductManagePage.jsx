import { 
    Box, 
    Heading, 
    Table, 
    Thead, 
    Tbody, 
    Th, 
    Button, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody,
    FormControl, 
    FormLabel, 
    Input, 
    Textarea, 
    Select } from '@chakra-ui/react';
import ProductItem from './ProductItem';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Nav from '../../../components/Navigation/Nav';

const ProductManagePage = () => {
  const productsPerPage = 5; 
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // create products
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const pictureUrl = useRef();
  const typeRef = useRef();
  const brandRef = useRef();
  const quantityRef = useRef();
  
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleCreateProduct = () => {
    setIsCreateModalOpen(true);
    // Code để xử lý tạo sản phẩm mới
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
    // Code để đóng modal
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }


   const handleSaveProduct = () => {
        const token = localStorage.getItem('jwtToken'); // Lấy token từ local storage hoặc context

        const newProduct = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
            pictureUrl: pictureUrl.current.value,
            type: typeRef.current.value,
            brand: brandRef.current.value,
            quantityInStock: quantityRef.current.value,
        };

        axios
            .post('http://localhost:5197/api/Products', newProduct, {
            headers: {
                Authorization: `Bearer ${token}`, 
            },
            })
            .then((response) => {
            console.log('Product created:', response.data);
                handleCloseCreateModal();
            })
            .catch((error) => {
                console.error('Error creating product:', error);
            });
    };

  useEffect(() => {
    axios.get('http://localhost:5197/api/Products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);


  return (
    <>
        <Nav />
        <Box p="8">
            <Heading as="h1" size="xl" mb="4">
                Product Management
            </Heading>
            <Button colorScheme="green" mb="4" onClick={handleCreateProduct}>
                Create Product
            </Button>

            <Modal isOpen={isCreateModalOpen} onClose={handleCloseCreateModal}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Create New Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {/* Form hoặc các trường nhập liệu để tạo sản phẩm */}
                    <FormControl mb="4">
                        <FormLabel>Name</FormLabel>
                        <Input placeholder="Product Name" ref={nameRef}/>
                    </FormControl>
                    <FormControl mb="4">
                        <FormLabel>Description</FormLabel>
                        <Textarea placeholder="Product Description" ref={descriptionRef}/>
                    </FormControl>
                    <FormControl mb="4">
                        <FormLabel>Price</FormLabel>
                        <Input type="number" placeholder="Product Price" ref={priceRef}/>
                    </FormControl>
                    <FormControl mb="4">
                        <FormLabel>image url</FormLabel>
                        <Input type="text" placeholder="Product File" ref={pictureUrl}/>
                    </FormControl>
                    <FormControl mb="4">
                        <FormLabel>Type</FormLabel>
                        <Input placeholder="Product Type" ref={typeRef}/>
                    </FormControl>
                    <FormControl mb="4">
                        <FormLabel>Brand</FormLabel>
                        <Input placeholder="Product Brand" ref={brandRef}/>
                    </FormControl>
                    <FormControl mb="4">
                        <FormLabel>Quantity in Stock</FormLabel>
                        <Input type="number" placeholder="Product Quantity in Stock" ref={quantityRef}/>
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    {/* Nút lưu sản phẩm */}
                    <Button colorScheme="blue" mr={3} onClick={handleSaveProduct}>
                        Save
                    </Button>
                    <Button variant="ghost" onClick={handleCloseCreateModal}>
                        Cancel
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>

            <Table variant="simple">
                <Thead>
                    <Th>Image</Th>
                    <Th>Name</Th>
                    <Th>Price</Th>
                    <Th>Description</Th>
                    <Th>Type</Th>
                    <Th>Brand</Th>
                    <Th>Action</Th>
                </Thead>
                <Tbody>
                {currentProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
                </Tbody>
            </Table>
            <Box mt="4">
                {pageNumbers.map((number) => (
                <Button key={number} size="sm" colorScheme="blue" mr="2" onClick={() => paginate(number)}>
                    {number}
                </Button>
                ))}
            </Box>
        </Box>
    </>
  );
};

export default ProductManagePage;


