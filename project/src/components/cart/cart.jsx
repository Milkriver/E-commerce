import { CartItemCard } from "./cart-item-card";

export const Cart = (props) => {
    const { cart, removeItemHandler, addItemHandler } = props;
    console.log(cart);

    let summaryPrice = cart.reduce((accum, elem) => accum + elem.price*elem.quantity, 0)/100
    let summaryTax = (summaryPrice / 10);
    let total = summaryPrice + summaryTax;

    return (
        <div className="panel cart">
            <h1>Your Cart</h1>
            <ul className="cart-summary">
                {(cart.length === 0) ?
                    <p className="empty">Your cart is empty.</p>
                    :
                    cart.map((cartItem) => (
                        <CartItemCard menuItem={cartItem} addItemHandler={addItemHandler} removeItemHandler={removeItemHandler} key={cartItem.name} />
                    )
                    )
                }
            </ul>
            <div className="totals">
                <div className="line-item">
                    <div className="label">Subtotal:</div>
                    <div className="amount price subtotal">{(cart.length === 0) ? `$0`:`$${summaryPrice}`}
                    </div>
                </div>
                <div className="line-item">
                    <div className="label">Tax:</div>
                    <div className="amount price tax">{(cart.length === 0) ? `$0`:`$${summaryTax.toFixed(2)}`}</div>
                </div>
                <div className="line-item total">
                    <div className="label">Total:</div>
                    <div className="amount price total">{(cart.length === 0) ? `$0`:`$${total.toFixed(2)}`}</div>
                </div>
            </div>
        </div>
    )
};
