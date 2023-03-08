import React, { useState, useEffect } from 'react';
import CocktailCard from './CocktailCard';
import { useGlobalContext } from '../Context';

const CocktailList = () => {
  const { filteredCocktails } = useGlobalContext();

  useEffect(() => {}, [filteredCocktails]);

  return (
    <div className="container-md">
      <div className="row">
        {filteredCocktails.length > 0 ? (
          filteredCocktails.map((cocktail) => {
            const { id } = cocktail;
            return <CocktailCard key={id} {...cocktail} />;
          })
        ) : (
          <div className="text-center mt-5">
            <h3>No drinks match your search criteria</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CocktailList;
