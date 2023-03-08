import React, { useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import FilterButtons from '../components/FilterButtons';
import CocktailList from '../components/CocktailList';
import { useGlobalContext } from '../Context';
import Footer from '../components/Footer';

const url =
  'https://api-for-basic-projects.netlify.app/cocktail-database/cocktails_data.json';

const Home = () => {
  const { isLoading, setIsLoading, setCocktails } = useGlobalContext();

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCocktails(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="container-md loading text-center mt-5 d-flex justify-content-center align-items-center">
        <div className="square-gif">
          <img
            src="./wine-loading-square.gif"
            alt="wine loading"
            className="img-fluid"
          />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container-md text-center">
        <h1 className="title title--lg mt-4 mb-4">Cocktails</h1>
      </div>
      <SearchForm />
      <FilterButtons />
      <CocktailList />
      <Footer />
    </>
  );
};

export default Home;
