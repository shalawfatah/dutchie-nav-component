import HodText from "./HodText";

const LogoNav = () => {
  return (
    <div className="logoNav">
      <div className="logo-group">
        <img
          alt="logo"
          src="https://shophod.com/wp-content/uploads/2025/05/H.O.D.-House-LogoFull-Color.svg"
        />
        <HodText />
      </div>
      <button>SHOP NOW</button>
    </div>
  );
};

export default LogoNav;
