import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import ConnexionModal from "./ConnexionModal";
import "./HeaderNav.css";
import SearchBar from "./SearchBar";
import HeaderNavMobile from "./HeaderNavMobile";

function HeaderNav() {
  const navigate = useNavigate();
  const { auth, setAuth, isModalOpen, setIsModalOpen } =
    useContext(UserContext);
  const handleClickOpen = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  const handleLogout = () => {
    navigate("/");
    setAuth(null);
    localStorage.removeItem("auth");
  };

  return (
    <>
      <header className="navbar-header-desktop container_limit">
        <container className="header-left-container">
          <Link to="/explore">
            <button type="button" className="explore-btn">
              Explorer
            </button>
          </Link>
          <SearchBar />
        </container>

        <div className="buttonHeader-container">
          {!auth?.token ? (
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
              onClick={handleLogout}
            >
              Se déconnecter
            </button>
          )}
          {isModalOpen && <ConnexionModal handleClickOpen={handleClickOpen} />}
          <Link to="/new-advert">
            <button className="vendre-button" type="button">
              Vends tes Mangas
            </button>
          </Link>
        </div>
      </header>

      <HeaderNavMobile />
    </>
  );
}

export default HeaderNav;
