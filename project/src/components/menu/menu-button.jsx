import { useState } from "react";

// import { useEffect } from "react";

export const MenuButton = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    return (
        (isButtonClicked) ?
            <button onClick={setIsButtonClicked} className="in-cart">
            <img src="images/check.svg" alt="Check"/>
            In Cart
            </button>
            :
            <button onClick={setIsButtonClicked} className="add" dataset>
            Add to Cart
            </button>   
    )
};
