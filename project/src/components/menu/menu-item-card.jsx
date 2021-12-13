import { MenuButton } from "./menu-button";

export const MenuItemCard = (props) => {
    const { addItemHandler, menuItem } = props;
    return (
        <li>
            <div className="plate">
                <img src={menuItem.image} alt={menuItem.alt} className="plate" />
            </div>
            <div className="content">
                <p className="menu-item">{menuItem.name}</p>
                <p className="price">{`$${menuItem.price / 100}`}</p>
                <MenuButton menuItem={menuItem} addItemHandler={addItemHandler}/>
            </div>
        </li>
    )
};
