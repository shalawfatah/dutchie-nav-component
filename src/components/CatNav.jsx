import { cat_nav_items } from "../utils/cat_nav_items";

const CatNav = () => {
  return (
    <ul className="ulNav catNav">
      {cat_nav_items.map((item) => {
        return <li id={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export default CatNav;
