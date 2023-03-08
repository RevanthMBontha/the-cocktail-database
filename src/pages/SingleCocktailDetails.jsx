import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useGlobalContext } from '../Context';
import Error from './Error';

const SingleCocktailDetails = ({ id }) => {
  const { cocktailId } = useParams();
  const { cocktails } = useGlobalContext();

  const thisCocktailArray = cocktails.filter((cocktail) => {
    return cocktail.id === cocktailId;
  });

  if (thisCocktailArray.length === 0) {
    return <Error />;
  }

  const thisCocktail = thisCocktailArray[0];
  const {
    name,
    imageURL,
    category,
    type,
    baseSpirits,
    stdDrinkWare,
    ingredients,
    prepSteps,
    tips,
    extLink,
  } = thisCocktail;

  return (
    <div className="container-fluid">
      <div className="container-md p-s-1 p-e-1">
        <Link to="/" className="btn btn-outline-dark mt-4 mb-4 ms-2">
          {`< Back to all Cocktails`}
        </Link>
        <div className="row mb-5 mx-auto">
          <div className="col-sm-12 col-md-12 col-lg-4 p-0">
            <img src={imageURL} className="card-img-top" alt={name} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8 testClass">
            <h1 className="title title--lg mb-3">{name}</h1>
            <div className="row box box--bg ms-1 me-1">
              <div className="col-sm-4">
                <h4 className=" mt-4 mb-5 capitalize-text thin-font">
                  type:{' '}
                  <span className={`cocktail__type cocktail__type--${type}`}>
                    {type}
                  </span>
                </h4>
                <div className="mb-3">
                  <h4 className="thin-font">Base Spirit(s):</h4>
                  <ul>
                    {baseSpirits.map((spirit, index) => {
                      return (
                        <li className="capitalize-text mb-1" key={index}>
                          {spirit}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-sm-8">
                <h4 className="mt-4 mb-5 capitalize-text thin-font">{`category: ${category}`}</h4>
                <h4 className="mb-3 capitalize-text thin-font">{`drinkware: ${stdDrinkWare}`}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="box box--bg mb-4">
          <h2 className="mb-3">Ingredients:</h2>
          <ul>
            {ingredients.map((ingredient, index) => {
              return (
                <li key={index} className="mb-1">
                  {ingredient}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="box mb-4">
          <h2 className="mb-3">Preparation Steps:</h2>
          <ul>
            {prepSteps.map((step, index) => {
              return (
                <li key={index} className="mb-1">
                  {step}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="box box--bg mb-4">
          <h2 className="mb-3">Tips:</h2>
          <ul>
            {tips.map((tip, index) => {
              return (
                <li key={index} className="mb-1">
                  {tip}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="d-flex justify-content-end mb-5 me-1">
          <Link
            to={extLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark"
          >
            Read More
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleCocktailDetails;
