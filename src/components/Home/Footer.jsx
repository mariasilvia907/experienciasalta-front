import React from 'react';

const Footer = () => {
  return (
        <div>
            <footer className="pie bg-azul">
                        <div className="container">
                        <div className="row pie-02 py-2 px-2 align-items-center justify-content-center">
                            <div className="footer-text col-12 col-sm-4 d-flex justify-content-sm-end justify-content-center">
                            <h6 className="color-blanco text-center">Una producción de Huellas Comunicación</h6>
                            </div>
                            <div className="footer-image col-12 col-sm-4 col-md-2 d-flex justify-content-md-start justify-content-center">
                                <img src="./imagenes/Logo Huellas Comunicación Reducido.png" alt="Logo de Huellas Comunicación " />
                            </div>
                        </div>
                        </div>
            </footer>
        </div>
  )
};

export default Footer;
