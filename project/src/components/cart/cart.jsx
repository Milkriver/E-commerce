import { useState } from "react";
import { CartItemCard } from "./cart-item-card";

export const Cart = (props) => {
    let itemPrice = props.menuItem.price / 100;
    let [itemsQuantity, setItemsQuantity] = useState(props.menuItem.count);
    let changeQuantity = (changedItemsQuantity) => {
        setItemsQuantity (changedItemsQuantity);
    }
    let summaryPrice = itemPrice * itemsQuantity;
    let summaryTax = summaryPrice / 10;
    let total = summaryPrice + summaryTax;

    return (
        <div className="panel cart">
            <h1>Your Cart</h1>
            <ul className="cart-summary">
                {(itemsQuantity === 0) ?
                    <p className="empty">Your cart is empty.</p>
                    :
                    <CartItemCard menuItem={props.menuItem} changeQuantity={changeQuantity} itemsQuantity={itemsQuantity} />
                }
            </ul>
            <div className="totals">
                <div className="line-item">
                    <div className="label">Subtotal:</div>
                    <div className="amount price subtotal">
                        {(itemsQuantity === 0) ? `$0` : `$${summaryPrice.toFixed(2)}`
                        }
                    </div>
                </div>
                <div className="line-item">
                    <div className="label">Tax:</div>
                    <div className="amount price tax">{`$${summaryTax.toFixed(2)}`}</div>
                </div>
                <div className="line-item total">
                    <div className="label">Total:</div>
                    <div className="amount price total">{`$${total.toFixed(2)}`}</div>
                </div>
            </div>
        </div>
    )
};
