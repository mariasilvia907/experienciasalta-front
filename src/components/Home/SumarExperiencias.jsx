import React from 'react';

const SumarExperiencias = () => {
  return (

    <div>

            <section className="info2 pb-2 pt-5 px-4">
                    <div className="container">
                        <div className="row r-info py-4 px-4 align-items-center justify-content-center">
                        <div className="col-12 col-md-6 info-i">
                            <div className="sumar-experiencia text-md-start text-center">
                            <h2 className="color-mandarina">Sumá tu Experiencia</h2>
                            <p className="color-azul">
                                Hacé que los viajeros elijan tus productos o servicios cuando lleguen a Salta. 
                            </p>
                            <a className="btn btn-primary bg-naranja color-azul" href="/contacto" target="_blank">Quiero sumar mi Experiencia</a>
                            {/* <p className="color-azul  mt-5">
                                Hacé que tus reseñas guíen a otros viajeros y obtené beneficios. 
                            </p>
                            <a className="btn btn-primary bg-naranja color-azul" href="www.museosdesalta.com" target="_blank">Soy Viajero</a> */}
                            </div>
                        </div>
                         <div className="image2-i col-12 col-md-6 justify-content-center mt-5">
                            <img src="./imagenes/ESLogoRedondo.png" alt="mapa de argentina" />
                        </div>
                        </div>
                    </div>
            </section>

    </div>
  )
};

export default SumarExperiencias;
