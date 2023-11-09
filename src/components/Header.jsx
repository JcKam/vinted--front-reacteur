import { useNavigate } from "react-router-dom";

// COMPONENTS
import Button from "./Button";
import Searchbar from "./Searchbar";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header debug d-flex" role="banner">
      <div className="container d-flex align-item-center">
        <h1>Vinted</h1>
        <form
          role="search"
          className="d-flex justify-content-between flex-grow-1 "
        >
          <Searchbar id="Searchbar" type="search" />
        </form>
        <Button
          label="S'inscrire"
          style="button-secondary"
          size="button-md"
          onClick={() => navigate("/signup")}
        />
        <Button
          label="Se connecter"
          style="button-secondary"
          size="button-md"
        />
        <Button
          label="Vends tes articles"
          style="button-primary"
          size="button-md"
        />
      </div>
    </header>
  );
};

export default Header;
