import React, { Component } from 'react';
import { faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './auth.css'
export default class Login extends Component {
    render () {
        return(
            <div className="container loginPage">
                <div className="authbox">
                    <div className="authBoxTop">
                        <h1>Log in with</h1>
                        <div className="socialMediaBox">
                            <a href="/" className="socialLinks google"> <FontAwesomeIcon icon={faGoogle}/> </a>
                            <a href="/" className="socialLinks linkedin"> <FontAwesomeIcon icon={faLinkedin}/> </a>
                        </div>
                    </div>
                    <div className="separator">Or</div>
                    <div className="authForm">
                        <form>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input type="email" className="form-control" placeholder="Write Your Email"/>
                            </div>
                            <div className="form-group passwordField">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="*******"/>
                                <a href="javascript:;" className="eyeLink"><FontAwesomeIcon icon={faEye} /></a>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-block btnAuthSubmit">Log in</button>
                            </div>
                        </form>
                    </div>
                    <div className="authFooter">
                        <p>Do you need an account? <Link to="/register" className="createAccountLink">Create new account</Link> </p>
                    </div>
                </div>
            </div>
        )
    }
}