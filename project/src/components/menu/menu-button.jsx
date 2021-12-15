export const MenuButton = ({ addItemHandler, menuItem, isItemInCart }) => {
    const inCartHandler = () => {
        addItemHandler(menuItem);
    }
    const addHandler = () => {
        addItemHandler(menuItem);
    }

    return (
        (isItemInCart) ?
            <button onClick={inCartHandler} className="in-cart">
                <img src="images/check.svg" alt="Check" />In Cart
            </button>
            :
            <button
                onClick={addHandler}
                className="add"
                dataset="true"
            >
                Add to Cart
            </button>
    )
};
