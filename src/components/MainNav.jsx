import { main_nav_items } from "../utils/main_nav_items";

const MainNav = () => {
  return (
    <ul className="ulNav mainNav">
      {main_nav_items.map((item) => {
        return (
          <a href={item.link} id={item.id}>
            <li>{item.text}</li>
          </a>
        );
      })}
    </ul>
  );
};

export default MainNav;
