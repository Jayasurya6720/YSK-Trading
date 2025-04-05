import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import ScrollToTop from "./ScrollToTop";
import Products from "./components/Products";
import AboutUsPage from "./components/AboutUsPage ";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./Footer";
import logo from "./Assert/logo.png";
import AllProducts from "./components/AllProduct";
import HandTools from "./components/HandTools";
import PowerTools from "./components/PowerTools";
import WeldingMachine from "./components/WeldingMachine";
import Tools from "./components/Tools";
import Welding from './components/Welding';
import Safety from "./components/Safety";
import IndustrialSpecialProduct from "./components/Industrial-Special-Product";
import MeasuringTools from "./components/Measuring Tools";
import MechineTools from "./components/Machine Tools";
import WeldingAccessories from "./components/Welding Accessories";
import Pneumatic from "./components/Pneumatic";
import Abrasive from "./components/Abrasive";
import WeldingElectrode from "./components/Welding Electrode";
import TermsConditions from "./components/Terms & Conditions";
import RefundPolicy from "./components/Refund Policy";


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
      

  return (
    <Router>
        <ScrollToTop /> 
      <div className="container">
        {/* Navbar Section */}
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          {/* Hamburger Menu Button */}
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          {/* Navigation Links - Show normally on desktop, dropdown on mobile */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/products" onClick={() => setMenuOpen(false)}>Categories</Link></li>
            <li className="enquiry-btn2"><Link to="/enquiry" onClick={() => setMenuOpen(false)}>Contact</Link></li>
           
          </ul>

          <Link to="/enquiry">
            <button className="enquiry-btn">For Enquiries</button>
          </Link>
        </nav>

        {/* Routes Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/enquiry" element={<EnquiryForm title="Contact Us" />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/handtools" element={<HandTools />} />
          <Route path="/Tools" element={<Tools />} />
          <Route path="/Welding" element={<Welding />} />
          <Route path="/Safety" element={<Safety />} />



          <Route path="/power-tools" element={<PowerTools />} />
          <Route path="/welding-machine" element={<WeldingMachine />} />
          <Route path="/industrial-products" element={<IndustrialSpecialProduct/>}/>
          <Route path="/measuring-tools" element={<MeasuringTools/>}/>
          <Route path="/machine-tools" element={<MechineTools/>}/>
          <Route path="/welding-accessories" element={<WeldingAccessories/>}/>
          <Route path="/pneumatic" element={<Pneumatic />}/>
          <Route path="/abrasive" element={<Abrasive/>}/>
          <Route path="/welding-electrode" element={<WeldingElectrode/>}/>
          <Route path="/termsconditions" element={<TermsConditions/>}/>
          <Route path="/refund-policy" element={<RefundPolicy/>}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;