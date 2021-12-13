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
                        <MenuItemCard menuItem={menuItem}
                        />
                    ))}
                </ul>
            </div>
            <Cart menuItem={menuItems[0]}/>
            {/* <div className="panel cart">

                <h1>Your Cart</h1>
                

                <ul className="cart-summary">

                </ul>

                <div className="totals">
                    <div className="line-item">
                        <div className="label">Subtotal:</div>
                        <div className="amount price subtotal">$10.80</div>
                    </div>
                    <div className="line-item">
                        <div className="label">Tax:</div>
                        <div className="amount price tax">$1.05</div>
                    </div>
                    <div className="line-item total">
                        <div className="label">Total:</div>
                        <div className="amount price total">$11.85</div>
                    </div>
                </div>
            </div> */}
        </div>






    )

};

