import { useState } from "react";
import { Cart } from "./cart/cart";
import { MenuItemCard } from "./menu/menu-item-card";

export function Main(props) {
    const [cart, setCart] = useState([]);
    const addItemHandler = (item) => {
        console.log(item);
        const filtredItemsIndex = cart.findIndex(element => element.id === item.id)
        if (filtredItemsIndex !== -1) {
            const modifiedItem = Object.assign({}, cart[filtredItemsIndex]);
            modifiedItem.quantity++;
            const cartItems = [...cart];
            cartItems[filtredItemsIndex] = modifiedItem;
            setCart(cartItems);

        } else {
            const modifiedItem = Object.assign({}, item, { quantity: 1 });
            const cartItems = [...cart];
            cartItems.push(modifiedItem);
            setCart(cartItems);
        }

    }
    let menuItems = props.menuItems;
    return (
        <div className="wrapper menu">
            <div className="panel">
                <h1>To Go Menu</h1>
                <ul className="menu">
                    {menuItems.map((menuItem) => (
                        <MenuItemCard menuItem={menuItem} addItemHandler={addItemHandler} key={menuItem.name}
                        />
                    ))}
                </ul>
            </div>
            <Cart cart={cart} />
        </div>






    )

};

