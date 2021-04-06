import React, { Component, useState } from 'react';
import { faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import './auth.css'
import ApiUrl from '../../utils/apiUrl';
import axios from 'axios';
const Login = () => {

	const history = useHistory();
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [passwordHidden, setPasswordHidden] = useState(true)

	const loginHandler = (event) => {
		event.preventDefault()
		console.log(username, password)
		axios.post(ApiUrl.host + ApiUrl.login, { username, password })
			.then(res => {
				console.log(res.data)
				history.push('/')
			})
			.catch(err => {
				if (err.response) {
					console.log(err.response.data.error)
				}
			})
	}


	return (
		<div className="container loginPage">
			<div className="authbox">
				<div className="authBoxTop">
					<h1>Log in with</h1>
					<div className="socialMediaBox">
						<a href="/" className="socialLinks google"> <FontAwesomeIcon icon={faGoogle} /> </a>
						<a href="/" className="socialLinks linkedin"> <FontAwesomeIcon icon={faLinkedin} /> </a>
					</div>
				</div>
				<div className="separator">Or</div>
				<div className="authForm">
					<form onSubmit={(e) => loginHandler(e)}>
						<div className="form-group">
							<label>Your Email</label>
							<input value={username} onChange={e => setUsername(e.target.value)} type="email" className="form-control" placeholder="Write Your Email" />
						</div>
						<div className="form-group passwordField">
							<label>Password</label>
							<input value={password} onChange={e => setPassword(e.target.value)} type={passwordHidden ? 'password' : 'text'} className="form-control" placeholder="*******" />
							<a onClick={() => setPasswordHidden(!passwordHidden)} className="eyeLink"><FontAwesomeIcon icon={faEye} /></a>
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

export default Login;