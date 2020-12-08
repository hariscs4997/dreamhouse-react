import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import React, { Component } from 'react';
import './auth.css';
export default class UserLogin extends Component {
    render () {
        return(
            <div className="container loginPage">
                <div className="authbox">
                    <div className="authBoxTop">
                        <h1>Log in with</h1>
                        <div className="socialMediaBox">
                            <a href="/" className="socialLinks google"> <FontAwesomeIcon icon={faGoogle}/> </a>
                        </div>
                    </div>
                    <div className="separator">Or</div>
                    <div className="authForm">
                        <form>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input type="email" className="form-control" placeholder="Email Your Realtor Provided"/>
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
                </div>
            </div>
        )
    }
}