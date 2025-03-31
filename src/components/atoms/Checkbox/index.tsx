import React from "react";
import "./style.scss";
import { Checked } from "../../../assets/icons";

interface CheckboxProps {
  checked?: boolean;
  className?: string;
  isHovered?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  className = "",
  isHovered = false,
}) => {
  return (
    <span
      className={`checkbox ${isHovered ? "checkbox--hovered" : ""} ${
        checked ? "checkbox--checked" : "checkbox--default"
      } ${className}`}
    >
      <Checked />
    </span>
  );
};

export default Checkbox;
