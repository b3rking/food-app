import Header from './components/Layout/Header'
import React, { useState } from 'react'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
    const [showCart, setShowCart] = useState(false)

    const showCartHandler = () => {
        setShowCart(true)
    }

    const hideCartHandler = () => {
        setShowCart(false)
    }

    return (
        <CartProvider>
            <Header onShowCart={showCartHandler}/>
            {showCart && <Cart onHideCart={hideCartHandler}/>}
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
