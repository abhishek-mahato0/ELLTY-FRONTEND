import { useState } from "react";
import { Pages } from "../../molecules";
import "./style.scss";
import { Button } from "../../atoms";

const pageList = [
  {
    id: "1",
    title: "All pages",
    checked: false,
    hasBorder: true,
  },
  {
    id: "2",
    title: "Page 1",
    checked: false,
    hasBorder: false,
  },
  {
    id: "3",
    title: "Page 2",
    checked: false,
    hasBorder: false,
  },
  {
    id: "4",
    title: "Page 3",
    checked: false,
    hasBorder: false,
  },
  {
    id: "5",
    title: "Page 4",
    checked: false,
    hasBorder: true,
  },
];

function Card() {
  const [checked, setChecked] = useState<string[]>([]);

  const handleChecked = (id: string) => {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  return (
    <div className="card">
      {pageList.map((page) => (
        <div className="card--container" key={page.id}>
          <Pages
            id={page.id}
            checked={checked?.includes(page.id) || false}
            label={page.title}
            onClick={handleChecked}
          />
          {page.hasBorder && <div className="card--container--border" />}
        </div>
      ))}
      <div className="card--button-container">
        <Button label="Done" />
      </div>
    </div>
  );
}

export default Card;
