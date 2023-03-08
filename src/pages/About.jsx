import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="container-fluid">
      <div className="container-md text-center">
        <h1 className="mt-4 mb-5 title title--lg">About</h1>
        <div className="description-paragraph ms-auto me-auto">
          <p>
            The Cocktail Database is a clear and concise guide on how to make
            your own cocktails. All the cocktails present in the database are
            those that have been recognized by The International Beverages
            Association (IBA). So whenever you feel the itch to down a drink,
            try a new cocktail from the list. Happy Drinking!
          </p>
          <p>
            Each cocktail contains detailed information about the cocktail's
            name, a reference image, it's ingredients, their measures, the
            drink's preparation steps, the type of drinkware that is used for
            each drink, and also contains some tips on making variations of the
            drink and how they are served.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
