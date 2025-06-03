import React from 'react';
import Nav from './Navbar.jsx'
import Hero from './Hero.jsx';
import Content from './Content.jsx';
import Services from './Services.jsx';
import Reviews from './ClientReviews.jsx';
import Gallary from './Gallary.jsx';
import VillaBookingForm from './Practice.jsx'
import Footer from './Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about.jsx';
import Login from './Login.jsx';
function HomePage() {
  return (
    <>
      <Hero />
      <Content />
      <Reviews />
    </>
  );
}
function App() {

  return (
    <BrowserRouter>
    
     < Nav />
     <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/Content" element={<Content />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />}/>
        <Route path="/ClientReviews" element={<Reviews />} />
        <Route path="/Gallary" element={<Gallary />} />
        <Route path="/Practice" element={<VillaBookingForm />} />
        <Route path="/Login" element={<Login />} />

     </Routes>
     <Footer />
    </BrowserRouter>
  )
}

export default App
