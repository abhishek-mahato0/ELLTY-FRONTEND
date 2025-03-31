import React from "react";
import "./style.scss";
import { Checked } from "../../../assets/icons";

interface CheckboxProps {
  checked?: boolean;
  onChange?: () => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange = () => {},
  className = "",
}) => {
  return (
    <span
      className={`checkbox ${
        checked ? "checkbox--checked" : "checkbox--default"
      } ${className}`}
      onClick={onChange}
    >
      <Checked />
    </span>
  );
};

export default Checkbox;
