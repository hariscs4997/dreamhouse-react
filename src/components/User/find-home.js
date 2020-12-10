import React, { Component } from 'react';

export default class Findhome extends Component {
    state = {
        heading : 'What is Your Architectural Style?',
        topMsg : 'Select as many images as you’d like or upload images of homes you like.Hit refresh to see more homes',
        stepActive : 1
    }
    next() {
        if(this.state.stepActive === 1) {
            this.setState({
                stepActive : 2,
                heading : 'What is Your Kitchen Style?',
            })
        }else if(this.state.stepActive === 2) {
            this.setState({
                stepActive : 3,
                heading : 'What is Your Master Bedroom Style?',
            })
        }else if(this.state.stepActive === 3) {
            this.setState({
                stepActive : 4,
                heading : 'What is Your Bathroom Style?',
            })
        }else if(this.state.stepActive === 4) {
            this.setState({
                stepActive : 5,
                heading : 'Your Dream Home is Awaiting...',
                topMsg : 'Any other additional images you’d like to upload prior?'
            })
        }
        
    }

    render (){
        return(
            <div className="findHome">
                <div className="steps">
                    <h1>{this.state.heading}</h1>
                        <div className="stepwizard">
                            <div className="stepwizard-row setup-panel">
                                <div className="stepwizard-step">
                                    <button className={`btn btn-default ${this.state.stepActive === 1 ? "step_active" : ""}`}  type="button">1</button>
                                </div>
                                <div className="stepwizard-step">
                                    <button className={`btn btn-default ${this.state.stepActive === 2 ? "step_active" : ""}`} type="button">2</button>
                                </div>
                                <div className="stepwizard-step">
                                    <button className={`btn btn-default ${this.state.stepActive === 3 ? "step_active" : ""}`} type="button">3</button>
                                </div>
                                <div className="stepwizard-step">
                                    <button className={`btn btn-default ${this.state.stepActive === 4 ? "step_active" : ""}`} type="button">4</button>
                                </div>
                                <div className="stepwizard-step">
                                    <button className={`btn btn-default ${this.state.stepActive === 5 ? "step_active" : ""}`} type="button">5</button>
                                </div>
                            </div>
                        </div>
                    <h3>{this.state.topMsg}</h3>
                </div>
                
                <div className={`step-content mt-4 ${this.state.stepActive === 1 ? "step_active" : ""}`}>
                    <div className="imageBox">
                        <div className="row">
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb1" />
                                <label htmlFor="cb1"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb2" />
                                <label htmlFor="cb2"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb3" />
                                <label htmlFor="cb3"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb4" />
                                <label htmlFor="cb4"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb5" />
                                <label htmlFor="cb5"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb6" />
                                <label htmlFor="cb6"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb7" />
                                <label htmlFor="cb7"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb8" />
                                <label htmlFor="cb8"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb9" />
                                <label htmlFor="cb9"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                        </div>
                        <div className="row htmlForm-group">
                        <div className="col-4">
                            <button type="button" className="btnstyle btnback">REFRESH</button>
                        </div>
                        <div className="col-4 text-center">
                            <button type="button" className="btnstyle btnback">UPLOAD</button>
                        </div>
                        <div className="col-4 text-right">
                            <button type="button" className="btnstyle btnNext" onClick={() => {this.next()}}>NEXT</button>
                        </div>
                    </div>  
                    </div>
                     
                </div>

                <div className={`step-content mt-4 ${this.state.stepActive === 2 ? "step_active" : ""}`}>
                <div className="imageBox">
                        <div className="row">
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb10" />
                                <label htmlFor="cb10"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb11" />
                                <label htmlFor="cb11"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb12" />
                                <label htmlFor="cb12"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb13" />
                                <label htmlFor="cb13"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb14" />
                                <label htmlFor="cb14"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb15" />
                                <label htmlFor="cb15"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb16" />
                                <label htmlFor="cb16"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb17" />
                                <label htmlFor="cb17"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb18" />
                                <label htmlFor="cb18"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                        </div>
                        <div className="row htmlForm-group">
                        <div className="col-4">
                            <button type="button" className="btnstyle btnback">REFRESH</button>
                        </div>
                        <div className="col-4 text-center">
                            <button type="button" className="btnstyle btnback">UPLOAD</button>
                        </div>
                        <div className="col-4 text-right">
                            <button type="button" className="btnstyle btnNext" onClick={() => {this.next()}}>NEXT</button>
                        </div>
                    </div>  
                    </div>
                </div>

                <div className={`step-content mt-4 ${this.state.stepActive === 3 ? "step_active" : ""}`}>
                    <div className="imageBox">
                        <div className="row">
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb19" />
                                <label htmlFor="cb19"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb20" />
                                <label htmlFor="cb20"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb21" />
                                <label htmlFor="cb21"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb22" />
                                <label htmlFor="cb22"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb23" />
                                <label htmlFor="cb23"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb24" />
                                <label htmlFor="cb24"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb25" />
                                <label htmlFor="cb25"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb26" />
                                <label htmlFor="cb26"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb27" />
                                <label htmlFor="cb27"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                        </div>
                        <div className="row htmlForm-group">
                        <div className="col-4">
                            <button type="button" className="btnstyle btnback">REFRESH</button>
                        </div>
                        <div className="col-4 text-center">
                            <button type="button" className="btnstyle btnback">UPLOAD</button>
                        </div>
                        <div className="col-4 text-right">
                            <button type="button" className="btnstyle btnNext" onClick={() => {this.next()}}>NEXT</button>
                        </div>
                    </div>  
                    </div>   
                </div>
                <div className={`step-content mt-4 ${this.state.stepActive === 4 ? "step_active" : ""}`}>
                    <div className="imageBox">
                        <div className="row">
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb28" />
                                <label htmlFor="cb28"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb29" />
                                <label htmlFor="cb29"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb30" />
                                <label htmlFor="cb30"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb31" />
                                <label htmlFor="cb31"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb32" />
                                <label htmlFor="cb32"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb33" />
                                <label htmlFor="cb33"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb34" />
                                <label htmlFor="cb34"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb35" />
                                <label htmlFor="cb35"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb36" />
                                <label htmlFor="cb36"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /></label>
                            </div>
                        </div>
                        <div className="row htmlForm-group">
                        <div className="col-4">
                            <button type="button" className="btnstyle btnback">REFRESH</button>
                        </div>
                        <div className="col-4 text-center">
                            <button type="button" className="btnstyle btnback">UPLOAD</button>
                        </div>
                        <div className="col-4 text-right">
                            <button type="button" className="btnstyle btnNext" onClick={() => {this.next()}}>NEXT</button>
                        </div>
                    </div>  
                    </div>   
                </div>
                <div className={`step-content mt-4 ${this.state.stepActive === 5 ? "step_active" : ""}`}>
                    <div className="imageBox">
                        <div className="row position-relative">
                            <div className="col-6 col-sm-4 mb-3">
                                <button className="no-background"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /> <div className="centered">Architecture</div></button>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb38" />
                                <button className="no-background"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /><div className="centered">Kitchen</div></button>
                            </div>
                            <div className="col-6 col-sm-4 mb-3">
                                <input type="checkbox" id="cb38" />
                                <button className="no-background"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /><div className="centered">Master Bedroom</div></button>
                            </div>
                            <div className="col-6 col-sm-4 mb-3 mx-auto">
                                <input type="checkbox" id="cb38" />
                                <button className="no-background"><img alt="img" src={`${process.env.PUBLIC_URL}/assets/rectangle.png`}  /><div className="centered">Bathroom</div></button>
                            </div>
                        </div>
                        <div className="row form-group">
                        {/* <div className="col-4">
                            <button type="button" className="btnstyle btnback">REFRESH</button>
                        </div> */}
                        <div className="col-12 text-right">
                            <button type="button" className="btnstyle btnNext">NEXT</button>
                        </div>
                    </div>  
                    </div>   
                </div>
            </div>
        )
    }
}