import "./checkbox.css";

const Checkbox = ({ state, setState, name, label, checked, id, value }) => {
  return (
    <div className="checkbox">
      <label className="checkbox_label" tabindex="0">
        <input
          id={id}
          name={name}
          type="checkbox"
          className="checkbox_input"
          tabindex="-1"
        ></input>
        <span className="checkbox_label">{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;
