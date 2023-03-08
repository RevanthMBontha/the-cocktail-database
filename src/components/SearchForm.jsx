import React, { useEffect } from 'react';
import { useGlobalContext } from '../Context';

const SearchForm = () => {
  const {
    cocktails,
    searchTerm,
    setSearchTerm,
    setFilteredCocktails,
    searchedCocktails,
    setSearchedCocktails,
  } = useGlobalContext();

  const handleSearchInputChange = (evt) => {
    const st = evt.target.value;
    setSearchTerm(st.toLowerCase());
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  useEffect(() => {
    if (searchTerm === '') {
      const thisCocktailList = cocktails;
      setSearchedCocktails(thisCocktailList);
      setFilteredCocktails(thisCocktailList);
    } else {
      const thisCocktailList = cocktails.filter(
        (cocktail) =>
          cocktail.name.substring(0, searchTerm.length) === searchTerm
      );
      setSearchedCocktails(thisCocktailList);
      setFilteredCocktails(thisCocktailList);
    }
  }, [searchTerm]);

  return (
    <div className="container-md mb-4 search">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
