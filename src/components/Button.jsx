import "./button.css";

const Button = ({ style, type, label, size, disabled }) => {
  return (
    <button
      type={type}
      style={style}
      size={size}
      disabled={disabled}
      className="button button-primary"
    >
      {label}
    </button>
  );
};
export default Button;
