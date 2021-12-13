import { useState } from "react";

export const MenuButton = ({onAddButton}) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const inCartHandler = () => {
            setIsButtonClicked(false)
            onAddButton?.();
    }
    
    return (
        (isButtonClicked) ?
            <button onClick={inCartHandler} className="in-cart">
                <img src="images/check.svg" alt="Check" />
                In Cart
            </button>
            :
            <button
                onClick={() => setIsButtonClicked(true)}
                className="add"
                dataset="true"
            >
                Add to Cart
            </button>
    )
};
