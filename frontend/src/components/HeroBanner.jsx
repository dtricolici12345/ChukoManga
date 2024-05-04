import { Link } from "react-router-dom";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <section className="home-banner-section">
      <div className="home-banner-content">
        <h1>
          Des tomes
          <br /> que tu ne lis <br />
          plus ?
        </h1>
        <Link to="/new-advert">
          <button className="vendre-button" type="button">
            Vends tes mangas
          </button>
        </Link>
        <p>Découvrir comment ça marche</p>
      </div>
    </section>
  );
}

export default HeroBanner;
