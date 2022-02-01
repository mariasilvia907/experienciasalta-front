import React from 'react';
import Navbar from '../Home/Navbar';

const Experiencias = () => {
  return(
    <div>
            <Navbar />
            <section className="cards">
            <div className="container-fluid">
                <div className="row title-cards">
                    <div className="primerafranja-experiencias">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                <h2 className="color-celeste">Viajá antes de viajar</h2>
                                </div>
                                <div className="col-12">
                                <h3 className="color-blanco">Viví una experiencia 360°</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row py-3 d-flex justify-content-center">      
                    <div class="card text-center m-4 rounded-3 col-12 col-sm-6 col-md-3 text-center">
                        <img src="../imagenes/postaDeYatasto03.jpg" className="card-img-top rounded-3" alt="Posta de Yatasto"/>
                        <div class="card-body">
                        <h4 class="card-title">Posta de Yatasto</h4>
                        <p class="card-text">El Museo de la Posta de Yatasto queda ubicado en Metán, a las afueras de Salta Capital. Una experiencia increible que combina historia y naturaleza.</p>
                        <a href="https://museosdesalta.com/yatasto/" class="btn btn-primary bg-naranja color-azul ">Visitar</a>
                        </div>
                    </div>

                    <div class="card text-center m-4 rounded-3 col-12 col-sm-6 col-md-3 text-center">
                        <img src="./imagenes/MuseoQuinquela.jpg" class="card-img-top rounded-3" alt="Museo Quinquela Martín" />
                        <div className="card-body">
                        <h4 className="card-title">Museo Quinquela Martín</h4>
                        <p className="card-text">El Museo Quinquela Martín se encuentra en Rosario de la Frontera, a un poco menos de 200km de la ciudad de Salta Capital. Conserva dos cuadros originales del autor y magníficas esculturas.</p>
                        <a href="https://museosdesalta.com/quinquela/" className="btn btn-primary bg-naranja color-azul ">Visitar</a>
                        </div>
                    </div>

                    <div class="card text-center m-4 rounded-3 col-12 col-sm-6 col-md-3 text-center">
                        <img src="./imagenes/MuseoMAAM.jpg" class="card-img-top rounded-3" alt="Museo MAAM" />
                        <div className="card-body">
                        <h4 className="card-title">Museo MAAM</h4>
                        <p className="card-text">El Museo Arqueológico de Alta Montaña resguarda el hallazgo arqueológico conocido como 'Los Niños del Llullaillaco', está ubicado al frente de la plaza principal de la ciudad y es uno de los museos más vsitados.</p>
                        <a href="https://museosdesalta.com/maam/" className="btn btn-primary bg-naranja color-azul ">Visitar</a>
                        </div>
                    </div>

                    <div class="card text-center m-4 rounded-3 col-12 col-sm-6 col-md-3 text-center">
                    <img src="./imagenes/MuseoFincaLaCruz.jpg" class="card-img-top rounded-3" alt="Museo Finca la Cruz" />
                        <div className="card-body">
                        <h4 className="card-title">Museo Finca la Cruz</h4>
                        <p className="card-text">La Casona de Finca La Cruz es Monumento Histórico Nacional y forma parte del conocido Circuito Güemesiano. Fue utilizada por Güemes como cuartel durante la querra de la Independencia.</p>
                        <a href="https://museosdesalta.com/finca_de_la_cruz/" className="btn btn-primary bg-naranja color-azul ">Visitar</a>
                        </div>
                    </div>

                    <div class="card text-center m-4 rounded-3 col-12 col-sm-6 col-md-3 text-center">
                    <img src="./imagenes/MuseoCachi.jpg" class="card-img-top rounded-3" alt="Museo Pío Pablo Díaz" />
                        <div className="card-body">
                        <h4 className="card-title">Museo Pío Pablo Díaz</h4>
                        <p className="card-text">Está ubicado en Cachi, uno de los mágicos y hermosos pueblos de la Provincia de Salta. En el museo podemos vivenciar la historia prehispánica del Valle Calchaquí</p>
                        <a href="https://museosdesalta.com/cachi/" className="btn btn-primary bg-naranja color-azul ">Visitar</a>
                        </div>
                    </div>

                    <div class="card text-center m-4 rounded-3 col-12 col-sm-6 col-md-3 text-center">
                        <img src="../imagenes/postaDeYatasto03.jpg" className="card-img-top rounded-3" alt="Posta de Yatasto"/>
                        <div class="card-body">
                        <h4 class="card-title">Posta de Yatasto</h4>
                        <p class="card-text">El Museo de la Posta de Yatasto queda ubicado en Metán, a las afueras de Salta Capital. Una experiencia increible que combina historia y naturaleza.</p>
                        <a href="https://museosdesalta.com/yatasto/" class="btn btn-primary bg-naranja color-azul ">Visitar</a>
                        </div>
                    </div>

                    </div>
                
                
                </div>
            </div>
            </section>
    </div>
    )
};

export default Experiencias;
