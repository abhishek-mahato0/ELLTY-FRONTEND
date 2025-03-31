import { FunctionComponent } from "react";
import "./style.scss";
import { Checkbox } from "../../atoms";

interface PagesProps {
  id: string;
  checked: boolean;
  label: string;
  onClick: (id: string) => void;
}

const Pages: FunctionComponent<PagesProps> = ({
  id,
  checked,
  label,
  onClick,
}) => {
  return (
    <div className="container" onClick={() => onClick(id)}>
      <span>{label}</span>
      <Checkbox checked={checked} />
    </div>
  );
};

export default Pages;
