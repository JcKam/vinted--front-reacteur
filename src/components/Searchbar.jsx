import "./searchbar.css";

const Searchbar = ({ id, type, placeholder, value, disabled }) => {
  return (
    <input
      className="input searchbar"
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
    ></input>
  );
};
export default Searchbar;
