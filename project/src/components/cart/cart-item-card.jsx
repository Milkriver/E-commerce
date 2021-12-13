import { IcnDecButton } from "./inc-dec-buttons";

export const CartItemCard = ({ removeItemHandler, menuItem, addItemHandler }) => {

    return (
        <li>
            <div className="plate">
                <img src="images/plate__fish-sticks-fries.png" alt="Fish Sticks and Fries" className="plate" />
                <div className="quantity">{menuItem.quantity}</div>
            </div>
            <div className="content">
                <p className="menu-item">{menuItem.name}</p>
                <p className="price">{`$${(menuItem.price / 100).toFixed(2)}`}</p>
            </div>
            <IcnDecButton removeItemHandler={removeItemHandler} addItemHandler={addItemHandler} menuItem={menuItem} />
            <div className="subtotal">
                {`$${(menuItem.price / 100 * menuItem.quantity).toFixed(2)}`}
            </div>
        </li>
    )
};
