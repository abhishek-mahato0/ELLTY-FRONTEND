import React from "react";
import "./style.scss";

type ButtonSize = "sm";
type ButtonVariant = "primary";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = "",
  style = {},
  size = "sm",
  variant = "primary",
  icon,
  loading = false,
}) => {
  const buttonSize = {
    sm: "btn--small",
  };
  const buttonVariant = {
    primary: "btn--primary",
  };
  const buttonClasses = `btn ${buttonSize[size]} ${buttonVariant[variant]} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      style={style}
    >
      {loading ? <span className="btn__loader" /> : icon}
      {label}
    </button>
  );
};

export default Button;
