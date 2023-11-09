import "./button.css";

const Button = ({ style, type, label, size, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={style + " " + size + " button"}
    >
      {label}
    </button>
  );
};

export default Button;
