import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import Loader from './components/loader';
import Header from './components/header';
import Home from './pages/home';
// import Contact from './pages/contact';
// import Services from './pages/services';
import Footer from './components/footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fake loading time (e.g., fetching API or preparing page)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <Loader />;
      </>
    )

    
  }

  return (
    <>
      {/* setting the router here to load components */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
