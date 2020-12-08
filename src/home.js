import React, { Component } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class Home extends Component {
    render () {
        return(
            <div className="container homePage">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-5">
                        <h1>Dream Haus</h1>
                        <p className="homeText">We strongly believe that machine learning is one of the core pillars, which empowers realtors to find their clients’ dream home. Realtors utilizes Dream Haus’  computer vision algorithms to determine the underlying taste of their client.</p>
                        <p className="homeText2">
                            <a className="findHomeLink" href="/">Find Your Home</a>
                            <span>See how it works</span>
                            <a className="arrowLink" href="/"><FontAwesomeIcon icon={faArrowRight}/></a>
                        </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-7"></div>
                </div>
            </div>
        )
    }
}