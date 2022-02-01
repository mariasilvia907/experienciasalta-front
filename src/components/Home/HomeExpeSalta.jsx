import React from 'react';
import './Home.css'
import Navbar from './Navbar';
import PrimeraFranja from './PrimeraFranja';
import SegundaFranja from './SegundaFranja';
import Footer from './Footer';
import ExperienciasEnHome from './ExperienciasEnHome';
import SumarExperiencias from './SumarExperiencias';

const HomeExpeSalta = () => {
  return (
      <div>
          <Navbar />
          <PrimeraFranja />
          <SegundaFranja />
          <ExperienciasEnHome />
          <SumarExperiencias />
          <Footer />
          
          
      </div>
        ) 

};

export default HomeExpeSalta;
