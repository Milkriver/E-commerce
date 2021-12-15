export const IcnDecButton = ({addItemHandler, removeItemHandler, menuItem}) => {
    return (
        <div className="quantity__wrapper">
            <button onClick={() => removeItemHandler(menuItem)} className="decrease">
                <img src="images/chevron.svg" alt="" />
            </button>
            <div className="quantity">{menuItem.quantity}</div>
            <button onClick={() => addItemHandler(menuItem)} className="increase">
                <img src="images/chevron.svg" alt="" />
            </button>
        </div>
    )
};
