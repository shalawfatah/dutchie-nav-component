import { shop_nav_items } from "../utils/shop_nav_items";

const ShopNav = () => {
  return (
    <ul className="shopNav">
      {shop_nav_items.map((item) => {
        return (
          <a link={link.item}>
            <li id={item.id}>{item.text}</li>
          </a>
        );
      })}
    </ul>
  );
};

export default ShopNav;
