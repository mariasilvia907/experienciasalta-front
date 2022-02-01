/* import React, {useState, useEffect} from 'react';
import Navbar from '../Home/Navbar';
import axios from "axios";
import Footer from '../Home/Footer';
//import { Link } from 'react-router-dom';

export default function Experiencias() {

    const [experiences, setExperiences] = useState([]);
    //const [experiencia, setExperiencia] = useState("");
    
    
    useEffect(() => {
        getExperiencias()
    },);
    
    const getExperiencias = async () => {
        
            const res = await axios.get(
            process.env.DB + "/experiences"
            );
            if(res.data){
                setExperiences(res.data);
            } else{
                console.log('No se encontraron experiencias');
            }             
            
            /* const URL='https://experienciasalta-api.herokuapp.com/experiences'
            
            const respuesta = await fetch(URL);
            
            const data = await respuesta.json();
            
            const experiencias = data.map(experiences => { 
                return{
                    id: experiences._id,
                    name: experiences.name,
                    description: experiences.description,
                    link: experiences.link         
                }
            })
            
            console.log(experiencias);
            setDatos(experiencias);
        }
        
        */
       /* return (
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
                </div>
                <div className="row py-3 d-flex justify-content-center">   
                {experiences.map((experiencia, index) => (     
                    <div class="card text-center m-4 rounded-3 col-12 col-sm-6 col-md-3 text-center" key={experiences._id}>
                        <img src="{experiences.img}" className="card-img-top rounded-3" alt="{experiences.name}"/>
                        <div class="card-body">
                        <h4 class="card-title">{experiences.name}</h4>
                        <p class="card-text">{experiences.description}</p>
                        <a href="{experiences.link}" class="btn btn-primary bg-naranja color-azul ">Visitar</a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
    </section>
    <Footer /> */

            /* <h1>Experiencias</h1>
            /* {
                datos.map(({id, name}) => {
                    return <li key={id}>{name}</li>
                })
            } */
/*     </div>
  )}
} */ 