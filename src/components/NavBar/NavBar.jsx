import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/WegoLogo.png";
import { BurgerWrapper, Navigation, Button } from "./NavBarStyled";
import { useState, useEffect } from "react";
import { HowToUse } from "../HowToUse/HowToUse";
import { LoginForm } from "../LoginForm/LoginForm";
import { LoginModal } from "../LoginForm/LoginModal";

export const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showHowToUse, setShowHowToUse] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

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
              <img src={Logo} alt="NavLogo" />
            </NavLink>
            <NavLink to="/lift" className="menu-item">Find et lift</NavLink>
            <NavLink to="/minside" className="menu-item">Min side</NavLink>
            <div className="menu-item">
              <LoginForm />
            </div>
          </Menu>
        </BurgerWrapper>
      ) : (
        <Navigation>
          <ul>
            <NavLink to="/">
              <img src={Logo} alt="NavLogo" />
            </NavLink>
            <li><NavLink to="/lift">Find et lift</NavLink></li>
            <li>
              <NavLink>
                <Button onClick={() => setShowHowToUse(true)}>Sådan virker det</Button>
              </NavLink>
            </li>
            <li><NavLink to="/minside">Min side</NavLink></li>
          </ul>
          <ul>
            <li>
              <NavLink>
                <Button onClick={() => setShowLogin(true)}>Login</Button>
              </NavLink>
            </li>
          </ul>
        </Navigation>
      )}

      {!isMobile && (
        <HowToUse
          isVisible={showHowToUse}
          onClose={() => setShowHowToUse(false)}
          isMobile={isMobile}
        />
      )}

      <LoginModal 
        isVisible={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </>
  );
};
