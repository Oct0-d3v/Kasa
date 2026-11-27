import { useState } from "react";
import Arrow from '../../assets/Arrow.png'

function Collapse({ titre, children }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      {titre}
      <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
        <img 
        src={Arrow} 
        alt={isOpen ? "Fermer" : "Ouvrir"} 
        style={{
              transition: "transform 0.25s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
        />
      </button>

      {isOpen && <div style={{
        overflow: "hidden",
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows 0.25s ease",
        }}>
        {children}
      </div>}
    </div>
  );
}

export default Collapse