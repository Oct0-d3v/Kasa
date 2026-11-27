import React, { useState } from 'react';

const Carrousel = ({ images }) => {
  const [imageActuelle, setImageActuelle] = useState(0);

  const imageSuivante = () => {
    setImageActuelle((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const imagePrecedente = () => {
    setImageActuelle((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  if (!images || images.length === 0) {
    return <p>Aucune image à afficher.</p>;
  }

  return (
    <div className="carrousel">
      <button onClick={imagePrecedente} className="bouton-precedent">
        &#10094;
      </button>
      <img src={images[imageActuelle]} alt="Carrousel de photo du logement" className="carrousel-image" />
      <button onClick={imageSuivante} className="bouton-suivant">
        &#10095;
      </button>
      <div className="indicateur">
        {imageActuelle + 1} / {images.length}
      </div>
    </div>
  );
};

export default Carrousel;