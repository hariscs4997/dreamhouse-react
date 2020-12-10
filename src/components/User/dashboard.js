import { faHeart, faHome, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    render() {
        return (
            <section className="dashboard">
                <div className="row">
                    <div className="col-12 col-sm-4 col-lg-2">
                        <svg className="svgWidth" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M75.3614 150.723C116.982 150.723 150.723 116.982 150.723 75.3614C150.723 33.7405 116.982 0 75.3614 0C33.7405 0 0 33.7405 0 75.3614C0 116.982 33.7405 150.723 75.3614 150.723Z" fill="#7CE6E6"/>
                            <path d="M115.404 138.244C124.779 128.869 124.779 113.67 115.404 104.295C106.03 94.9197 90.8298 94.9197 81.4548 104.295C72.0799 113.67 72.0799 128.869 81.4548 138.244C90.8298 147.619 106.03 147.619 115.404 138.244Z" fill="#262424"/>
                            <path d="M75.3617 125.426C51.2765 125.426 31.6825 105.832 31.6825 81.7466V61.5771C31.6825 37.4919 51.2765 17.8979 75.3617 17.8979C99.4469 17.8979 119.056 37.4919 119.056 61.5771V81.7466C119.056 105.832 99.4469 125.426 75.3617 125.426Z" fill="#262424"/>
                            <path d="M75.3649 21.1925H75.3619C53.0598 21.1925 34.9803 39.2719 34.9803 61.5741V81.7466C34.9803 104.049 53.0598 122.128 75.3619 122.128H75.3649C97.6671 122.128 115.746 104.049 115.746 81.7466V61.5741C115.746 39.2719 97.6671 21.1925 75.3649 21.1925Z" fill="#F9C4A1"/>
                            <path d="M119.056 70.5322V62.3931C119.056 37.2209 98.1406 16.616 73.0019 17.9649C50.0098 19.1829 31.6825 38.2866 31.6825 61.5801V71.0924C31.6825 71.1655 65.6119 92.3702 84.3594 52.2536C92.0325 64.9509 103.734 70.7057 118.864 70.5565C118.931 70.6418 119.056 70.6418 119.056 70.5322Z" fill="#262424"/>
                            <path d="M34.9802 68.5835C34.3712 63.5564 35.2269 58.3039 37.203 53.4777C39.2553 48.61 42.341 44.2465 46.2464 40.6891C54.0414 33.491 64.7259 29.5904 75.3618 29.5813C85.9977 29.5722 96.6761 33.4818 104.483 40.683C108.389 44.2404 111.474 48.6039 113.527 53.4717C115.5 58.3009 116.361 63.5564 115.743 68.5835C115.189 63.6691 113.612 58.925 111.115 54.6561C108.685 50.5249 105.489 46.8946 101.7 43.9594C94.2067 38.0979 84.7827 35.0835 75.3679 35.05C65.95 35.0743 56.526 38.0949 49.0325 43.9533C45.2341 46.8869 42.0304 50.5185 39.5933 54.6531C37.1028 58.9249 35.5317 63.6696 34.9802 68.5835Z" fill="#FF7E25"/>
                            <path d="M42.2503 89.3254C42.8791 83.6205 38.7641 78.4859 33.0591 77.8571C27.3542 77.2283 22.2197 81.3433 21.5909 87.0482C20.962 92.7532 25.077 97.8877 30.782 98.5165C36.4869 99.1453 41.6214 95.0303 42.2503 89.3254Z" fill="#F9C4A1"/>
                            <path d="M128.913 90.5849C130.241 85.0012 126.791 79.398 121.208 78.0699C115.624 76.7417 110.021 80.1915 108.693 85.7752C107.364 91.3589 110.814 96.9621 116.398 98.2902C121.982 99.6184 127.585 96.1686 128.913 90.5849Z" fill="#F9C4A1"/>
                            <path d="M61.0264 96.0242C61.0264 99.8262 62.5367 103.472 65.2251 106.161C67.9135 108.849 71.5598 110.36 75.3618 110.36C79.1638 110.36 82.8101 108.849 85.4985 106.161C88.1869 103.472 89.6972 99.8262 89.6972 96.0242H61.0264Z" fill="#FFFEF9"/>
                            <path d="M92.2975 180.977C91.2041 180.977 90.1554 180.543 89.3822 179.77C88.6091 178.996 88.1747 177.948 88.1747 176.854V133.894C88.2039 132.82 88.6509 131.8 89.4206 131.051C90.1903 130.302 91.2219 129.883 92.296 129.883C93.37 129.883 94.4016 130.302 95.1714 131.051C95.9411 131.8 96.3881 132.82 96.4172 133.894V176.854C96.4172 177.947 95.9833 178.995 95.2108 179.768C94.4383 180.542 93.3904 180.976 92.2975 180.977Z" fill="#F9C4A1"/>
                            <path d="M57.7592 180.977C56.6663 180.976 55.6184 180.542 54.8459 179.768C54.0734 178.995 53.6394 177.947 53.6394 176.854V133.894C53.6686 132.82 54.1156 131.8 54.8853 131.051C55.655 130.302 56.6867 129.883 57.7607 129.883C58.8347 129.883 59.8664 130.302 60.6361 131.051C61.4058 131.8 61.8528 132.82 61.882 133.894V176.854C61.882 177.948 61.4476 178.996 60.6744 179.77C59.9012 180.543 58.8526 180.977 57.7592 180.977Z" fill="#F9C4A1"/>
                            <path d="M63.9434 129.013H86.7802C88.0247 129.013 89.2181 129.507 90.0981 130.387C90.9781 131.267 91.4724 132.46 91.4724 133.705V159.282H59.2482V133.705C59.2482 133.088 59.3696 132.478 59.6056 131.909C59.8416 131.339 60.1875 130.822 60.6236 130.386C61.0596 129.95 61.5772 129.605 62.1469 129.369C62.7165 129.133 63.327 129.012 63.9434 129.013Z" fill="#FF7E25"/>
                            <path d="M68.5105 118.377H82.2126V131.406C82.2126 133.224 81.4912 134.968 80.2067 136.255C78.9222 137.541 77.1797 138.266 75.3615 138.269C73.5434 138.266 71.8008 137.541 70.5164 136.255C69.2319 134.968 68.5105 133.224 68.5105 131.406V118.377Z" fill="#F9C4A1"/>
                            <path d="M54.3061 90.7382C53.538 90.7358 52.8021 90.4296 52.259 89.8865C51.7159 89.3434 51.4098 88.6075 51.4073 87.8395V84.1612C51.4106 83.3937 51.7171 82.6585 52.2601 82.1161C52.8031 81.5737 53.5386 81.2679 54.3061 81.2655C55.0733 81.2679 55.8085 81.5738 56.351 82.1163C56.8935 82.6588 57.1994 83.394 57.2018 84.1612V87.8395C57.2002 88.6072 56.8947 89.3431 56.3521 89.8863C55.8095 90.4295 55.0739 90.7358 54.3061 90.7382Z" fill="#262424"/>
                            <path d="M96.4234 90.7382C95.6556 90.7358 94.92 90.4295 94.3774 89.8863C93.8348 89.3431 93.5293 88.6072 93.5277 87.8395V84.1612C93.5301 83.394 93.836 82.6588 94.3785 82.1163C94.921 81.5738 95.6562 81.2679 96.4234 81.2655C97.1909 81.2679 97.9264 81.5737 98.4694 82.1161C99.0124 82.6585 99.319 83.3937 99.3222 84.1612V87.8395C99.3198 88.6075 99.0136 89.3434 98.4705 89.8865C97.9274 90.4296 97.1915 90.7358 96.4234 90.7382Z" fill="#262424"/>
                        </svg>
                    </div>
                    <div className="col-12 col-sm-8 col-lg-10">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="data">
                                    <h2>Jane D.</h2>
                                    <address>
                                        Jane.Doe@gmail.com <br />
                                        512-222-3333
                                    </address>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="data">
                                    <p>
                                        Price Range: $1M - $2.5M <br /> 
                                        Location: Austin, Texas, 78735 <br /> 
                                        Sq Ft Range: NA <br /> 
                                        # of Beds Range: 3-5 <br />
                                        Property Type: Any
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3 bottomData">
                        <p><FontAwesomeIcon  icon={faHome}  /><a className="black-shade" onClick={this.toggle}> Previous Home Tours</a> </p>
                        <p><FontAwesomeIcon icon={faHeart}  /><a className="black-shade" onClick={this.toggle}> Recommended Homes </a> </p>
                        <p><FontAwesomeIcon icon={faLink}  /><a className="black-shade" onClick={this.toggle}>Message Your Realtor</a> </p>
                        <p><FontAwesomeIcon icon={faHeart}  /><a className="black-shade" onClick={this.toggle}>Liked Images </a></p>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          {/* <ModalFooter>
            <Button color='primary' onClick={this.toggle}>Do Something</Button>{' '}
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
          </ModalFooter> */}
        </Modal>
            </section>
        )
    }
} 