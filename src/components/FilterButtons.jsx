import React from 'react';
import { useGlobalContext } from '../Context';

const FilterButtons = () => {
  const { cocktails, searchedCocktails, setFilteredCocktails, searchTerm } =
    useGlobalContext();
  const filterCategories = [
    'all of the drinks',
    ...Array.from(new Set(cocktails.map((cocktail) => cocktail.category))),
  ];

  const handleCategoriesFilter = (thisCategory) => {
    if (thisCategory === 'all of the drinks') {
      setFilteredCocktails(searchedCocktails);
    } else {
      setFilteredCocktails(
        searchedCocktails.filter(
          (cocktail) => cocktail.category === thisCategory
        )
      );
    }
  };

  return (
    <div className="container-md mb-4">
      <div className="row">
        {filterCategories.map((filterCategory, index) => {
          return (
            <div key={index} className="col-md-12 col-lg-3 mb-2 text-center">
              <button
                className="btn btn-dark w-100 capitalize-text"
                onClick={() => {
                  handleCategoriesFilter(filterCategory);
                }}
              >
                {filterCategory}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterButtons;
