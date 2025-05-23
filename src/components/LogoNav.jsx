import HodText from "./HodText";

const LogoNav = () => {
  return (
    <div className="logoNav">
      <div className="logo-group">
        <a link="/">
        <img
          alt="logo"
          src="https://shophod.com/wp-content/uploads/2025/05/H.O.D.-House-LogoFull-Color.svg"
        />
        </a>
        <a link="/">
        <HodText />
        </a>
      </div>
      <button>SHOP NOW</button>
    </div>
  );
};

export default LogoNav;
