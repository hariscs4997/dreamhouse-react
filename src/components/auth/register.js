import React, { Component } from 'react';
import { faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import './auth.css'
export default class Register extends Component {
    render () {
        return(
            <div className="container signupPage">
                <div className="authbox">
                    <div className="authBoxTop">
                        <h1>Sing up with</h1>
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
                                <div className="passwordProgressBar">
                                    <div className="progressBar">
                                        <span className="success"></span>
                                    </div>
                                    <p>Not bad but you know you can do it better</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="agree"/> <label htmlFor="agree" className="agree">I agree to <Link to="/">terms & conditions</Link> </label> 
                            </div>
                            <div className="form-group">
                                <button className="btn btn-block btnAuthSubmit">Sign up</button>
                            </div>
                        </form>
                    </div>
                    <div className="authFooter">
                        <p>Do you already have an account ? <Link to="/login" className="createAccountLink">Log in</Link> </p>
                    </div>
                </div>
            </div>
        )
    }
}