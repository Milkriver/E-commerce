import { useState } from "react";

export const MenuButton = ({ addItemHandler, menuItem }) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const inCartHandler = () => {
        addItemHandler(menuItem);
    }
    const addHandler = () => {
        setIsButtonClicked(true)
        addItemHandler(menuItem);
    }

    return (
        (isButtonClicked) ?
            <button onClick={inCartHandler} className="in-cart">
                <img src="images/check.svg" alt="Check" />
                In Cart
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
