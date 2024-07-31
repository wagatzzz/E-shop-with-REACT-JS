import { useState, useEffect } from 'react';

const useCart = () => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);

        let updatedCartItems;
        if (existingItem) {
            updatedCartItems = cartItems.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            const newCartItem = { ...product, quantity: 1 };
            updatedCartItems = [...cartItems, newCartItem];
        }

        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));

        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.textContent = 'Product added to cart!';
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 1000);
    };

    const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    const updateQuantity = (itemId, newQuantity) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                item.quantity = newQuantity < 1 ? 1 : newQuantity;
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
    const tax = (totalPrice * 0.1).toFixed(2);
    const grandTotal = (parseFloat(totalPrice) + parseFloat(tax)).toFixed(2);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return { cartItems, addToCart, removeFromCart, updateQuantity, totalPrice, tax, grandTotal };
};

export default useCart;
