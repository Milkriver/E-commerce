import { Cart } from "./cart/cart";
import { MenuItemCard } from "./menu/menu-item-card";

export function Main(props) {
    let menuItems = props.menuItems;
    return (
        <div className="wrapper menu">
            <div className="panel">
                <h1>To Go Menu</h1>
                <ul className="menu">
                    {menuItems.map((menuItem) => (
                        <MenuItemCard menuItem={menuItem} key={menuItem.name}
                        />
                    ))}
                </ul>
            </div>
            <Cart menuItem={menuItems[0]}/>
        </div>






    )

};

