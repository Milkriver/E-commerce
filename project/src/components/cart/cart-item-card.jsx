import { IcnDecButton } from "./inc-dec-buttons";

export const CartItemCard = (props) => {
    let changeQuantity = props.changeQuantity;
    let menuItem = props.menuItem;
    let itemsCount = props.itemsQuantity;

    return (
        <li>
            <div className="plate">
                <img src="images/plate__fish-sticks-fries.png" alt="Fish Sticks and Fries" className="plate" />
                <div className="quantity">{itemsCount}</div>
            </div>
            <div className="content">
                <p className="menu-item">{menuItem.name}</p>
                <p className="price">{`$${(menuItem.price / 100).toFixed(2)}`}</p>
            </div>
            <IcnDecButton changeQuantity={changeQuantity} itemsCount={itemsCount} />
            <div className="subtotal">
                {`$${(menuItem.price / 100 * itemsCount).toFixed(2)}`}
            </div>
        </li>
    )
};
