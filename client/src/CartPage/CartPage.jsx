import React, { useState } from 'react';
import './CartPage.css';
import Nav from '../Navigation/Nav';

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Sản phẩm 1',
      price: 20,
      image: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
      quantity: 2, // Thêm số lượng sản phẩm
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      price: 25,
      image: 'https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg',
      quantity: 1, // Thêm số lượng sản phẩm
    },
    {
      id: 3,
      name: 'Sản phẩm 3',
      price: 30,
      image: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
      quantity: 3, // Thêm số lượng sản phẩm
    },
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <>
      <Nav />
      <h1>Giỏ hàng</h1>
      <div className="cart-page">
      <div className="product-list">
        {cart.map((product) => (
          <div key={product.id} className="product">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <p>{product.name}</p>
              <p>${product.price}</p>
            </div>
            <button onClick={() => removeFromCart(product.id)}>Xóa</button>
          </div>
        ))}
      </div>
      <div className="checkout-summary">
        <h2>Thông tin thanh toán</h2>
        <table>
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>${product.price * product.quantity}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Tổng tiền:</td>
              <td>${calculateTotal()}</td>
            </tr>
          </tfoot>
        </table>
        <button className="checkout-button">Thanh toán</button>
      </div>
    </div>
    </>
  );

} 

export default CartPage;
