import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

import ConnexionModal from "./ConnexionModal";

import "./HeaderNavMobile.css";
import SearchBar from "./SearchBar";
import HeaderNavMobileMenu from "./HeaderNavMobileMenu";
import logo from "../assets/logo.png";

function HeaderNavMobile() {
  const { auth, setAuth } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [menuMobileActive, setmenuMobileActive] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleMobileMenuOpen = () => {
    setmenuMobileActive(!menuMobileActive);
  };
  return (
    <header className="navbar-header-mobile container_limit">
      <container className="mobile-header">
        <section className="mobile-header-section">
          <div className="mobile-logo">
            <Link to="/">
              <div className="sidebar-logo">
                <img src={logo} alt="Logo" />
              </div>
            </Link>
          </div>
          {menuMobileActive ? (
            <button
              type="button"
              className="header-mobile-menu-btn"
              onClick={handleMobileMenuOpen}
            >
              Fermer
            </button>
          ) : (
            <button
              type="button"
              className="header-mobile-menu-btn"
              onClick={handleMobileMenuOpen}
            >
              Menu
            </button>
          )}

          <div className="buttonHeader-container">
            {auth == null ? (
              <button
                className="incription-login-button"
                type="button"
                onClick={handleClickOpen}
              >
                S'inscrire | Se connecter
              </button>
            ) : (
              <button
                className="incription-login-button"
                type="button"
                onClick={() => {
                  setAuth(null);
                }}
              >
                Se déconnecter
              </button>
            )}
            {open && <ConnexionModal handleClickOpen={handleClickOpen} />}
            <Link to="/new-advert">
              <button className="vendre-button" type="button">
                Vends tes Mangas
              </button>
            </Link>
          </div>
        </section>
        <SearchBar />
      </container>
      {menuMobileActive ? (
        <HeaderNavMobileMenu
          handleMenuActive={handleMobileMenuOpen}
          menuMobileActive={menuMobileActive}
        />
      ) : null}
    </header>
  );
}

export default HeaderNavMobile;
