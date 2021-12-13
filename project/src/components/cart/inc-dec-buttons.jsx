import { useState } from "react";

export const IcnDecButton = (props) => {
    let changeQuantity = props.changeQuantity;
    let itemsQuantity = props.itemsCount;
    const [isButtonClicked, setIsButtonClicked] = useState(itemsQuantity);
    const decreaseQuantity = () => {
        const changes = (isButtonClicked > 0) ? isButtonClicked - 1 : isButtonClicked
        setIsButtonClicked(changes);
        changeQuantity(changes);
    }
    const increaseQuantity = () => {
        setIsButtonClicked(isButtonClicked + 1);
        changeQuantity(isButtonClicked + 1);
    }


    return (
        <div className="quantity__wrapper">
            <button onClick={decreaseQuantity} className="decrease">
                <img src="images/chevron.svg" alt="" />
            </button>
            <div className="quantity">{isButtonClicked}</div>
            <button onClick={increaseQuantity} className="increase">
                <img src="images/chevron.svg" alt="" />
            </button>
        </div>
    )
};
