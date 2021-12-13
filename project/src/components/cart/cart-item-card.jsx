
export const CartItemCard = (props) => {
    let menuItem = props.menuItem;
    return (
        <li>
        <div class="plate">
          <img src="images/plate__fish-sticks-fries.png" alt="Fish Sticks and Fries" class="plate" />
          <div class="quantity">{menuItem.count}</div>
        </div>
        <div class="content">
          <p class="menu-item">{menuItem.name}</p>
          <p class="price">{`$${menuItem.price / 100}`}</p>
        </div>
        <div class="quantity__wrapper">
          <button class="decrease">
            <img src="images/chevron.svg"  alt=""/>
          </button>
          <div class="quantity">{menuItem.count}</div>
          <button class="increase">
            <img src="images/chevron.svg" alt=""/>
          </button>
        </div>
        <div class="subtotal">
        {`$${menuItem.price / 100*menuItem.count}`}
        </div>
      </li>  
        )
};
