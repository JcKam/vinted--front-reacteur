import Button from "./Button";
import Searchbar from "./Searchbar";
const Header = () => {
  return (
    <header className="header debug d-flex" role="banner">
      <div className="container d-flex align-item-center">
        <h1>Vinted</h1>
        <Searchbar id="Searchbar" type="search" />
        <Button label="S'inscrire" />
        <Button label="Se connecter" />
        <Button label="Vends tes articles" className="debug" />
      </div>
    </header>
  );
};
export default Header;
