import React from 'react';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';

const Nosotros = () => {
  return (
        <div>
            <Navbar />
            <section className="nosotros">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="imageNosotros col-12 col-md-6 justify-content-center">
                        <img src="./imagenes/Logo Huellas Comunicación Reducido.png" alt="Logo Huellas Comunicación" />
                    </div>
                        <div className="infoNosotros col-12 col-md-6 text-md-start text-center">
                        <h2 className="color-celeste">Nosotros</h2>
                        <p className="color-azul">
                        Somos una organización familiar inspirada en el amor por la cultura de nuestra tierra y por las innovaciones tecnologías y comunicacionales que permiten mostrar nuestra riqueza cultural y patrimonial a todo el mundo. Estamos convencidos de que hay mucho más por hacer y es por eso que cada día buscamos nuevos desafíos. <br />
                        Fundamos Huellas Comunicación y Experiencia Museos de Salta en el año 2017 y hemos decidido expandir la propuesta, es por eso que creamos Experiencia Salta. 
                        <br />
                        Experiencia Salta es una plataforma para los amantes de la cultura y los viajes. Te permite VIAJAR ANTES DE VIAJAR, y conocer toda la provincia de Salta y sus alrededores, para que cuando estés aqu, tu viaje realmente valga la pena. Día a día sumamos experiencias para todos los usuarios. <br />
                        Si tenés una experiencia por mostrar y ofrecer, vos también podés estar en nuestra plataforma.
                        </p>
                        </div>
          
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default Nosotros;
