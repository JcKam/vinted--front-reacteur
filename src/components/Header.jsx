import { useNavigate, Link } from "react-router-dom";
// CSS
import "./header.css";

// COMPONENTS
import Button from "./Button";
import Searchbar from "./Searchbar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      className="header debug d-flex justify-content-between"
      role="banner"
    >
      <div className="container d-flex align-item-center justify-content-between w-100">
        <Link to="/" className="link_home_header">
          <h1>Vinted</h1>
        </Link>

        <form
          role="search"
          className="d-flex justify-content-between flex-grow-1 "
        >
          <Searchbar id="Searchbar" type="search" placeholder="Search" />
        </form>

        <Link to="/signup" className="button button-secondary">
          S'inscrire
        </Link>
        <Link to="/login" className="button button-secondary">
          Se connecter
        </Link>
        <Link to="/publish" className="button button-primary">
          Vends tes articles
        </Link>
      </div>
    </header>
  );
};

export default Header;
