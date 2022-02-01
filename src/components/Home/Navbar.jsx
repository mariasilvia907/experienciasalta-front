import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';

const Navbar = () => {

    return (

        <div>
            <header>
                <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="./imagenes/ESLogoHorizontal.png" alt="logo Experiencia Salta" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact to='/' activeStyle={{fontWeight: "bold", color: "#fa4663"}} className="nav-link active" aria-current="page">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='/experiencias' activeStyle={{fontWeight: "bold", color: "#fa4663"}}className="nav-link">Experiencias</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='/nosotros' activeStyle={{fontWeight: "bold", color: "#fa4663"}} className="nav-link" tabIndex="-1" aria-disabled="true">Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='/contacto' className="btn btn-primary bg-naranja color-azul">Quiero sumar mi Experiencia</NavLink>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </div>
            </header>

        </div>
    )
};

export default Navbar;
