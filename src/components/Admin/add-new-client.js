import React, { Component } from 'react';
import RangeSlider from './range-slider';


export default class Addnewclient extends Component {
    
    state = {
        heading : 'Client Information',
        topMsg  : 'Please fill in your client’s personal information',
        step1 : true,
        step2 : false,
        step3 : false,
        stepActive : 1
    }
    next() {
        if(this.state.stepActive === 1) {
            this.setState({
                step1 : false,
                step2 : true,
                step3 : false,
                stepActive : 2,
                heading : 'Home Information',
                topMsg  : 'Fill Out Your Client’s Basic Criteria',
            })
        }else if(this.state.stepActive === 2) {
            this.setState({
                step1 : false,
                step2 : false,
                step3 : true,
                stepActive : 3,
                heading : 'Confirm',
                topMsg  : 'Are all the details correct and ready to send?',
            })
        }
    }
    back (){
        if(this.state.stepActive === 3) {
            this.setState({
                step1 : false,
                step2 : true,
                step3 : false,
                stepActive : 2,
                heading : 'Home Information',
                topMsg  : 'Fill Out Your Client’s Basic Criteria',
            })
        }else if(this.state.stepActive === 2) {
            this.setState({
                step1 : true,
                step2 : false,
                step3 : false,
                stepActive : 1,
                heading : 'Client Information',
                topMsg  : 'Please fill in your client’s personal information',
            })
        }
    }
    render() {
        // const renderThumb = useCallback(() => <Thumb/>, []);
        // const renderRail = useCallback(() => <Rail/>, []);
        // const renderRailSelected = useCallback(() => <RailSelected/>, []);
        // const renderLabel = useCallback(value => <Label text={value}/>, []);
        // const renderNotch = useCallback(() => <Notch/>, []);
        // const handleValueChange = useCallback((low, high) => {
        //     setLow(low);
        //     setHigh(high);
        // }, []);
        return (
            <div className="addNewClient">
                <div className="steps">
                    <h1>{this.state.heading}</h1>
                        <div className="stepwizard">
                            <div className="stepwizard-row setup-panel">
                                <div className="stepwizard-step">
                                    <button className={`btn btn-default ${this.state.step1 ? "step_active" : ""}`}  type="button">1</button>
                                </div>
                                <div className="stepwizard-step">
                                    <button className={`btn btn-default ${this.state.step2 ? "step_active" : ""}`} type="button">2</button>
                                </div>
                                <div className="stepwizard-step">
                                    <button className={`btn btn-default ${this.state.step3 ? "step_active" : ""}`} type="button">3</button>
                                </div>
                            </div>
                        </div>
                    <h3>{this.state.topMsg}</h3>
                </div>
                
                <div className={`step-content mt-4 ${this.state.step1 ? "step_active" : ""}`}>
                    <form>
                        <div className="row form-group">
                            <div className="col-12 col-sm-6 form-group">
                                <input type="text" className="inputStyle" placeholder="Client’s Name"/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="text" className="inputStyle" placeholder="Client’s Surname"/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-12">
                                <input type="email" className="inputStyle" placeholder="Client’s Email address"/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-12">
                                <input type="email" className="inputStyle" placeholder="Additional Email address"/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-12">
                                <input type="text" className="inputStyle" placeholder="Client’s Phone Number"/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-12">
                                <input type="text" className="inputStyle" placeholder="Client’s Partner Information (Optional)"/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-6">
                                <button type="button" className="btnstyle btnback">BACK</button>
                            </div>
                            <div className="col-6 text-right">
                                <button type="button" className="btnstyle btnNext" onClick={() => {this.next()}}>NEXT</button>
                            </div>
                        </div>
                    </form>   
                </div>

                <div className={`step-content mt-4 ${this.state.step2 ? "step_active" : ""}`}>
                    <form>
                        <div className="row form-group">
                            <div className="col-12">
                                <label className="mgBtm">Price Range ($)</label>
                                <RangeSlider min={200000} max={10000000}/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-12 col-sm-6 form-group">
                                <input type="text" className="inputStyle" placeholder="City"/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="text" className="inputStyle" placeholder="Zip Code"/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-12">
                                <label className="mgBtm">Sq. FT</label>
                                <RangeSlider min={500} max={20000}/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-12">
                            <label className="mgBtm">No Of Bedrooms</label>
                                <RangeSlider min={1} max={10}/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-12">
                            <label className="mgBtm">No Of Bathrooms</label>
                                <RangeSlider min={1} max={5}/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-12">
                                <input type="text" className="inputStyle" placeholder="Property Type"/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-6">
                                <button type="button" className="btnstyle btnback" onClick={() => {this.back()}}>BACK</button>
                            </div>
                            <div className="col-6 text-right">
                                <button type="button" className="btnstyle btnNext" onClick={() => {this.next()}}>NEXT</button>
                            </div>
                        </div>
                    </form>   
                </div>

                <div className={`step-content mt-4 ${this.state.step3 ? "step_active" : ""}`}>
                    <form>
                        <div className="row form-group">
                            <div className="col-12 text-center finalData">
                                <p>Your Client: Jane Doe</p>
                                <p>Email: Jane.doe@gmail.com</p>
                                <p>DOB: 01/01/1980</p>
                                <p>Max: $2.5M</p>
                                <p>City: Austin, Texas, 78735</p>
                                <p>Max Sq Ft: NA</p>
                                <p>Min # of Beds: 3 </p>
                                <p>Property Type: Any</p>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-6">
                                <button type="button" className="btnstyle btnback" onClick={() => {this.back()}}>BACK</button>
                            </div>
                            <div className="col-6 text-right">
                            <button className="btnstyle btnNext">SAVE</button>
                            </div>
                        </div>
                    </form>   
                </div>
            </div>
        )
    }
} 