import React from 'react';
import Layout from './Layout';

const Cart = () => {
    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

    // Calculate tax (10%)
    const tax = (totalPrice * 0.1).toFixed(2);

    // Calculate grand total
    const grandTotal = (parseFloat(totalPrice) + parseFloat(tax)).toFixed(2);

    // Function to remove item from cart
    const removeFromCart = (itemId) => {
        // Filter out the item with the specified itemId
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        // Update local storage with the updated cart items
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        // Reload the page to reflect the changes
       // window.location.reload();
    };

    return (
        <Layout>
            <section className="container mx-auto px-4">
                <div className="flex justify-center items-center mt-10 mb-8">
                    <h1 className="text-2xl font-black">
                        SHOPPING CART
                    </h1>
                    <span className="w-24 h-1 bg-red-500 absolute mt-10"></span>
                </div>
                {/* Cart Items */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-red-100">
                            <tr>
                                <th className="py-3 px-4 text-left">Item</th>
                                <th className="py-3 px-4 text-left">Price</th>
                                <th className="py-3 px-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4">{item.title}</td>
                                    <td className="py-2 px-4">${item.price}</td>
                                    <td className="py-2 px-4">
                                        <button onClick={() => removeFromCart(item.id)} className= "bg-red-500 text-white py-1 px-2 rounded-md">
                                            -
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Total */}
                <div className="mt-6 flex justify-between items-center">
                    <p className="text-lg font-semibold">Total:</p>
                    <p id="totalPrice" className="text-xl font-bold">${totalPrice}</p>
                </div>
                {/* Tax */}
                <div className="mt-2 flex justify-between items-center">
                    <p className="text-lg font-semibold">Tax (10%):</p>
                    <p id="tax" className="text-xl font-bold">${tax}</p>
                </div>
                {/* Grand Total */}
                <div className="mt-6 flex justify-between items-center bg-red-100 p-4 rounded-lg">
                    <p className="text-xl font-bold">Grand Total:</p>
                    <p id="grandTotal" className="text-2xl font-bold">${grandTotal}</p>
                </div>
                {/* Checkout Button */}
                <div className="flex flex-col md:flex-row md:items-center gap-9 pt-8">
                    <a className="bg-black text-white rounded-md py-4 px-4 text-center hover:bg-white hover:text-black hover:shadow-md" href="signup.html">Checkout</a>
                </div>
            </section>
        </Layout>
    );
};

export default Cart;
