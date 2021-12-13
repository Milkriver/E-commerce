import { useState } from "react";
import { CartItemCard } from "./cart-item-card";

export const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    // let itemPrice = props.menuItem.price / 100;
    let [itemsQuantity, setItemsQuantity] = useState(0);
    let changeQuantity = (changedItemsQuantity) => {
        setItemsQuantity(changedItemsQuantity);
    }
    // let summaryPrice = itemPrice * itemsQuantity;
    // let summaryTax = summaryPrice / 10;
    // let total = summaryPrice + summaryTax;

    return (
        <div className="panel cart">
            <h1>Your Cart</h1>
            <ul className="cart-summary">
                {(cart.length === 0) ?
                    <p className="empty">Your cart is empty.</p>
                    :
                    cart.map((cartItem) => (
                        <CartItemCard menuItem={cartItem} changeQuantity={changeQuantity} itemsQuantity={cartItem.quantity} key={cartItem.name} />
                    )
                    )
                }
            </ul>
            <div className="totals">
                <div className="line-item">
                    <div className="label">Subtotal:</div>
                    <div className="amount price subtotal">
                        {(itemsQuantity === 0) ? `$0` : `$100`
                        }
                    </div>
                </div>
                <div className="line-item">
                    <div className="label">Tax:</div>
                    <div className="amount price tax">{`$100`}</div>
                </div>
                <div className="line-item total">
                    <div className="label">Total:</div>
                    <div className="amount price total">{`$100`}</div>
                </div>
            </div>
        </div>
    )
};
