import Header from './components/Layout/Header'
import React, { useState } from 'react'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
    const [showCart, setShowCart] = useState(false)

    const showCartHandler = () => {
        setShowCart(true)
    }

    const hideCartHandler = () => {
        setShowCart(false)
    }

    return (
        <React.Fragment>
            <Header onShowCart={showCartHandler}/>
            {showCart && <Cart onHideCart={hideCartHandler}/>}
            <main>
                <Meals />
            </main>
        </React.Fragment>
    );
}

export default App;
