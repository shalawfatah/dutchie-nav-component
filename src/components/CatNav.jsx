import { cat_nav_items } from "../utils/cat_nav_items";

const CatNav = () => {
  const store = "8-mile"
  return (
    <ul className="ulNav catNav">
      {cat_nav_items.map((item) => {
        return (
          <a
            href={`/stores/${store}/products${item.link}`}
            id={item.id}
          >
            <li>{item.text}</li>
          </a>
        );
      })}
    </ul>
  );
};

export default CatNav;
