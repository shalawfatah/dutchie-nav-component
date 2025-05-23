import { useState } from "react";
import HodText from "./HodText";
import ShopNav from "./ShopNav";

const LogoNav = () => {
  const [shop, setShop] = useState(false);
  return (
    <div className="logoNav">
      <div className="logo-group">
        <a href="/">
          <img
            alt="logo"
            src="https://shophod.com/wp-content/uploads/2025/05/H.O.D.-House-LogoFull-Color.svg"
          />
        </a>
        <a href="/">
          <HodText />
        </a>
      </div>
      <div
        className="btnNav"
        onMouseEnter={() => setShop(true)}
        onMouseLeave={() => setShop(false)}
      >
        <button>SHOP NOW</button>
        {shop ? <ShopNav /> : null}
      </div>
    </div>
  );
};

export default LogoNav;
