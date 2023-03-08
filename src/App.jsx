import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktailDetails from './pages/SingleCocktailDetails';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="cocktail/:cocktailId"
            element={<SingleCocktailDetails />}
          />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
