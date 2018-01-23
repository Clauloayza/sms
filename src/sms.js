import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'redux-zero/react';
import { signUp } from './actions'
import './sms.css';

const SecondView = ({ successLogin }) => {
    return (
        <div className="view-containerRegister ">
            {
                successLogin && <Redirect to="/boards" />
            }
            <main>
                <header className="barEstado bg-">
                    <img className="logo"alt="logoebiz" src="img/logo.png" />
                </header>
                    <form id="sign_up_form" onSubmit={
                        e => {
                            e.preventDefault();
                            signUp(this.fullNameRef.value, this.lastnameRef.value,this.fechaNacimientoRef.value,this.generoRef.value, this.emailRef.value, this.passwordRef.value)
                        }
                    }>

                        <div className="container">
                        <div className="mensajes container text-center">
                            <img className="images" alt="image" src="img/images.svg" />
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <br/><div className='form-group'>
                                        <div>
                                            <i className="fa fa-user text" aria-hidden="true"></i>
                                            <label>Number</label>
                                        </div>
                                        <input className="form-control" type="number" size="9" maxlength="9" id='number' placeholder="99 9999999" ref={e => this.emailInputRef = e} required /><i type='submit' className="fa fa-plus-square" aria-hidden="true"></i>
                                    </div>
                                    <br/> 
                                    
                                </div>
                            </div>
                        </div>
                            <div className="col-xs-12 col-md-6">
                            <label>SMS</label>
                                <textarea type="text" className="textarea" placeholder="Escribir mensaje"/>
                            </div>

                        </div>
                </form>
                <div className="text-center container">
                     <div className="text-center">
                        <NavLink className="form-control enviar text-center" type='submit' to={"/sms"}>Enviar</NavLink>
                     </div>
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