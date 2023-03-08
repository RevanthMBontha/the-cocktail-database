import React from 'react';
import { Link } from 'react-router-dom';

const CocktailCard = ({ id, name, imageURL, type, baseSpirits }) => {
  return (
    <Link
      to={`/cocktail/${id}`}
      className="col-sm-12 col-md-6 col-lg-4 mb-5 testClass"
    >
      <div className="card ms-2 me-2">
        <img src={imageURL} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title cocktail__title mb-0 capitalize-text">
            {name}
          </h5>
          <p
            className={`card-text cocktail__type cocktail__type--${type} mb-1 capitalize-text`}
          >
            {type}
          </p>
          <p className="card-text sm-size ms-1 capitalize-text">
            {baseSpirits[0]}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CocktailCard;
