// ProductItem.jsx
import { Tr, Td, Image, Button } from '@chakra-ui/react';
import { RiPencilLine, RiDeleteBinLine } from 'react-icons/ri';

const ProductItem = ({ product }) => {
  const handleEdit = () => {
    // Xử lý chức năng chỉnh sửa sản phẩm
    console.log(`Edit product: ${product.name}`);
  };

  const handleDelete = () => {
    // Xử lý chức năng xóa sản phẩm
    console.log(`Delete product: ${product.name}`);
  };


  return (
    <Tr>
      <Td>
        <Image src={product.pictureUrl} alt={product.name} w="50px" h="50px" />
      </Td>
      <Td>{product.name}</Td>
      <Td>${product.price}</Td>
      <Td>{product.description}</Td>
      <Td>{product.type}</Td>
      <Td>{product.brand}</Td>
      
      <Td>
        <Button colorScheme="blue" size="sm" mr="2" onClick={handleEdit}>
            <RiPencilLine />
        </Button>
        <Button colorScheme="red" size="sm" onClick={handleDelete}>
            <RiDeleteBinLine />
        </Button>
      </Td>
    </Tr>
  );
};

export default ProductItem;
