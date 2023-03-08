import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url =
  'https://api-for-basic-projects.netlify.app/cocktail-database/cocktails_data.json';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [searchedCocktails, setSearchedCocktails] = useState(cocktails);
  const [filteredCocktails, setFilteredCocktails] = useState(searchedCocktails);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        searchTerm,
        setSearchTerm,
        cocktails,
        setCocktails,
        searchedCocktails,
        setSearchedCocktails,
        filteredCocktails,
        setFilteredCocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
