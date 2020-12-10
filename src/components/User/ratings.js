import React, { Component } from 'react';
import SimpleReactLightbox, { SRLWrapper  } from 'simple-react-lightbox';

export default class Ratings extends Component {
    render (){
        return (
            <SimpleReactLightbox>
                <div className="mainDetailBox userSideBox">
                    <SRLWrapper>
                        <ul className="dataList p-0">
                            <li>
                                <div className="row active">
                                    <div className="col-12 col-sm-6 col-md-3 text-center">
                                        <img className="hover" alt="img" src={`${process.env.PUBLIC_URL}/assets/1.png`}  />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-9 text-center">
                                        <p className="dataListP"> 98% Match <br />
                                            1111 Lovers Lane <br />
                                            <button type="button" className="btnstyle btnNext mt-1">Request a Tour</button>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="row">
                                <div className="col-12 col-sm-6 col-md-3 text-center">
                                    <img className="hover" alt="img" src={`${process.env.PUBLIC_URL}/assets/2.png`}  />
                                </div>
                                <div className="col-12 col-sm-6 col-md-9 text-center">
                                    <p className="dataListP"> 95% Match <br />
                                        1111 Lovers Lane <br />
                                        <button type="button" className="btnstyle btnNext mt-1">Request a Tour</button>
                                    </p>
                                </div>
                            </li>
                            <li className="row">
                                <div className="col-12 col-sm-6 col-md-3 text-center">
                                    <img className="hover" alt="img" src={`${process.env.PUBLIC_URL}/assets/3.png`}  />
                                </div>
                                <div className="col-12 col-sm-6 col-md-9 text-center">
                                    <p className="dataListP"> 88% Match <br />
                                        1111 Lovers Lane <br />
                                        <button type="button" className="btnstyle btnNext mt-1">Request a Tour</button>
                                    </p>
                                </div>
                            </li>
                            <li className="row">
                                <div className="col-12 col-sm-6 col-md-3 text-center">
                                    <img className="hover" alt="img" src={`${process.env.PUBLIC_URL}/assets/4.png`}  />
                                </div>
                                <div className="col-12 col-sm-6 col-md-9 text-center">
                                    <p className="dataListP"> 98% Match <br />
                                        1111 Lovers Lane <br />
                                        <button type="button" className="btnstyle btnNext mt-1">Request a Tour</button>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </SRLWrapper>
                </div>
            </SimpleReactLightbox>
        )
    }
} 