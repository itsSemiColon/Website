import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.tsx';
import Home from './pages/home.tsx';
// import Contact from './pages/contact.tsx';
import Footer from './components/footer.tsx';
// import Services from './pages/services.tsx';

function App() {

  return (
    <>
      {/* setting the router here to load omponenets */}
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>

        <Footer />
    </Router>

    </>
  )
}

export default App
