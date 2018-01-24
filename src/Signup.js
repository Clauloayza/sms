import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'redux-zero/react';
import { signUp } from './actions'
import './Signup.css';

const SecondView = ({ successLogin }) => {
    return (
        <div className="view-containerRegister ">
            {
                successLogin && <Redirect to="/smsv2" />
            }
            <main>
                <header className="barEstado bg-">
                    <img className="logo" src="img/logo.png" />
                </header>
                    <form id="sign_up_form" onSubmit={
                        e => {
                            e.preventDefault();
                            signUp(this.fullNameRef.value, this.lastnameRef.value, this.emailRef.value, this.passwordRef.value)
                        }
                    }>

                        <div class="container">
                            <div class="col-xs-12 col-md-8 col-md-offset-2">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <br/>
                                        <div className='form-group'>
                                            <label className="date">conéctate</label>
                                            <div className='row'>
                                                <div class='col-md-6 col-xs-12'>
                                                    <div className='form-group'>
                                                        <div>
                                                            <i class="fa fa-user text" aria-hidden="true"></i>
                                                            <label>Nombre </label>
                                                        </div>
                                                        <input className='form-control' id="user_first_name" type="text" placeholder="First name" ref={e => this.fullNameRef = e} required="" />
                                                    </div>
                                                </div>
                                                <div class='col-md-6 col-xs-12'>
                                                    <div className='form-group'>
                                                        <div>
                                                            <i class="fa fa-user text" aria-hidden="true"></i>
                                                            <label>elige tu conexión</label>
                                                        </div>
                                                        <input className='form-control' id="user_last_name" type="text" placeholder="Last name" ref={e => this.lastnameRef = e}  required=""  />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className='form-group'>
                                            <label className="date">Como quieres iniciar sesion?</label>
                                            <div className='row'>
                                                <div class='col-md-6 col-xs-12'>
                                                    <div className='form-group'>
                                                        <div>
                                                            <i class="fa fa-user text" aria-hidden="true"></i>
                                                            <label>Nombre de Cuenta (Correo Electronico) </label>
                                                        </div>
                                                        <input className='form-control' id="user_email" type="email" placeholder="Email" ref={e => this.emailRef = e} required="" />
                                                    </div>
                                                </div>
                                                <div class='col-md-6 col-xs-12'>
                                                    <div className='form-group'>
                                                        <div>
                                                            <i class="fa fa-user text" aria-hidden="true"></i>
                                                            <label>Crea una contraseña </label>
                                                        </div>
                                                        <input className='form-control' id="user_password" type="password" placeholder="Password" ref={e => this.passwordRef = e} required="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xs-12 col-md-6 col-md-offset-6'>
                                            <button className = " form-control " type = ' submit '  to={"/sms"}>Sign up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="mensajes container text-center">
                        <img className="images" alt="image" src="img/images.svg" />
                    </div>
            </main>
        </div>
    )
}

const Register= ({ successLogin }) => {
    return (
        <div id='main_container'>
            <div>
                <SecondView successLogin={successLogin }/>
            </div>
        </div>
        
        )
}

const mapToProps = ({ successLogin }) => ({ successLogin })
export default connect(mapToProps)(Register);