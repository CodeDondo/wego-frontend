import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/WegoLogo.png";
import { BurgerWrapper, Navigation } from "./NavBarStyled";
import { useState, useEffect } from "react";

export const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <BurgerWrapper>
          <Menu right>
            <NavLink to="/">
              <img src={Logo} alt="NavLogo" style={{ width: "120px", marginBottom: "20px" }} />
            </NavLink>
            <NavLink to="/lift" className="menu-item">Find et lift</NavLink>
            <NavLink to="/howtouse" className="menu-item">Sådan virker det</NavLink>
            <NavLink to="/minside" className="menu-item">Min side</NavLink>
            <NavLink to="/login" className="menu-item">Login</NavLink>
          </Menu>
        </BurgerWrapper>
      ) : (
        <Navigation>
          <ul>
            <NavLink to="/">
              <img src={Logo} alt="NavLogo" />
            </NavLink>
            <li><NavLink to="/lift">Find et lift</NavLink></li>
            <li><NavLink to="/howtouse">Sådan virker det</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to="/minside">Min side</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </Navigation>
      )}
    </>
  );
};
