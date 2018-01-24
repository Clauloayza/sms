import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'redux-zero/react';
import { signIn} from './actions';
import './Login.css';

const InitPage = ({ successLogin }) => {
    return (
        <div className='view-containerLogin sessions new'>
            {
                successLogin && <Redirect to="/smsv2" />
            }
            <main>
                <img className="logo"alt="logoebiz" src="img/logo.png" />
                <h1 className="container sms">SMS Premium v2</h1>
                <Grid className="header" src="img/mensaje.jpg">
                    <h1 className="name">SMS</h1>
                    <h2 className="title">premium v2</h2>
                    <div className='scroll'>
                        <span className='pulse-button'><i className="fa fa-angle-double-down fa-2x" aria-hidden="true"></i></span>
                    </div>
                </Grid>
                <div className="mensajes container">
                    <img className="mensaje" alt="logoebiz" src="img/mensaje.jpg" />
                </div>
                <form id='sign_in_form' onSubmit={
                    e => {
                        e.preventDefault();
                        signIn(this.emailInputRef.value, this.passwordInputRef.value)
                    }
                }>
                    
                <div className="container">
                    <div className="col-xs-12 col-md-8 ">
                        <span className="fa fa-info-circle" aria-hidden="true"></span>
                        <h2> ¿Qué es?</h2>
                        <p>Es una aplicación web on-line para el envio de mensajes SMS y gestión de una cuenta Mobile.</p>
                        <p>En la aplicación WebSMS se pueden gestionar todos los servicios como la recrga de créditos, estadisticas o resultados de enmvío, preferencis, agenda de contactos, facturación, etc.</p>
                    </div>
                    <div className="col-xs-12 col-md-4 ">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <br/><div className='form-group'>
                                    <div>
                                        <i className="fa fa-user text" aria-hidden="true"></i>
                                        <label>Usuario </label>
                                    </div>
                                    <input className="form-control" type="email" id='user_email' placeholder="Email" ref={e => this.emailInputRef = e} required />
                                </div>
                                <div className='form-group'>
                                <div>
                                        <i className="fa fa-user text" aria-hidden="true"></i>
                                        <label>Contraseña </label>
                                    </div>
                                    <input className="form-control" type="password" id='user_password' placeholder="Password" ref={e => this.passwordInputRef = e} required />
                                </div><br/> 
                                < button className = " form-control " type = ' submit ' to={"/sms"}> Ingresar </ button>
                                <div className='second_view text-right '><br/>
                                    <NavLink className=" a-none-decoration" to={"/Signup"}>Si eres nuevo ¡crea una cuenta!  </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                </form>
            </main>
        </div>
    )
}

const Signin = ({ successLogin }) => {
    return (
        <div id='main_container'>
            <InitPage successLogin={successLogin} />
        </div>)
}

const mapToProps = ({ successLogin }) => ({ successLogin });
export default connect(mapToProps)(Signin);