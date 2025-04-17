import React from 'react';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart, removeItem, updateQuantity, clearCart } from '../../redux/slices/cartSlice';
import { toast } from 'react-toastify';

const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, items, total } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }
    dispatch(clearCart());
    dispatch(closeCart());
    toast.success('Order placed successfully! Thank you for your purchase!');
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      dispatch(removeItem(id));
      toast.success('Item removed from cart!');
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[400px] bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Cart Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Your Cart</h2>
        <button
          onClick={() => dispatch(closeCart())}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <IoClose className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 overflow-y-auto h-[calc(100vh-200px)]">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4 p-2 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                  <p className="text-primary font-bold">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center">Your cart is empty</p>
        )}
      </div>

      {/* Cart Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-800 dark:text-white">Total:</span>
          <span className="text-lg font-bold text-primary">${total.toFixed(2)}</span>
        </div>
        <button 
          className={`w-full py-3 rounded-lg transition-colors duration-300 ${
            items.length > 0 
              ? 'bg-primary text-white hover:bg-secondary' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={items.length === 0}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart; 