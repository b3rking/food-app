import CartContext from "./cart-context";

const CartProvider = (props) => {
    const addToCartHandler = () => {};
    const removeFromCartHandler = () => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
