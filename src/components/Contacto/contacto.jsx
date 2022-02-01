import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';
import './contacto.css'
import axios from 'axios';

const Contacto = () => {

    const[contactoEnviado, setContactoEnviado] = useState(false);

	return (
		<>
            <Navbar />
            <section className="cards">
            <div className="container-fluid">
                <div className="row title-cards">
                    <div className="primerafranja-experiencias">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                <h2 className="color-celeste">Sumá tu experiencia</h2>
                                </div>
                                <div className="col-12">
                                <h3 className="color-blanco">Hacé que los viajeros elijan tus productos o servicios cuando lleguen a Salta.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
            <div className='contenedor'>
            <Formik
                initialValues={{
                        empresa:'',
                        correo:'',
                        rubro:'',
                        mensaje:''
                }}  

                validate={(valores) => {
                    
                    let errores = {};

                //Validación Empresa
                if(!valores.empresa) {
                    errores.empresa = 'Por favor ingresa el nombre de tu empresa'
                }

                //Validación Correo
                if(!valores.correo) {
                    errores.correo = 'Por favor ingresa su correo de contacto'
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                    errores.correo = "El correo solo puede contener letras, números, puntos, guiones y guion bajo."
                }

                 //Validación Rubro
                 if(!valores.rubro) {
                    errores.rubro = 'Por favor ingresa el rubro de tu empresa'
                }

                 //Validación Mensaje
                 if(!valores.mensaje) {
                    errores.mensaje = 'Este campo es obligatorio.'
                }

                return errores;

                }}

                onSubmit={(valores, {resetForm}, setSubmitting, setStatus) =>{
                    axios.post('http://localhost:8080/contacto', {
                        empresa: valores.empresa,
                        correo: valores.correo,
                        rubro: valores.rubro,
                        mensaje:valores.mensaje
                })
                .then(res => {
                    if (res.status === 200) {
                          setStatus({
                          sent: true,
                          respuesta: "Contacto Enviado"
                        })
                    }
                })
                .catch(err => {
                    setStatus({
                        sent:false,
                        respuesta:"Error al mandar mensaje"
                    })
                })
                    resetForm();
                    console.log(valores);
                    console.log('Formulario enviado');
                    setContactoEnviado(true);
                    setTimeout(() => setContactoEnviado(false), 5000);
                }}
            >
                {({values, errors}) => (
			<Form className="formulario">
                {console.log(errors)}
				<div>
					<label htmlFor="empresa">Nombre de la Empresa o Institución</label>
					<Field
						type="text"
						name="empresa"
						placeholder="Empresa o Institución"
						id="empresa"
                        
					/>
                    <ErrorMessage name="empresa" component={() => (<div className="error">{errors.empresa}</div>)} />

                    {/* {touched.empresa && errors.empresa && <div className="error">{errors.empresa}</div>} */}
				</div>

				<div>
					<label htmlFor="correo">Correo</label>
					<Field
						type="correo"
						name="correo"
						placeholder="Correo de contacto"
						id="correo"
                        
					/>
                    <ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
                    {/* {touched.correo && errors.correo && <div className='error'>{errors.correo}</div>} */}
				</div>

                <div>
					<label htmlFor="rubro">Rubro</label>
					<Field
						type="text"
						name="rubro"
						placeholder="Rubro"
						id="rubro"                        
					/>
                    <ErrorMessage name="rubro" component={() => (<div className="error">{errors.rubro}</div>)} />
                    {/* {touched.rubro && <div className='error'>{errors.rubro}</div>} */}
				</div>

                <div>
					<label htmlFor="mensaje">Mensaje</label>
					<Field
						name="mensaje"
                        as="textarea"
						placeholder="Mensaje"
						id="mensaje"
					/>
                    <ErrorMessage name="mensaje" component={() => (<div className="error">{errors.mensaje}</div>)} />
                    {/*{touched.mensaje && errors.mensaje && <div className='error'>{errors.mensaje}</div>} */}
				</div>

				<button type="submit">Enviar</button>
                { contactoEnviado && <p className="exito"> Gracias por interesarte en formar parte de nuestra plataforma. A la brevedad nos pondremos en contacto</p>}

			</Form>
            )}
            </Formik>
        </div>
        </div>
        </div>
        </section>
        <Footer />
		</>
	);
}
 
export default Contacto;